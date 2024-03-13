import React, { useEffect, useState } from "react";
import CreateMain from "./Create/CreateMain";
import PostComponent from "./Post Renderer/PostComponent";

const Home = () => {
  const [posts, setPosts] = useState([]);
  const [run, setRun] = useState(false);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => response.json())
      .then((data) => setPosts(data));
  }, []);

  useEffect(() => {
    if (posts.length > 0 && !run) {
      const timer1 = setTimeout(() => {
        setPosts((prevPosts) => {
          const postObject = {
            userId: 12,
            id: Math.max(...prevPosts.map((post) => post.id)) + 1,
            body: "Hey, it's Mark here. Thank you for checking out my Twitter Clone! I hope you like it! 😊",
          };
          return [postObject, ...prevPosts];
        });
      }, 3000);
      const timer2 = setTimeout(() => {
        setPosts((prevPosts) => {
          const postObject = {
            userId: 12,
            id: Math.max(...prevPosts.map((post) => post.id)) + 1,
            body: "This demo is built using Vite and Tailwind CSS. It is mainly a frontend demo, but it does use a demo API to fetch posts. ",
          };
          return [postObject, ...prevPosts];
        });
      }, 7000);
      const timer3 = setTimeout(() => {
        setPosts((prevPosts) => {
          const postObject = {
            userId: 12,
            id: Math.max(...prevPosts.map((post) => post.id)) + 1,
            body: "All of the posters names and images are AI generated. All posts you make are locally stored and will not be saved.",
          };
          return [postObject, ...prevPosts];
        });
      }, 12000);
      setRun(true);
    }
  }, [posts]);

  return (
    <div className="w-1/2 h-full border-l-2 border-r-2 border-gray-500">
      <CreateMain setPosts={setPosts} posts={posts} />
      {posts.map((post, index) => (
        <PostComponent key={index} userComment={post} />
      ))}
    </div>
  );
};

export default Home;
