import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Demos/Home/Home';
import ThreeIslandMain from './Demos/3D Island/ThreeIslandMain';
import LocomotiveHome from './Demos/Locomotive Portfolio/LocomotiveHome';


export default function WebRoutes() {
    return (
        <Router>
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/3d-island/*' element={<ThreeIslandMain />} />
                <Route path='/locomotive-scroll/*' element={<LocomotiveHome />} />
            </Routes>
        </Router>
    );
}
