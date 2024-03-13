import React from "react";
import { NavLink } from "react-router-dom";
import flamingo from "./assets/flamingo.png";

const TwitterCloneButton = () => {
  return (
    <div className="bg-black h-[80%] w-full rounded-3xl justify-center items-center mt-[10%] flex flex-col text-4xl">
      <div className="text-center text-2xl text-white flex items-center justify-center font-bold">
        <img src={flamingo} alt="flamingo" className="w-10 h-10 invert " />
        <h1>FlamingPost: Twitter Clone</h1>
      </div>
      <NavLink
        to="/flamingo-post"
        className="h-[40%] w-[90%] m-6 bg-blue-500 rounded-full text-center 
        text-4xl font-bold flex justify-center items-center text-white hover:bg-blue-600 transition duration-300 ease-in-out"
      >
        Post
      </NavLink>
    </div>
  );
};

export default TwitterCloneButton;
