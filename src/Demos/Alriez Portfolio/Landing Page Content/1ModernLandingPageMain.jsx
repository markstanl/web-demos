import React, { useEffect, useState } from "react";
import ButtonComponent from "./1ModernButtonComponent";

const LandingPageMain = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % 3); // 3 is the number of styles
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const styleDet = () => {
    if (index === 0) {
      return "red";
    } else if (index === 1) {
      return "blue";
    } else {
      return "green";
    }
  };

  return (
    <div className="flex flex-col items-center w-4/5  mt-36 ">
      <h1 className="text-white text-5xl text-center w-1/2">
        Student software developer specializing in{" "}
        <span style={{ color: styleDet() }}>React</span>
      </h1>
      <h2 className="text-slate-500 mt-6 text-center w-3/5 text-xl">
        I have a strong foundation in HTML, CSS, and work mainly with React and
        Tailwind, focused on making compelling and responsive web applications
      </h2>
      <div className="w-2/5 flex flex-row justify-around mt-6">
        <ButtonComponent text="Contact" color="white" />
        <ButtonComponent text="Projects" color="white" />
        <ButtonComponent text="Resume" color="white" />
      </div>
    </div>
  );
};

export default LandingPageMain;
