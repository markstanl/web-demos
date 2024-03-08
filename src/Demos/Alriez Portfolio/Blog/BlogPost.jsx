import React from "react";

const BlogPost = ({ title, date, views }) => {
  return (
    <div className="flex justify-between w-full h-20">
      <div className="flex-col">
        <h1 className="text-white">{title}</h1>
        <h2 className="text-[#A9A9A9] text-sm">{date}</h2>
      </div>
      <p className="text-[#676767]  text-sm">{views}</p>
    </div>
  );
};

export default BlogPost;
