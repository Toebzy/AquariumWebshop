import { NavLink, Outlet } from "react-router-dom"
import { useState, useEffect } from 'react';
function MainLayout() {

    return (
        <div id="page">
        <div id="container">
    <nav class="navigation">
                    <ul class="nav_list">
                      <li class="nav-item"><NavLink to="fish">Fish page</NavLink></li>
                      <li class="nav-item">Invertebrates</li>
                      <li class="nav-item">Supplies</li>
                      <li class="nav-item">Tanks</li>
                    </ul>
                  </nav>
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