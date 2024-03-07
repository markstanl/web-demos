import React from "react";

const ButtonComponent = ({ text, color }) => {
  return (
    <div
      className={`w-20 h-10 bg-${color} rounded-lg flex justify-center items-center text-center`}
    >
      {text}
    </div>
  );
};

export default ButtonComponent;
