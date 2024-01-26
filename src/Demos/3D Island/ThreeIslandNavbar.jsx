import React from 'react';
import { NavLink } from 'react-router-dom';

export default function ThreeIslandNavbar() {
    return (
        <header className="header flex justify-between">
            <NavLink
                to="/3d-island"
                className="w-10 h-10 rounded-lg bg-white items-center justify-center flex font-bold shadow-md"
            >
                <p className="primary-accent-gradient">ms</p>
            </NavLink>
            <nav className="flex text-lg gap-7 font-medium">
                <NavLink
                    to="/3d-island/about"
                    className={({ isActive }) => (isActive ? "text-primary" : "text-black")}
                >
                    About
                </NavLink>
                <NavLink
                    to="/3d-island/projects"
                    className={({ isActive }) => (isActive ? "text-primary" : "text-black")}
                >
                    Projects
                </NavLink>
            </nav>
        </header>
    )
}
