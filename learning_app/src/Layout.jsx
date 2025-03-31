import {Link, Outlet} from "react-router-dom";
import Home from "./pages/Home.jsx";
import Header from "./Components/Header.jsx";

function Layout() {
    return (
        <>
            <Header/>
            <Outlet/>
        </>
    )
}

export default Layout;