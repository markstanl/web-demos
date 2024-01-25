import React from 'react';
import ThreeIslandNavbar from './ThreeIslandNavbar.jsx';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Home, About, Projects, Contact } from './Pages';

export default function ThreeIslandMain() {
    return (
        <main className='bg-slate-300/20 h-[100%]'>
            <ThreeIslandNavbar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="about" element={<About />} />
                <Route path="projects" element={<Projects />} />
                <Route path="contact" element={<Contact />} />
            </Routes>
        </main>
    );
}
