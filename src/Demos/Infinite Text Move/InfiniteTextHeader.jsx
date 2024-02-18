import React, { useState, useEffect, useRef } from "react";
import styles from "./InfiniteTextMove.module.css";
import { gsap } from "gsap";

const InfiniteTextHeader = () => {
  const firstText = useRef(null);
  const secondText = useRef(null);
  const thirdText = useRef(null);
  const slider = useRef(null);

  let xPercent = 0;

  useEffect(() => {
    gsap.set(secondText.current, {
      left: secondText.current.getBoundingClientRect().width,
    });
    requestAnimationFrame(animate);
  }, []);

  const animate = () => {
    if (xPercent < -33) {
      xPercent = 0.2;
    }
    gsap.set(firstText.current, { xPercent: xPercent });
    gsap.set(secondText.current, { xPercent: xPercent });
    requestAnimationFrame(animate);
    xPercent -= 0.1;
    console.log(xPercent);
  };

  return (
    <div className={styles.navbar} ref={slider}>
      <div className={styles.navbarWall} />
      <p ref={firstText} className="w-full whitespace-nowrap mr-[10px]">
        IMPORTANT ANNOUNCEMENT IMPORTANT ANNOUNCEMENT IMPORTANT ANNOUNCEMENT{" "}
      </p>
      <p ref={secondText} className="w-full whitespace-nowrap">
        IMPORTANT ANNOUNCEMENT IMPORTANT ANNOUNCEMENT IMPORTANT ANNOUNCEMENT{" "}
      </p>
      <div className={styles.navbarWall} />
    </div>
  );
};

export default InfiniteTextHeader;
