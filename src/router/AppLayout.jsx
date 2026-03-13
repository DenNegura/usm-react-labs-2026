import CustomNavLink from "./CustomNavLink.jsx";
import {Link, Outlet} from "react-router";

export default function AppLayout() {
    return (
        <>
            <header>
                <nav>
                    <CustomNavLink to="/">Main</CustomNavLink>
                    <CustomNavLink to="/tasks">Tasks</CustomNavLink>
                    <CustomNavLink to="/about">About</CustomNavLink>
                </nav>
            </header>
            <Outlet/>
            <footer>2026</footer>
        </>
    )
}
