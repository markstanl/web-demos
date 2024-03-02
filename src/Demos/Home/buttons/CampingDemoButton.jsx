import React from "react";
import { NavLink } from "react-router-dom";
import CampingBG from "./assets/CampingBG.jpg";

const CampingDemoButton = () => {
  return (
    <div className="bg-[#1c2425] h-[80%] w-full rounded-3xl justify-center items-center mt-[10%] flex flex-col text-4xl">
      <div className="text-center text-white">
        <h1 className="font-playfair text-[#F4DA66]">Camping Demo</h1>
      </div>
      <NavLink
        to={"/camping-demo"}
        className="h-[40%] w-[90%] m-6 bg-white rounded-2xl items-center text-center overflow-hidden flex justify-center"
      >
        <img src={CampingBG} alt="Camping Demo " />
      </NavLink>
    </div>
  );
};

export default CampingDemoButton;
