import React, { useState, useEffect } from "react";
import { emoji, gif, location, picture, schedule, poll } from "./assets/index";

const CreateMain = ({ setPosts, posts }) => {
  const [tweet, setTweet] = useState("");
  const [focus, setFocus] = useState(false);

  const handleChange = (e) => {
    if (e.target.value.length < 100) {
      setTweet(e.target.value);
    }
  };

  const handleSubmit = () => {
    console.log(tweet);
    console.log(posts[0]);
    if (tweet !== "") {
      setPosts((prevPosts) => {
        const postObject = {
          userId: 11,
          id: Math.max(...prevPosts.map((post) => post.id)) + 1, // set id to one more than the highest current id
          body: tweet,
        };
        return [postObject, ...prevPosts];
      });
      console.log(posts[0]);
      setTweet("");
    }
  };

  useEffect(() => {
    // This function will be called whenever `posts` changes
  }, [posts]);

  return (
    <div
      className="w-full border-t-2 border-b-2 border-gray-500 bg-black"
      style={{ height: focus ? "11rem" : "9.25rem" }}
    >
      <div className="flex flex-col items-center justify-between">
        <textarea
          value={tweet}
          type="text"
          placeholder="What is happening?!"
          className="w-4/5 h-16 outline-none text-xl text-white placeholder-grey-500 
          bg-transparent text-wrap resize-none mt-2"
          onChange={handleChange}
          onFocus={() => setFocus(true)}
          onBlur={() => {
            setTimeout(() => setFocus(false), 0);
          }}
        />
        {focus && (
          <p className="text-start text-white mb-2">Posting publically</p>
        )}
        <hr className="border-2 border-gray-500 w-full " />
        <div className="w-full flex h-16 bg-transparent justify-between items-center bg-black p-4 pl-24">
          <div className="flex gap-1 filter invert items-center cursor-pointer select-none">
            <img src={picture} alt="picture" className="w-6 h-6" />
            <img src={gif} alt="gif" className="w-6 h-6" />
            <img src={poll} alt="poll" className="w-6 h-6" />
            <img src={schedule} alt="schedule" className="w-6 h-6" />
            <img src={emoji} alt="emoji" className="w-6 h-6" />
            <img src={location} alt="location" className="w-6 h-6" />
          </div>
          <button
            className="w-20 h-10 text-white font-bold rounded-full"
            style={{
              backgroundColor: tweet === "" ? "#3a6580" : "#1DA1F2",
              color: tweet === "" ? "#8e8e8e" : "white",
              cursor: tweet === "" ? "default" : "pointer",
            }}
            onClick={handleSubmit}
          >
            Post
          </button>
        </div>
      </div>
    </div>
  );
};

export default CreateMain;
