import React, { useState } from "react";
import MouseDemosNavbar from "./MouseDemosNavbar";
import MouseDemo1 from "./MouseDemo1";
import MouseDemo2 from "./MouseDemo2";
const MouseDemos = () => {
  const [currentMouseDemo, setCurrentMouseDemo] = useState(null);
  const [mouseOverNavbar, setMouseOverNavbar] = useState(false);

  const setMouse = (number) => {
    setCurrentMouseDemo(number);
  };

  const whichMouse = () => {
    if (currentMouseDemo) {
      switch (currentMouseDemo) {
        case 1:
          return <MouseDemo1 mouseOverNavbar={mouseOverNavbar} />;
        case 2:
          return <MouseDemo2 />;
        case 3:
          return <div>MouseDemo3</div>;
        case 4:
          return <div>MouseDemo4</div>;
        case 5:
          return <div>MouseDemo5</div>;
        case 6:
          return <div>MouseDemo6</div>;
        default:
          return <div>MouseDemo1</div>;
      }
    }
  };

  const cursorStyle = () => {
    if (currentMouseDemo === 1) {
      return "none";
    } else {
      return "";
    }
  };

  return (
    <div
      className="w-screen h-screen bg-[#5F292E] "
      style={{ cursor: cursorStyle() }}
    >
      <MouseDemosNavbar
        setMouse={setMouse}
        cursorStyle={cursorStyle()}
        setMouseOverNavbar={setMouseOverNavbar}
      />
      <div id="invisible-div" className="w-full h-16 bg-[#5F292E]"></div>
      {whichMouse()}
    </div>
  );
};

export default MouseDemos;
