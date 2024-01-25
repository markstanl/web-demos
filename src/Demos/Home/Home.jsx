import React from 'react';
import homeProjects from './homeProjects';
import { NavLink } from 'react-router-dom';

export default function Home() {

    const isDarkMode = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;

    let h1Style = {
        color: 'red',
        fontSize: '250px',
        margin: 20,
        fontFamily: 'Kanit, sans-serif',
    };

    const boxStyle = {
        height: 300,
        padding: 20,
        margin: 40,
        display: 'grid',
        backgroundColor: "#95da99",
        borderRadius: 20,
        justifyContent: 'center',
        gridTemplateRows: '1fr 2fr',
    }

    /* Once we get some projects down, we will make an individual box style for each */

    return (
        <div style={{ backgroundColor: isDarkMode ? "Black" : "White" }}>
            <div style={{ display: 'grid' }}>
                <h1 style={{ ...h1Style, textAlign: 'left', color: isDarkMode ? '#f1f9f3' : "black" }}>REACT</h1>
                <h1 style={{ ...h1Style, textAlign: 'right', marginTop: -100, color: "#57bc5b" }}>DEMOS</h1>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr' }}>
                {homeProjects.map((project, index) => {
                    return (
                        <div key={index} style={{ ...boxStyle, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                            <h1 style={{ fontSize: 80, margin: 0, textAlign: 'center', width: "100%" }}>{project.title}</h1>
                            <div style={{ textAlign: 'center', height: '80%', backgroundColor: '#f1f9f3', borderRadius: '20px', width: '90%', alignItems: 'center' }}>
                                <NavLink to={project.path} style={{
                                    height: '100%', width: '100%',
                                    display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'black'
                                }}>
                                    Button
                                </NavLink>
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}