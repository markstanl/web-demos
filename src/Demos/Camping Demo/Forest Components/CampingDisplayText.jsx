import React from "react";

const CampingDisplayText = () => {
  return (
    <div className="absolute w-[42%] flex flex-col items-center">
      <div className="flex justify-center w-full  h-50 mt-20">
        <h1 className="text-5xl text-white text-center font-playfair">
          Embrace the{" "}
          <span className="text-[#F4DA66] font-medium italic">
            Great Outdoors:{" "}
          </span>
          Equip Yourself for{" "}
          <span className="text-[#F4DA66] font-medium italic">Adventure</span>
        </h1>
      </div>
    </div>
  );
};

export default CampingDisplayText;
