import React from "react";
import ModernNavbar from "./1ModernNavbar";
import LandingPageMain from "./Landing Page Content/1ModernLandingPageMain";

const ModernPortfolio = () => {
  return (
    <div className="w-screen h-screen bg-black flex flex-col items-center">
      <ModernNavbar />
      <LandingPageMain />
    </div>
  );
};

export default ModernPortfolio;
