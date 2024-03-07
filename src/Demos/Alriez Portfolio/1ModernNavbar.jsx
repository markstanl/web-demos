import React from "react";
import { NavLink } from "react-router-dom";

const ModernNavbar = () => {
  return (
    <header className="w-3/5 h-14 bg-green-50 flex justify-between items-center text-lg absolute ">
      <div className="w-1/4 flex justify-between text-slate-400">
        <NavLink>Service</NavLink>
        <NavLink>Blog</NavLink>
        <NavLink>Products</NavLink>
      </div>
      <div>
        <NavLink className="rounded-lg bg-white">
          <h2 className="w-36 h-10 bg-white rounded-lg justify-center flex items-center">
            Home
          </h2>
        </NavLink>
      </div>
    </header>
  );
};

export default ModernNavbar;
