import React from "react";
import { NavLink } from "react-router-dom";

const ModernPortfolioButton = () => {
  return (
    <div
      className="bg-black h-4/5 w-full rounded-3xl justify-center items-center mt-[10%] 
    flex flex-col text-4xl font-inter font-bold"
    >
      <div className="text-center text-white">
        <h1>Modern Portfolio</h1>
      </div>
      <NavLink
        to="/modern-dark-portfolio"
        className="h-[40%] w-[90%] m-6 bg-gradient-to-r from-[#4361ee] to-[#7209b7]  
        rounded-2xl text-center inline-block text-transparent bg-clip-text justify-center items-center border-2 border-[#212121]"
      >
        <div className="flex justify-center items-center h-full w-full">
          Click Here
        </div>
      </NavLink>
      <div className="w-4/5 h-10 flex justify-around items-center">
        <div className="bg-gradient-to-r from-[#4361ee] to-[#7209b7] rounded-full h-10 w-10 border-2 border-[#FFFFFF]" />
        <div className="bg-gradient-to-r from-[#ff5400] to-[#ffbd00] rounded-full h-10 w-10 border-2 border-[#FFFFFF]" />
        <div className="bg-gradient-to-r from-[#5390d9] to-[#72efdd] rounded-full h-10 w-10 border-2 border-[#FFFFFF]" />
        <div className="bg-gradient-to-r from-[#ff0a54] to-[#ff99ac] rounded-full h-10 w-10 border-2 border-[#FFFFFF]" />
      </div>
    </div>
  );
};

export default ModernPortfolioButton;
