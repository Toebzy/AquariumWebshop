import { NavLink, Outlet } from "react-router-dom"
import { useState } from 'react';
import facade from '../util/apiFacade';
import React, { useContext } from 'react';
import { SearchContext } from "../components/SearchProvider";

  const RegisterPage = () => {
    const { searchQuery } = useContext(SearchContext);
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
  
    const handleRegister = () => {
      facade.register(
        username,
        password,
        () => {
          // Registration successful, you can redirect or handle it as needed
          console.log('Registration successful');
        },
        () => {
          // Registration failed, handle the error (e.g., show an error message)
          console.log('Registration failed');
        }
      );
    };
  
    return (
      <div className="register-form">
        <h2>Sign up here</h2>
        <form className="register-form">
          <label>            
            <input type="text" placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)} />
          </label>
          <br />
          <label>      
            <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
          </label>
          <br />
          <button onClick={handleRegister}>
            Register
          </button>
        </form>
      </div>
    );
  };
  
  export default RegisterPage;