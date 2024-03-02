import React, { useEffect, useRef, Suspense } from "react";
import CampingSuspense from "./CampingSuspense";

const Spline = React.lazy(() => import("@splinetool/react-spline"));

export default function CampingForest() {
  const sphere = useRef();

  function onLoad(spline) {
    const obj = spline.findObjectByName("Light Sphere");
    spline.emitEvent("follow", "Light Sphere");
    spline.setZoom(0.8);
    spline.start;
    sphere.current = obj;
  }

  setTimeout(() => {
    // Code to execute after 4 seconds
  }, 4000);

  function moveObj(e) {
    if (sphere.current) {
      sphere.current.position.x = e.clientX;
      sphere.current.position.y = e.clientY;
    }
  }

  return (
    <>
      <Suspense fallback={<CampingSuspense />}>
        <Spline
          scene="https://prod.spline.design/CgFmr83pTVJFySEs/scene.splinecode"
          onLoad={onLoad}
        />
      </Suspense>
    </>
  );
}
