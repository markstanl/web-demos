import React from "react";

const CampingDescription = () => {
  return (
    <div className="w-full bg-[#1c2425] flex flex-col items-center">
      <div className="w-3/5 border-l-4 border-r-4  h-3/5 mt-20">
        <h1 className="text-5xl text-white text-center font-playfair">
          Spline Camping Demo
        </h1>
        <p className="p-4 text-[#E57631] text-lg">
          I made this demo based off a video I saw online, using the same 3D
          background, this was made in Spline in React and unfortunately, I can
          never recommend using this again. Their react component is not very
          good and the resources are scarce. The load time is awful and I was
          unable to port it into react fiber or drei because they don't allow 3D
          file exports in color. Though, the software itself has been the best
          3D software I've used so far, as a non-3D artist. It is very easy to
          and the options and editing tools are quite nice. I like the general
          idea of the ease of porting 3D models into a react app, and the
          customization options available in Spline. I hope they improve their
          react component and especially their documentation, it was hard to
          follow until after a long look. Overall, I like the way it looks, but
          I would not recommend using Spline-React in a real project, but I
          would recommend using Spline for 3D models.
        </p>
      </div>
    </div>
  );
};

export default CampingDescription;
