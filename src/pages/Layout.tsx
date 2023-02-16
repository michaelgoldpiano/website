import React from "react";
import { Outlet, NavLink } from "react-router-dom";
import "../css/style.css";


export default function Layout(): JSX.Element {
    return (
        <>
            <nav>
                <div className="nav">
                    <NavLink to="/">About</NavLink>
                    <NavLink to="/software">Software</NavLink>
                    <NavLink to="/audio">Audio</NavLink>
                    <NavLink to="/acrobatics">Acrobatics</NavLink>
                    {/* <NavLink to="/contact">Contact</NavLink> */}
                </div>
            </nav>

            <Outlet/>
        </>
    );
}