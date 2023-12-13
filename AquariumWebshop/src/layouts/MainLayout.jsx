import { NavLink, Outlet } from "react-router-dom"
import { useState, useEffect } from 'react';
function MainLayout() {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [isAdmin, setIsAdmin] = useState(false);
    return (
        <div id="page">
        <div id="container">
        {isLoggedIn ? (
        <>
        {isAdmin && <NavLink to="admin">Admin page</NavLink>}
        {!isAdmin && <NavLink to="user">User page</NavLink>}
        {' | '}
        </>
    ) : (
    <NavLink to="login">Login</NavLink>
    )}
        <NavLink to="fish">Fish page</NavLink> {' | '}
        <NavLink to="invertebrates">Invertebrates page</NavLink> {' | '}
        <NavLink to="aquariums">Aquariums page</NavLink> {' | '}
        <NavLink to="supplies">Supplies page</NavLink> {' | '}
        <NavLink to="quiz">Quiz page</NavLink> 
        <h1>React Router</h1>
        <div>
        <Outlet/>
        </div>
        </div>
        </div>
    );
}

export default MainLayout;