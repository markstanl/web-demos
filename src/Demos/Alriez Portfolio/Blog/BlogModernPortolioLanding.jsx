import React from "react";
import BlogPost from "./BlogPost";

const Blog = () => {
  return (
    <div className="w-3/5 h-full bg-black mb-10">
      <h1 className="text-white text-2xl mt-28 font-bold mb-4">Blog</h1>
      <BlogPost
        title="This portfolio was inspired by an old version of https://www.alirezasamadi.com/"
        date="3/7/2024"
        views="15"
      />
      <BlogPost
        title="I found the website in a video by Theo: Web Dev Portfolios That Blew My Mind"
        date="3/7/2024"
        views="158"
      />
      <BlogPost
        title="I really wanted to take a stab at this popular, dark design"
        date="3/7/2024"
        views="1"
      />
      <BlogPost
        title="And this website is simple enough to allow me to get practice"
        date="3/7/2024"
        views="23"
      />
      <BlogPost
        title="I used a timeline component library, and took other inspiration from Vercel's website"
        date="3/7/2024"
        views="86751"
      />
    </div>
  );
};

export default Blog;
