import React from 'react'
import LocomotiveNavbar from './LocomotiveNavbar'
import './LocomotiveStyles.css'

const LocomotiveHome = () => {
    return (
        <div className='font-zen-mar bg-background-locomotive h-[100vh] flex flex-col center'>
            <LocomotiveNavbar />
            <div className='w-[100%] h-[90px]' />
            <hr style={{
                backgroundColor: '#283618',
                height: 3,
                borderColor: '#283618',
                borderRadius: 5,
                width: '80%',
                marginLeft: '10%',
            }} />
        </div>
    )
}

export default LocomotiveHome