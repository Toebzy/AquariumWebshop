import { NavLink, Outlet } from "react-router-dom"
import { useState, useEffect } from 'react';
import facade from '../util/apiFacade';

function RegisterPage({isAdmin}) {
    const init = { username: '', password: '' };
    const [loginCredentials, setLoginCredentials] = useState(init);
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [dataFromServer, setDataFromServer] = useState('Loading...');
    const [showLoginModal, setShowLoginModal] = useState(false);
    const [loginError, setLoginError] = useState(null);
    const performLogin = (evt) => {
        evt.preventDefault();
        facade.login(
          loginCredentials.username,
          loginCredentials.password,
          () => {
            setIsLoggedIn(true);
            setShowLoginModal(false);
            setLoginError(null);
          },
          (error) => {
            console.error('Login failed:', error);
            // Set an error state to display an error message
            setLoginError('Invalid username or password');
            }
        );
      };
    const performLogout = () => {
      facade.logout(() => {
        setIsLoggedIn(false);
        setUserRole(null);
      });
    };
    const onChange = (evt) => {
      setLoginCredentials({
        ...loginCredentials,
        [evt.target.id]: evt.target.value,
      });
    };
    const toggleLoginModal = () => {
        setLoginError(null);
      setShowLoginModal(!showLoginModal);      
    };
    return (
        <div class="content">
            <h1>RegisterPage</h1>
            <div>
                <form className="register-form" onChange={onChange}>
                    <input placeholder="User Name" id="username" />
                    <input placeholder="Password" id="password" type="password" />                    
                    <button onClick={performLogin}>Register</button>
                </form>
            </div>
        </div>
    );
}

export default RegisterPage;