import './App.css';
import { useState, useEffect } from 'react';
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements, NavLink } from 'react-router-dom';
import MainLayout from './components/Navbar';
import UserPage from './pages/UserPage';
import AdminPage from './pages/AdminPage';
import FishPage from './pages/FishPage';
import InvertebratesPage from './pages/InvertebratesPage';
import SuppliesPage from './pages/SuppliesPage';
import QuizPage from './pages/QuizPage';
import HomePage from './pages/HomePage';
import ErrorPage from './pages/ErrorPage';
import RegisterPage from './pages/RegisterPage';
import TanksPage from './pages/TanksPage';
import SearchProvider from './components/SearchProvider';


function App() {
  
  const [isAdmin, setIsAdmin] = useState(false);
  
  const routes = createBrowserRouter(
    createRoutesFromElements(
      
      <Route path="/" element={<MainLayout />}>
        <Route path="user" element={<UserPage isAdmin={isAdmin} />} />
        <Route path="admin" element={<AdminPage isAdmin={isAdmin} />} />
        <Route path="tanks" element={<TanksPage isAdmin={isAdmin} />} />
        <Route path="fish" element={<FishPage isAdmin={isAdmin} />} />
        <Route path="invertebrates" element={<InvertebratesPage isAdmin={isAdmin} />} />
        <Route path="supplies" element={<SuppliesPage isAdmin={isAdmin} />} />
        <Route path="quiz" element={<QuizPage isAdmin={isAdmin} />} />
        <Route path="register" element={<RegisterPage isAdmin={isAdmin} />} />
        <Route path="/" element={<HomePage />}>
        </Route>
        <Route path="*" element={<ErrorPage />}/>
      </Route>
    )
  ) 
  return (
    <SearchProvider>
      <RouterProvider router={routes}>
      </RouterProvider>
    </SearchProvider>
  );
}

export default App;