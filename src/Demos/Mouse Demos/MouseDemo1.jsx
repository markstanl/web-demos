import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import styles from "./MouseDemo.module.css";

const MouseDemo1 = ({ mouseOverNavbar }) => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [cursorVariant, setCursorVariant] = useState("default");

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX - 14, y: e.clientY - 10 });
    };
    window.addEventListener("mousemove", handleMouseMove);

    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const handleMouseEnter = () => {
    setCursorVariant("text");
  };

  const handleMouseLeave = () => {
    setCursorVariant("default");
  };

  return (
    <div
      className=" w-full h-4/5 flex flex-row items-center justify-center"
      style={{ fontFamily: "Federo, sans-serif" }}
    >
      {cursorVariant === "text" ? (
        <motion.div
          className="bg-[#5F292E] h-8 w-8 rounded-full fixed pointer-events-none mix-blend-difference"
          style={{ top: mousePosition.y, left: mousePosition.x }}
          initial={{ scale: 1 }}
          animate={{ scale: 5 }}
          exit={{ scale: 1 }}
        />
      ) : !mouseOverNavbar ? (
        <motion.div
          className="bg-[#111] h-8 w-8 rounded-full fixed pointer-events-none"
          style={{ top: mousePosition.y, left: mousePosition.x }}
          initial={{ scale: 4 }}
          animate={{ scale: 1 }}
          exit={{ scale: 4 }}
        />
      ) : (
        <motion.div
          className="bg-[#111] h-8 w-8 rounded-full fixed pointer-events-none"
          style={{ top: mousePosition.y, left: mousePosition.x }}
          initial={{ scale: 4 }}
          animate={{ scale: 1 }}
          exit={{ scale: 4 }}
        />
      )}
      <h1
        className="text-[8rem] text-center"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        style={{ fontFamily: "Federo" }}
      >
        CUSTOM CURSOR WITH NEGATIVE EFFECT
      </h1>
    </div>
  );
};

export default MouseDemo1;
