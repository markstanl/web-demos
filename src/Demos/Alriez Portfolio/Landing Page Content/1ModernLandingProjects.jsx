import React from "react";
import ProjectsComponent from "./ProjectsComponent";

const Projects = () => {
  return (
    <div className="flex w-full flex-col items-center">
      <p
        className="w-10 h-10 mt-36 rounded-full bg-gradient-to-r text-xl from-[#ff5400] to-[#ffbd00] 
  flex justify-center items-center text-center"
      >
        2
      </p>
      <h1
        className="bg-gradient-to-r mt-6 text-2xl from-[#ff5400] to-[#ffbd00]  
  inline-block text-transparent bg-clip-text"
      >
        Projects
      </h1>
      <hr className="border-[#212121] border-[1.5px] w-full mt-6" />
      <ProjectsComponent
        title={"Degree Auditor"}
        body={"Full stack and informative degree audit for UW-Madison Students"}
      />
      <ProjectsComponent
        title={"Cocoflix"}
        body={"Movie and TV library built for children"}
      />
      <ProjectsComponent
        title={"Storage Wars Online"}
        body={"Gameification of the classic TV show, win real storage units"}
      />
    </div>
  );
};

export default Projects;
