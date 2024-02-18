import React from "react";
import { useLayoutEffect, useRef, useEffect } from "react";
import styles from "./InfiniteTextMove.module.css";
import swan from "./swan.jpg";
import { gsap } from "gsap";
import InfiniteTextHeader from "./InfiniteTextHeader";
import { Link } from "react-router-dom";

const InfiniteTextMove = () => {
  //CODE FOR THE SWANS MOVING TEXT THAT I MOST COPIED
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
    if (xPercent > 10) {
      xPercent = -90;
    }
    gsap.set(firstText.current, { xPercent: xPercent });
    gsap.set(secondText.current, { xPercent: xPercent });
    requestAnimationFrame(animate);
    xPercent += 0.1;
  };

  //CODE FOR THE GSAP ANIMATIONS THAT I REFERED TO A YOUTUBE VDEO FOR

  const comp = useRef(null);

  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      const t1 = gsap.timeline();
      t1.from(["#title1", "#title2", "#title3"], {
        opacity: 0,
        y: "+=30",
        stagger: 0.5,
      })
        .to(["#title1", "#title2", "#title3"], {
          opacity: 0,
          y: "-=30",
          stagger: 0.5,
          delay: 0.5,
        })
        .to("#intro-slider", {
          xPercent: "-100",
          duration: 1.3,
        })
        .fromTo(
          "#swan-text",
          {
            opacity: 0,
          },
          {
            opacity: 1,
            duration: 0.3,
          }
        );
    }, comp);

    return () => ctx.revert();
  }, []);

  return (
    <main
      className={styles.main}
      ref={comp}
      style={{ fontFamily: "Krono One" }}
    >
      {" "}
      <Link to="/">
        <InfiniteTextHeader />
      </Link>
      <div
        id="intro-slider"
        className="h-screen p-10 bg-gray-50 absolute top-0 left-0 w-full flex flex-col gap-10 tracking-tight"
      >
        <h1 className="text-6xl" id="title1">
          I LOVE SWANS
        </h1>
        <h1 className="text-5xl" id="title2">
          SWAN
        </h1>
        <h1 className="text-5xl" id="title3">
          SWAN
        </h1>
      </div>
      <img
        src={swan}
        fill={true}
        alt="background"
        style={{ width: "100%", height: "100%", objectFit: "cover" }}
      />
      <div id="swan-text" className={styles.sliderContainer}>
        <div ref={slider} className={styles.slider}>
          <p ref={firstText}>SWAN SWAN </p>
          <p ref={secondText}>SWAN SWAN</p>
        </div>
      </div>
    </main>
  );
};

export default InfiniteTextMove;
