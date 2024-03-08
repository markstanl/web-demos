import React, { useEffect, useState } from "react";
import ButtonComponent from "./1ModernButtonComponent";
import github from "./Assets/github.png";
import linkedin from "./Assets/linkedin.png";
import About from "./1ModernLandingAbout";
import Projects from "./1ModernLandingProjects";
import Timeline from "./TimelineModernProjects";

const LandingPageMain = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % 4); // 4 is the number of styles
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const styleDet = () => {
    if (index === 0) {
      return "bg-gradient-to-r from-[#4361ee] to-[#7209b7] inline-block text-transparent bg-clip-text";
    } else if (index === 1) {
      return "bg-gradient-to-r  from-[#ff5400] to-[#ffbd00] inline-block text-transparent bg-clip-text";
    } else if (index === 2) {
      return "bg-gradient-to-r from-[#5390d9] to-[#72efdd] inline-block text-transparent bg-clip-text";
    } else {
      return "bg-gradient-to-r from-[#ff0a54] to-[#ff99ac] inline-block text-transparent bg-clip-text";
    }
  };

  return (
    <div className="flex flex-col items-center w-4/5  mt-36 font-inter font-bold ">
      <h1 className="text-white text-5xl text-center w-1/2">
        Student software developer specializing in{" "}
        <span className={styleDet()}>React</span>
      </h1>
      <h2 className="text-slate-500 mt-6 text-center w-3/5 text-xl">
        I have a strong foundation in HTML, CSS, and work mainly with React and
        Tailwind, focused on making compelling and responsive web applications
      </h2>
      <div className="w-2/5 flex flex-row justify-around mt-6">
        <ButtonComponent text="Contact" color="blue" />
        <ButtonComponent text="Projects" />
        <ButtonComponent text="Resume" />
        <ButtonComponent image={github} />
        <ButtonComponent image={linkedin} />
      </div>
      <About />
      <Projects />
      <Timeline />
    </div>
  );
};

export default LandingPageMain;
