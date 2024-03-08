import React from "react";
import ModernNavbar from "./1ModernNavbar";
import LandingPageMain from "./Landing Page Content/1ModernLandingPageMain";
import Blog from "./Blog/BlogModernPortolioLanding";
import { Routes, Route } from "react-router-dom";

const ModernPortfolio = () => {
  return (
    <div className="w-screen h-full bg-black flex flex-col items-center font-inter">
      <ModernNavbar />
      <Routes>
        <Route path="/" element={<LandingPageMain />} />
        <Route path="/blog" element={<Blog />} />
      </Routes>
    </div>
  );
};

export default ModernPortfolio;
