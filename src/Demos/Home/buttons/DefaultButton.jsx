import React from 'react'
import { NavLink } from 'react-router-dom'

const DefaultButton = ({ title, link }) => {
    return (
        <div className='bg-red-300 h-[80%] w-full rounded-3xl justify-center items-center mt-[10%] flex flex-col text-4xl'>
            <div className='text-center text-white'>
                <h1>{title}</h1>
            </div>
            <NavLink
                to={link}
                className='h-[40%] w-[90%] m-6 bg-white rounded-2xl items-center text-center'>
                Click Here
            </NavLink>
        </div>
    )
}

export default DefaultButton