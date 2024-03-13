import React, { useState, useEffect } from "react";
import NewsComponent from "./NewsComponent";

const RightBar = () => {
  const trendingTopics = [
    { genre: "Sports", title: "Super Bowl LVI", posts: "1.5M" },
    {
      genre: "Entertainment",
      title: "New Marvel Movie Trailer",
      posts: "800K",
    },
    { genre: "Politics", title: "Election Results", posts: "1.2M" },
    { genre: "Technology", title: "Latest iPhone Release", posts: "1.1M" },
  ];

  const [search, setSearch] = useState("");

  useEffect(() => {
    console.log(search);
  }, [search]);

  return (
    <div className="w-1/4 h-screen bg-black fixed right-0 mr-[5%] ">
      <div className="w-[85%] bg-black h-full p-2">
        <input
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search"
          className="w-full h-10 border-2 border-gray-500 rounded-full pl-2 focus-none outline-none"
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              setSearch("");
            }
          }}
        />
        <div className="w-full bg-[#16181c] rounded-2xl flex flex-col items-start pl-2 mt-4 text-white ">
          <h1 className="text-2xl font-bold">Subscribe to Premium</h1>
          <p className="w-[85%]">
            Subscribe to unlock new features and if eligible, receive a share of
            ads revenue.
          </p>
          <button className="w-36 h-10 bg-blue-500 rounded-full mt-2 mb-2 text-xl font-bold text-center">
            Subscribe
          </button>
        </div>
        <div className="w-full bg-[#16181c] rounded-2xl flex flex-col items-start mt-4 text-white ">
          <h1 className="text-2xl font-bold ml-2">What's New?</h1>
          {trendingTopics.map((topic, index) => (
            <NewsComponent
              key={index}
              genre={topic.genre}
              title={topic.title}
              postNum={topic.posts}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default RightBar;
