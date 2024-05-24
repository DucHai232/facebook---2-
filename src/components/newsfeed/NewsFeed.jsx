import React from "react";
import "./NewsFeed.css";
import Story from "./Story";
import PostStatus from "./PostStatus";
import NewsPost from "../../data/NewsPost.json";
import NewsHome from "./NewsHome";
const NewsFeed = () => {
  return (
    <div className="newsfeed-container">
      <Story />
      <PostStatus />
      <NewsHome data={NewsPost} />
    </div>
  );
};

export default NewsFeed;
