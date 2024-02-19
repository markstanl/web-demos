import React, { useState } from "react";
import styles from "./MouseDemo.module.css";
import { NavLink } from "react-router-dom";

const MouseDemosNavbar = ({ setMouse, cursorStyle, setMouseOverNavbar }) => {
  const [isHover, setIsHover] = useState(null);
  const buttonNumbers = [1, 2, 3, 4, 5, 6];

  console.log(cursorStyle);

  return (
    <nav
      className="bg-[#863744] w-full h-16 fixed flex flex-row items-center"
      onMouseEnter={() => setMouseOverNavbar(true)}
      onMouseLeave={() => setMouseOverNavbar(false)}
      style={{ fontFamily: "Federo, sans-serif" }}
    >
      <ul
        style={{
          width: "100%",
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-around",
          listStyle: "none",
          alignItems: "center",
        }}
      >
        {buttonNumbers.map((number) => (
          <button
            key={number}
            onClick={() => setMouse(number)}
            className={cursorStyle === "none" ? styles.noCursor : ""}
            style={{
              color: isHover === number ? "white" : "black",
              fontFamily: "Federo, sans-serif",
            }}
            onMouseEnter={() => setIsHover(number)}
            onMouseLeave={() => setIsHover(null)}
          >
            {`Button ${number}`}
          </button>
        ))}
        <NavLink
          to="/"
          className={cursorStyle === "none" ? styles.noCursor : ""}
          style={{
            color: isHover === 7 ? "white" : "black",
            fontFamily: "Federo, sans-serif",
          }}
          onMouseEnter={() => setIsHover(7)}
          onMouseLeave={() => setIsHover(null)}
        >
          Home
        </NavLink>
      </ul>
    </nav>
  );
};

export default MouseDemosNavbar;
