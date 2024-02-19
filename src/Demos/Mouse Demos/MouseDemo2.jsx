import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

import imageHandler from "./MouseDemo2ImageHandler";

const MouseDemo2 = () => {
  const [hoveredDiv, setHoveredDiv] = useState(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX - 14, y: e.clientY - 10 });
    };
    window.addEventListener("mousemove", handleMouseMove);

    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const topics = [
    {
      name: "Swan",
      description: "A swan is a bird",
    },
    {
      name: "General People",
      description: "pictures of stock people",
    },
    {
      name: "Albert Camus",
      description: "A French philosopher",
    },
    {
      name: "Winter Scenary",
      description: "Pictures of winter",
    },
    {
      name: "Tomiwa",
      description: "A Minnesotan micro-celebrity",
    },
  ];

  return (
    <div className="h-[80%] flex flex-col items-center justify-between mt-6">
      {topics.map((topic, index) => (
        <div
          className="w-4/5 h-16 border-b-2 border-t-2 border-black flex items-center flex-row justify-between"
          key={index}
          onMouseEnter={() => setHoveredDiv(index)}
          onMouseLeave={() => setHoveredDiv(null)}
        >
          <h1
            className="text-3xl"
            style={{ color: hoveredDiv === index ? "white" : "black" }}
          >
            {topic.name}
          </h1>
          <p
            className="text-lg"
            style={{ color: hoveredDiv === index ? "white" : "black" }}
          >
            {topic.description}
          </p>
        </div>
      ))}
      <imageHandler hoveredDiv={hoveredDiv} />
    </div>
  );
};

export default MouseDemo2;
