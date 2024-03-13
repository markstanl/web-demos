import React, { useEffect } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import NavbarMain from "./Navbar/NavbarMain";
import Home from "./Home/Home";
import RightBar from "./Right Bar/RightBar";

const PosterMain = () => {
  const navigate = useNavigate();

  useEffect(() => {
    navigate("/flamingo-post/home");
  }, [navigate]);

  return (
    <div className="bg-black w-screen h-full flex justify-center">
      <div className="w-4/5 h-full bg-white flex">
        {/* Container for side navbar, tweets, and right search bar */}
        <NavbarMain />
        <div className="w-1/4 h-full" />
        <Routes>
          <Route path="/home" element={<Home />} />
        </Routes>
        <RightBar />
      </div>
    </div>
  );
};

export default PosterMain;
