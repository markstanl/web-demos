import React from "react";
import { useRef, useEffect, useState } from "react";
import { gsap } from "gsap";
import { NavLink } from "react-router-dom";

const InfiniteScrollGSAPButton = () => {
  const [isHovered, setIsHovered] = useState(false);

  const firstText = useRef(null);
  const secondText = useRef(null);
  const slider = useRef(null);

  let xPercent = 0;

  useEffect(() => {
    gsap.set(secondText.current, {
      left: secondText.current.getBoundingClientRect().width,
    });
    requestAnimationFrame(animate);
  }, []);

  const animate = () => {
    if (xPercent > -30) {
      xPercent = -60;
    }
    gsap.set(firstText.current, { xPercent: xPercent });
    gsap.set(secondText.current, { xPercent: xPercent });
    requestAnimationFrame(animate);
    xPercent += 0.1;
  };
  return (
    <div
      className="bg-[#121B19] h-[80%] w-full rounded-3xl justify-center items-center mt-[10%] flex flex-col text-4xl"
      style={{ fontFamily: "Krono One" }}
    >
      <div className="text-center text-[#CCD3DA]">
        <h1>GSAP Infinite Scroll</h1>
      </div>
      <NavLink
        to="/infinite-text-move"
        className="h-[40%] w-[100%] m-6 bg-[#CCD3DA] rounded-2xl items-center text-center justify-center"
        style={{ overflow: "hidden" }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div id="swan-text" className=" flex flex-row w-[200%]">
          <div ref={slider} className="mt-[10px]">
            <p
              ref={firstText}
              style={{
                color: isHovered ? "#849A97" : "#0A1412",
                width: "200%",
              }}
            >
              HERE CLICK HERE CLICK HERE CLICK HERE CLICK HERE CLICK HERE CLICK
              HERE
            </p>
            <p
              ref={secondText}
              style={{
                color: isHovered ? "#849A97" : "#0A1412",
                width: "200%",
              }}
            >
              CLICK HERE CLICK HERE CLICK HERE CLICK HERE CLICK HERE CLICK HERE
            </p>
          </div>
        </div>
      </NavLink>
    </div>
  );
};

export default InfiniteScrollGSAPButton;
