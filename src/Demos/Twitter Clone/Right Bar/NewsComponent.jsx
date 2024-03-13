import React from "react";

const NewsComponent = ({ genre, title, postNum }) => {
  return (
    <div className="w-full text-white hover:bg-[#454b56] mb-2 mt-2 transition-colors">
      <h2 className="text-base text-gray-500 ml-2">{genre}</h2>
      <h1 className="text-lg ml-2">{title}</h1>
      <h2 className="text-base text-gray-500 ml-2">{postNum} posts</h2>
    </div>
  );
};

export default NewsComponent;
