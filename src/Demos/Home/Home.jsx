import React, { useState, useEffect } from 'react';
import homeProjects from './homeProjects';
import { NavLink } from 'react-router-dom';
import './Home.css';

export default function Home() {

    const [isDarkMode, setIsDarkMode] = useState(false);

    useEffect(() => {
        const matchMedia = window.matchMedia('(prefers-color-scheme: dark)');
        const handleChange = (e) => setIsDarkMode(e.matches);

        matchMedia.addEventListener('change', handleChange);
        setIsDarkMode(matchMedia.matches);

        return () => matchMedia.removeEventListener('change', handleChange);
    }, []);

    let h1Style = {
        color: 'red',
        fontSize: '250px',
        margin: 20,
        fontFamily: 'Kanit, sans-serif',
    };

    /* Once we get some projects down, we will make an individual box style for each */


    return (
        <div style={{ backgroundColor: isDarkMode ? "Black" : "White" }}>
            <div style={{ display: 'grid' }}>
                <h1 style={{ ...h1Style, textAlign: 'left', color: isDarkMode ? '#f1f9f3' : "black" }}>REACT</h1>
                <h1 style={{ ...h1Style, textAlign: 'right', marginTop: -100, color: "#57bc5b" }}>DEMOS</h1>
            </div>
            <div className='flex flex-wrap pl-20 pr-20 justify-center'>
                {homeProjects.map((project, index) => (
                    <div className='block-container w-96 h-80 bg-green-200 ml-10 mb-10'>
                        {project.component ? <project.component /> : project.title}
                    </div>
                )
                )}
            </div>
        </div>
    )
}