import './App.css';
import { useState, useEffect } from 'react';
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements, NavLink } from 'react-router-dom';
import MainLayout from './layouts/MainLayout';
import UserPage from './pages/UserPage';
import AdminPage from './pages/AdminPage';
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

 
  
  return (
    <>
    <RouterProvider router={routes} />
      <div>
        <section class="content">
          <div class="container">
            <div class="row">
              <h1>Login demo</h1>
                  <img src="\src\assets\images\fish.jpg" alt="fish" />
            </div>
          </div>

        </section>

      </div>
      
    </>
  );
}

export default App;