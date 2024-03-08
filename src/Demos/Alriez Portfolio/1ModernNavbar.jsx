import React, { useEffect, useState } from "react";
import { NavLink, useLocation } from "react-router-dom";

const ModernNavbar = () => {
  const { pathname } = useLocation();
  const [path, setPath] = useState(pathname);

  useEffect(() => {
    setPath(pathname);
  }, [pathname]);

  return (
    <header className="w-3/5 h-14 bg-transparent flex justify-between items-center text-lg absolute mt-6">
      <div className="w-1/4 flex justify-between text-slate-400">
        <NavLink
          to="/modern-dark-portfolio/"
          style={{
            textDecoration:
              path === "/modern-dark-portfolio/" ? "underline" : "none",
          }}
        >
          Service
        </NavLink>
        <NavLink
          to="/modern-dark-portfolio/blog"
          style={{
            textDecoration:
              path === "/modern-dark-portfolio/blog" ? "underline" : "none",
          }}
        >
          Blog
        </NavLink>
        <NavLink
          to="/modern-dark-portfolio/products"
          style={{
            textDecoration:
              path === "/modern-dark-portfolio/products" ? "underline" : "none",
          }}
        >
          Products
        </NavLink>
      </div>
      <div>
        <NavLink
          className="rounded-lg bg-white"
          to="/"
          style={{
            textDecoration: path === "/" ? "underline" : "none",
          }}
        >
          <h2 className="w-36 h-10 bg-white rounded-lg justify-center flex items-center">
            Home
          </h2>
        </NavLink>
      </div>
    </header>
  );
};

export default ModernNavbar;
