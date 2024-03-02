import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import CampingLogo from "./Camping Logo.png";

const CampingNavbar = () => {
  const [hover, setHover] = useState(null);

  return (
    <header className="flex justify-between pl-8 pr-8 pt-6 text-2xl absolute bg-transparent w-full text-white font-playfair">
      <NavLink className="flex items-center" to="/camping-demo">
        <img src={CampingLogo} alt="Camping Logo" className="h-6" />
        <h1 className="pl-1">GoCamp</h1>
      </NavLink>
      <div className="flex gap-7">
        <NavLink
          to="/"
          onMouseEnter={() => setHover(0)}
          onMouseLeave={() => setHover(null)}
        >
          <p style={{ color: hover === 0 ? "#d27641" : "#FFFFFF" }}>Home</p>
        </NavLink>
        <NavLink
          onMouseEnter={() => setHover(1)}
          onMouseLeave={() => setHover(null)}
          to="/camping-demo/about"
        >
          <p style={{ color: hover === 1 ? "#d27641" : "#FFFFFF" }}>About</p>
        </NavLink>
        <NavLink
          onMouseEnter={() => setHover(2)}
          onMouseLeave={() => setHover(null)}
          to="/camping-demo/about"
        >
          <p style={{ color: hover === 2 ? "#d27641" : "#FFFFFF" }}>Purchase</p>
        </NavLink>
      </div>
    </header>
  );
};

export default CampingNavbar;
