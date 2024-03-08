import React from "react";

const ProjectsComponent = ({ title, body }) => {
  return (
    <>
      <div className="ml-2 w-4/5 h-10 bg-transparent flex flex-row justify-between items-center color-black mt-6 font-inter">
        <div className="border-[#212121] hover:bg-[#212121] border-[2px] w-40 h-full cursor-pointer rounded-2xl flex justify-center items-center">
          <h1 className="text-center text-white">{title}</h1>
        </div>
        <p className="text-white">{body}</p>
      </div>
      <hr className="border-[#212121] border-[1.5px] w-full mt-6" />
    </>
  );
};

export default ProjectsComponent;
