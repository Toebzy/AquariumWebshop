import { NavLink, Outlet } from "react-router-dom"
function MainLayout() {
    return (
        <div id="page">
        <div id="container">
        <NavLink to="/">Home</NavLink> | <NavLink to="admin">Admin page</NavLink> | <NavLink to="user">User page</NavLink> | <NavLink to="fish">Fish page</NavLink> | <NavLink to="invertebrates">Invertebrates page</NavLink> | <NavLink to="aquariums">Aquariums page</NavLink> | <NavLink to="supplies">Supplies page</NavLink> | <NavLink to="quiz">Quiz page</NavLink>
        <h1>React Router</h1>
        <div>
        <Outlet/>
        </div>
        </div>
        </div>
    );
}

export default MainLayout;