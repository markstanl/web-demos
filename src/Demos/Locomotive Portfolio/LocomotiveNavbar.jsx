import React from 'react'
import { NavLink } from 'react-router-dom'

const LocomotiveNavbar = () => {
    return (
        <header className="header flex justify-between font-zen-maru font-bold ">
            <NavLink to='/locomotive-scroll'
                className='primary-secondary-gradient-locomotive text-4xl gap-7 font-bold'>
                HOME
            </NavLink>
            <nav className="flex text-2xl gap-7">
                <NavLink to='/locomotive-scroll/about'
                    className={({ isActive }) => (isActive ? "secondary-accent-gradient-locomotive" : "text-black")}>
                    ABOUT
                </NavLink>
                <NavLink to='/locomotive-scroll/contact'
                    className={({ isActive }) => (isActive ? "secondary-accent-gradient-locomotive" : "text-black")}>
                    CONTACT
                </NavLink>
            </nav>
        </header>
    )
}

export default LocomotiveNavbar