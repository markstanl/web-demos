import React, { useState, useEffect } from "react";
import homeProjects from "../../utils/homeProjects";
import "./Home.css";
import DefaultButton from "./buttons/DefaultButton";
import logoImage from "./weblogodemo.png";

export default function Home() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const matchMedia = window.matchMedia("(prefers-color-scheme: dark)");
    const handleChange = (e) => setIsDarkMode(e.matches);

    matchMedia.addEventListener("change", handleChange);
    setIsDarkMode(matchMedia.matches);

    return () => matchMedia.removeEventListener("change", handleChange);
  }, []);

  let h1Style = {
    color: "red",
    fontSize: "250px",
    margin: 20,
    fontFamily: "Syne, sans-serif",
  };

  /* Once we get some projects down, we will make an individual box style for each */

  return (
    <div style={{ backgroundColor: isDarkMode ? "#C2F0FF" : "#C2F0FF" }}>
      <div style={{ display: "grid" }}>
        <img src={logoImage} alt="WEB DEMOS" className="w-full" />
      </div>
      <div className="flex flex-wrap pl-20 pr-20 justify-center">
        {homeProjects.map((project, index) => (
          <div className="block-container items-center justify-center w-96 h-80 ml-10 mb-10">
            {project.component ? (
              <project.component
                backgroundColor={isDarkMode ? "Black" : "White"}
              />
            ) : (
              <DefaultButton title={project.title} link={project.path} />
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
