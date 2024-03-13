import React from "react";
import { NavLink } from "react-router-dom";

const ButtonComponent = ({ title, icon }) => {
  return (
    <NavLink
      className="h-[3.2rem] rounded-full bg-transparent flex items-center text-white 
    text-xl gap-4 mb-2 cursor-pointer hover:bg-[#333333] transition-colors"
      to="/"
    >
      <img src={icon} alt="icon" className="w-7 h-7 filter invert ml-7" />
      <p className="mr-8">{title}</p>
    </NavLink>
  );
};

export default ButtonComponent;
