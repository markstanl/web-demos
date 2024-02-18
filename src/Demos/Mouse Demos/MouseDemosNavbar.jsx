import React, { useState } from "react";

const MouseDemosNavbar = () => {
  const [mouseCircleFollow, setMouseCircleFollow] = useState(false);

  const handleChange = (e) => {
    switch (value) {
      case 1:
        setMouseCircleFollow(true);
        break;
      case 2:
        setMouseCircleFollow(false);
        break;
      default:
        setMouseCircleFollow(false);
    }
  };

  const setAllFalse = () => {
    setMouseCircleFollow(false);
  };

  return (
    <nav className="bg-[#863744] w-full h-16">
      <ul
        style={{
          display: "flex",
          justifyContent: "space-around",
          listStyle: "none",
        }}
      >
        <button>{`Button 1`}</button>
        <button>{`Button 2`}</button>
        <button>{`Button 3`}</button>
        <button>{`Button 4`}</button>
        <button>{`Button 5`}</button>
        <button>{`Button 6`}</button>
      </ul>
    </nav>
  );
};

export default MouseDemosNavbar;
