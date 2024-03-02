import React from "react";
import CampingBG from "./CampingBG.jpg";
import { BookLoader } from "react-awesome-loaders";

const CampingSuspense = () => {
  return (
    <div className="w-full h-full flex justify-center items-center font-playfair ">
      <img src={CampingBG} alt="Loading..." className="w-full h-full" />
      <BookLoader
        background={"linear-gradient(135deg, #311A0C, #311A0C)"}
        className={"absolute font-playfair"}
        shadowColor={"#131001"}
        text={"Loading"}
      />
    </div>
  );
};

export default CampingSuspense;
