import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Demos/Home/Home";
import ThreeIslandMain from "./Demos/3D Island/ThreeIslandMain";
import LocomotiveHome from "./Demos/Locomotive Portfolio/LocomotiveHome";
import InfiniteTextMove from "./Demos/Infinite Text Move/InfiniteTextMove";
import MouseDemos from "./Demos/Mouse Demos/MouseDemos";
import CampingHome from "./Demos/Camping Demo/CampingHome";
import ModernPortfolio from "./Demos/Alriez Portfolio/1ModernPortfolio";
import PosterMain from "./Demos/Twitter Clone/PosterMain";

export default function WebRoutes() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/3d-island/*" element={<ThreeIslandMain />} />
        <Route path="/locomotive-scroll/*" element={<LocomotiveHome />} />
        <Route path="/infinite-text-move/*" element={<InfiniteTextMove />} />
        <Route path="/mouse-demos/*" element={<MouseDemos />} />
        <Route path="/camping-demo/*" element={<CampingHome />} />
        <Route path="/modern-dark-portfolio/*" element={<ModernPortfolio />} />
        <Route path="/flamingo-post/*" element={<PosterMain />} />
      </Routes>
    </Router>
  );
}
