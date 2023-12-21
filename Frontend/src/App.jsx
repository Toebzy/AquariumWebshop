import './App.css';
import { useState, useEffect, useContext } from 'react';
import { BrowserRouter, Route, Routes, RouterProvider, createBrowserRouter, createRoutesFromElements, NavLink, useLocation} from 'react-router-dom';
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
import { SearchContext } from './components/SearchProvider';
import CartPage from './pages/CartPage';


function App() {
  return (

    <BrowserRouter>
      <SearchProvider>
        <Inner/>
      </SearchProvider>
    </BrowserRouter>
  );
}
function Inner(){
  const location = useLocation();
  const { clearSearch } = useContext(SearchContext);

  const [isAdmin, setIsAdmin] = useState(false);
  // Listen for route changes and clear search query
  useEffect(() => {
    // Call clearSearch when the route changes

    clearSearch();
  }, [location]);
  

  return(
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route path="user" element={<UserPage isAdmin={isAdmin} />} />
        <Route path="admin" element={<AdminPage isAdmin={isAdmin} />} />
        <Route path="tanks" element={<TanksPage isAdmin={isAdmin} />} />
        <Route path="fish" element={<FishPage isAdmin={isAdmin} />} />
        <Route path="invertebrates" element={<InvertebratesPage isAdmin={isAdmin} />} />
        <Route path="supplies" element={<SuppliesPage isAdmin={isAdmin} />} />
        <Route path="quiz" element={<QuizPage isAdmin={isAdmin} />} />
        <Route path="register" element={<RegisterPage isAdmin={isAdmin} />} />
        <Route path="cart" element={<CartPage isAdmin={isAdmin} />} />
        <Route path="/" element={<HomePage />}>
        </Route>
        <Route path="*" element={<ErrorPage />}/>
      </Route></Routes>
  )
  
}

export default App;