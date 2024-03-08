import React from "react";

const About = () => {
  return (
    <div className="flex flex-col items-center">
      <p
        className="w-10 h-10 mt-36 rounded-full bg-gradient-to-r text-xl from-[#4361ee] to-[#7209b7] 
      flex justify-center items-center text-center"
      >
        1
      </p>
      <h1
        className="bg-gradient-to-r mt-6 text-2xl from-[#4361ee] to-[#7209b7]  
      inline-block text-transparent bg-clip-text "
      >
        About
      </h1>
      <p className="text-slate-300 w-[60%] text-center ">
        Hey, I'm Mark. I'm an undergrad student at UW-Madison, studying Computer
        Science and Mathematics. I have 3 years of programming under my belt,
        with a focus on web development. I have lots of experience with React,
        and I'm learning full stack development. I'm also interested in data
        science and machine learning. Let's work together!
      </p>
    </div>
  );
};

export default About;
