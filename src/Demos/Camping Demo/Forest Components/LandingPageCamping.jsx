import React from "react";
import CampingForest from "./CampingForest";
import CampingDisplayText from "./CampingDisplayText";

const LandingPageCamping = () => {
  return (
    <div className="flex justify-center">
      <CampingDisplayText className="absolute" />
      <CampingForest />
    </div>
  );
};

export default LandingPageCamping;
