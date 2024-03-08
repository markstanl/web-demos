import React from "react";

const ButtonComponent = ({ text, color, image }) => {
  const bgColorClass = color === "blue" ? "bg-blue-600" : "bg-white";
  const bgColorClassHover =
    color === "blue" ? "hover:bg-blue-500" : "hover:bg-gray-200";
  const textColorClass = color !== "blue" ? "text-black" : "text-white";

  return (
    <>
      {!image && (
        <div
          className={`w-20 h-10 rounded-md flex justify-center items-center text-center cursor-pointer ${bgColorClass} ${bgColorClassHover} ${textColorClass}`}
        >
          {text}
        </div>
      )}
      {image && (
        <div
          className={`w-10 h-10 bg-white rounded-md flex justify-center cursor-pointer items-center text-center ${bgColorClass} ${bgColorClassHover}`}
        >
          <img src={image} alt="icon" className="h-4" />
        </div>
      )}
    </>
  );
};

export default ButtonComponent;
