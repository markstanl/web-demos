import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import github from "./assets/github.png";

const Timeline = () => {
  return (
    <div className="flex w-full flex-col items-center">
      <p
        className="w-10 h-10 mt-36 rounded-full bg-gradient-to-r text-xl from-[#ff0a54] to-[#ff99ac] 
  flex justify-center items-center text-center"
      >
        3
      </p>
      <h1
        className="bg-gradient-to-r mt-6 text-2xl from-[#ff0a54] to-[#ff99ac]  
  inline-block text-transparent bg-clip-text"
      >
        Timeline
      </h1>

      <VerticalTimeline lineColor={"#4D4D4D"}>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: "#000000", color: "#fff" }}
          contentArrowStyle={{ borderRight: "7px solid  #FFFFFF" }}
          date="2011 - present"
          iconStyle={{ background: "#FFFFFF", color: "#fff" }}
          icon={<img src={github} alt="myLogo" />}
        >
          <h3 className="vertical-timeline-element-title">Github</h3>
          <p>I created Github</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="2010 - 2011"
          contentStyle={{ background: "#000000", color: "#fff" }}
          iconStyle={{ background: "#FFFFFF", color: "#fff" }}
          icon={<img src={github} alt="myLogo" />}
        >
          <h3 className="vertical-timeline-element-title">Art Director</h3>
          <h4 className="vertical-timeline-element-subtitle">
            San Francisco, CA
          </h4>
          <p>
            Creative Direction, User Experience, Visual Design, SEO, Online
            Marketing
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="2008 - 2010"
          contentStyle={{ background: "#000000", color: "#fff" }}
          iconStyle={{ background: "#FFFFFF", color: "#fff" }}
          icon={<img src={github} alt="myLogo" />}
        >
          <h3 className="vertical-timeline-element-title">Web Designer</h3>
          <h4 className="vertical-timeline-element-subtitle">
            Los Angeles, CA
          </h4>
          <p>User Experience, Visual Design</p>
        </VerticalTimelineElement>
      </VerticalTimeline>
      <hr className="w-full border-[1.5px] border-[#212121] mt-6 mb-20" />
    </div>
  );
};

export default Timeline;
