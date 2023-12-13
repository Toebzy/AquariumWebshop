import './App.css';
import { useState, useEffect } from 'react';
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom';
import MainLayout from './layouts/MainLayout';
import UserPage from './pages/UserPage';
import AdminPage from './pages/AdminPage';
import facade from './util/apiFacade';
import AquariumsPage from './pages/AquariumsPage';
import FishPage from './pages/FishPage';
import InvertebratesPage from './pages/InvertebratesPage';
import SuppliesPage from './pages/SuppliesPage';
import QuizPage from './pages/QuizPage';


function App() {
  const [isAdmin, setIsAdmin] = useState(false);
  
  const routes = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<MainLayout/>}>
        <Route path="user" element={<UserPage isAdmin={isAdmin}/>}/>
        <Route path="admin" element={<AdminPage isAdmin={isAdmin}/>}/>
        <Route path="aquariums" element={<AquariumsPage isAdmin={isAdmin}/>}/>
        <Route path="fish" element={<FishPage isAdmin={isAdmin}/>}/>
        <Route path="invertebrates" element={<InvertebratesPage isAdmin={isAdmin}/>}/>
        <Route path="supplies" element={<SuppliesPage isAdmin={isAdmin}/>}/>
        <Route path="quiz" element={<QuizPage isAdmin={isAdmin}/>}/>
      </Route>
    )
  )

  const init = { username: '', password: '' };
  const [loginCredentials, setLoginCredentials] = useState(init);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [dataFromServer, setDataFromServer] = useState('Loading...');

  useEffect(() => {
    facade.fetchData('hotels', 'GET').then((data) => setDataFromServer(data));
  }, [isLoggedIn]);

  const performLogin = (evt) => {
    evt.preventDefault();
    facade.login(
      loginCredentials.username,
      loginCredentials.password,
      setIsLoggedIn
    );
  };
  const onChange = (evt) => {
    setLoginCredentials({
      ...loginCredentials,
      [evt.target.id]: evt.target.value,
    });
  };

  return (
    <>
      <div>
        <h1>Login Demo</h1>

        <form onChange={onChange}>
          <input placeholder="User Name" id="username" />
          <input placeholder="Password" id="password" />
          <button onClick={performLogin}>Login</button>
        </form>

        <div>
          {isLoggedIn ? (
            <div>
              <p>Du er logget ind, {facade.getUserRoles()}</p>
              <button onClick={() => facade.logout(setIsLoggedIn)}>
                Log out
              </button>
              {dataFromServer.map((hotel) => (
                <p key={hotel.id}>{hotel.hotelName}</p>
              ))}
            </div>
          ) : (
            <p>Log på for at være med i klubben, Mulle</p>
          )}
        </div>
      </div>
      <RouterProvider router={routes}/>
    </>
  );
}

export default App;