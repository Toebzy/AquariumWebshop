import { NavLink, Outlet } from "react-router-dom"
function MainLayout() {
    return (
        <div id="page">
        <div id="container">
        <NavLink to="/">Home</NavLink> | <NavLink to="admin">Admin page</NavLink> | <NavLink to="user">User page</NavLink>
        <h1>React Router</h1>
        <div>
        <Outlet/>
        </div>
        </div>
        </div>
    );
}

export default MainLayout;