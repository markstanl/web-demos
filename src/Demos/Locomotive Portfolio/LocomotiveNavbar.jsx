import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'

const LocomotiveNavbar = () => {

    const [aboutHover, setAboutHover] = useState(false)
    const [contactHover, setContactHover] = useState(false)

    return (
        <header className="header flex justify-between font-zen-maru font-bold w-[100vw] h-[90px]">
            <NavLink to='/locomotive-scroll'
                className='primary-secondary-gradient-locomotive text-4xl gap-7 font-bold'
            >
                HOME
            </NavLink>
            <nav className="flex text-2xl gap-7">
                <NavLink exact to='/locomotive-scroll/about'
                    onMouseEnter={() => setAboutHover(true)}
                    onMouseLeave={() => setAboutHover(false)}
                    className={({ isActive }) => (isActive ? "secondary-accent-gradient-locomotive"
                        : (!contactHover ? "text-black" : "primary-dark-primary-gradient-locomotive"))}>
                    ABOUT
                </NavLink>
                <NavLink to='/locomotive-scroll/contact'
                    onMouseEnter={() => setContactHover(true)}
                    onMouseLeave={() => setContactHover(false)}
                    className={({ isActive }) => (isActive ? "secondary-accent-gradient-locomotive"
                        : (!contactHover ? "text-black" : "primary-dark-primary-gradient-locomotive"))}>
                    CONTACT
                </NavLink>
            </nav>
        </header >
    )
}

export default LocomotiveNavbar