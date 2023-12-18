import { NavLink, Outlet } from "react-router-dom"
import { useState } from 'react';
import facade from '../util/apiFacade';

  const RegisterPage = () => {
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
      <div>
        <h2>Register</h2>
        <form>
          <label>
            Username:
            <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
          </label>
          <br />
          <label>
            Password:
            <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
          </label>
          <br />
          <button type="button" onClick={handleRegister}>
            Register
          </button>
        </form>
      </div>
    );
  };
  
  export default RegisterPage;