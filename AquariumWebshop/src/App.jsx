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
        <Route path="login" element={<LoginPage isAdmin={isAdmin}/>}/>
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
  const [showLoginModal, setShowLoginModal] = useState(false);

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
  const toggleLoginModal = () => {
    setShowLoginModal(!showLoginModal);
  };
  
  return (
    <>
       <div>
        <header>
          <div class="header_background">
            <div class="container container--1400">
              <div class="header_inner">
                <a href="/" class="logo">
                  <img src="src\assets\images\logo.png" width="170"></img>
                </a>
                <div class="search_and_nav">
                  <div class="search">
                    <div>
                      <input type="text" class="search_bar" placeholder="Search" aria-label="Search" aria-describedby="search-addon" />
                    </div>
                  </div>
                  <nav class="navigation">
                    <ul class="nav_list">
                      <li class="nav-item">Fish</li>
                      <li class="nav-item">Invertebrates</li>
                      <li class="nav-item">Supplies</li>
                      <li class="nav-item">Tanks</li>
                    </ul>
                  </nav>
                </div>
                <div class="header_buttons">
                  <button class="header_button">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" class="header__button-icon"><path d="M80 0C87.47 0 93.95 5.17 95.6 12.45L100 32H541.8C562.1 32 578.3 52.25 572.6 72.66L518.6 264.7C514.7 278.5 502.1 288 487.8 288H158.2L172.8 352H496C504.8 352 512 359.2 512 368C512 376.8 504.8 384 496 384H160C152.5 384 146.1 378.8 144.4 371.5L67.23 32H16C7.164 32 0 24.84 0 16C0 7.164 7.164 0 16 0H80zM107.3 64L150.1 256H487.8L541.8 64H107.3zM128 456C128 425.1 153.1 400 184 400C214.9 400 240 425.1 240 456C240 486.9 214.9 512 184 512C153.1 512 128 486.9 128 456zM184 480C197.3 480 208 469.3 208 456C208 442.7 197.3 432 184 432C170.7 432 160 442.7 160 456C160 469.3 170.7 480 184 480zM512 456C512 486.9 486.9 512 456 512C425.1 512 400 486.9 400 456C400 425.1 425.1 400 456 400C486.9 400 512 425.1 512 456zM456 432C442.7 432 432 442.7 432 456C432 469.3 442.7 480 456 480C469.3 480 480 469.3 480 456C480 442.7 469.3 432 456 432z"></path></svg>
                    <span class="button_text">Kurv</span>
                  </button>
                  <button class="header_button" onClick={toggleLoginModal}>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" class="header__button-icon"><path d="M80 0C87.47 0 93.95 5.17 95.6 12.45L100 32H541.8C562.1 32 578.3 52.25 572.6 72.66L518.6 264.7C514.7 278.5 502.1 288 487.8 288H158.2L172.8 352H496C504.8 352 512 359.2 512 368C512 376.8 504.8 384 496 384H160C152.5 384 146.1 378.8 144.4 371.5L67.23 32H16C7.164 32 0 24.84 0 16C0 7.164 7.164 0 16 0H80zM107.3 64L150.1 256H487.8L541.8 64H107.3zM128 456C128 425.1 153.1 400 184 400C214.9 400 240 425.1 240 456C240 486.9 214.9 512 184 512C153.1 512 128 486.9 128 456zM184 480C197.3 480 208 469.3 208 456C208 442.7 197.3 432 184 432C170.7 432 160 442.7 160 456C160 469.3 170.7 480 184 480zM512 456C512 486.9 486.9 512 456 512C425.1 512 400 486.9 400 456C400 425.1 425.1 400 456 400C486.9 400 512 425.1 512 456zM456 432C442.7 432 432 442.7 432 456C432 469.3 442.7 480 456 480C469.3 480 480 469.3 480 456C480 442.7 469.3 432 456 432z"></path></svg>
                    <span className="button_text">{isLoggedIn ? 'Log out' : 'Log in'}</span>
                  </button>
                </div>
                {showLoginModal && (
        <div className="login-modal">
          <form onChange={onChange}>
            <input placeholder="User Name" id="username" />
            <input placeholder="Password" id="password" type="password" />
            <button onClick={performLogin}>Login</button>
          </form>
        </div>
      )}
              </div>
              
          </div>
          </div>
          <div class="under_header_background">
            <div class="container">
              <ul class="under_header">
                <li>omg jeg elsker fisk!!!</li>
              </ul>
            </div>
          </div>
        </header>
        <section class="content">
          <div class="container">
            <div class="row">
              <h1>Login demo</h1>

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
          </div>
          
        </section>
 
      </div>
      <RouterProvider router={routes}/>
    </>
  );
}

export default App;