import React, { useEffect, useState, Suspense } from "react";
import LandingPageCamping from "./Forest Components/LandingPageCamping";
import CampingDescription from "./CampingDescription";
import CampingNavbar from "./CampingNavbar";
import { Routes, Route } from "react-router-dom";

const CampingHome = () => {
  return (
    <div className="w-screen h-screen flex bg-black justify-center overflow-hidden">
      <CampingNavbar className="absolute" />
      <Routes>
        <Route path="/" element={<LandingPageCamping />} />
        <Route path="/about" element={<CampingDescription />} />
      </Routes>
    </div>
  );
};

export default CampingHome;
