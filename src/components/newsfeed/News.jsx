import React, { act, useEffect, useState } from "react";
import ListIcon from "@mui/icons-material/List";
import { Avatar } from "@mui/material";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ThumbUpOffAltIcon from "@mui/icons-material/ThumbUpOffAlt";
import ChatBubbleIcon from "@mui/icons-material/ChatBubble";
import SendIcon from "@mui/icons-material/Send";
import ListComment from "./ListComment";
const News = ({ data }) => {
  const [newsPost, setNewsPost] = useState(data);
  const [actionLike, setActionLike] = useState([]);
  const handleLike = (id) => {
    const index = actionLike.indexOf(id);
    if (index === -1) {
      setActionLike([...actionLike, id]);
      const updatePost = newsPost.posts.map((post) => {
        if (post.id === id) {
          return { ...post, numberLike: post.numberLike + 1 };
        }
        return post;
      });
      setNewsPost({ ...newsPost, posts: updatePost });
    } else {
      const updateActionLike = [...actionLike];
      updateActionLike.splice(index, 1);
      setActionLike(updateActionLike);
      const updatePost = newsPost.posts.map((post) => {
        if (post.id === id) {
          return { ...post, numberLike: post.numberLike - 1 };
        }
        return post;
      });
      setNewsPost({ ...newsPost, posts: updatePost });
    }
  };
  return (
    <div className="news-container">
      {newsPost.posts.map((post) => (
        <div className="news-box">
          <div className="news-box_header">
            <Avatar alt="Cindy Baker" src={data.avatar} />
            <div className="header-info">
              <p>{data.username}</p>
              <small>{post.time}</small>
            </div>
            <ListIcon className="header-setting" />
          </div>
          <p className="news-box_status">{post.post}</p>
          <img src={post.postImage} className="news-box_image" />
          <div className="news-box_total">
            <div className="emotion">
              <ThumbUpIcon htmlColor="blue" />
              <FavoriteIcon htmlColor="red" />
              <span>{post.numberLike}</span>
            </div>
            <div className="feedback">
              <div className="comment">
                <span>66</span>
                <span>comments</span>
              </div>
              <div className="share">
                <span>3</span>
                <span>shares</span>
              </div>
            </div>
          </div>
          <hr className="newsHr" />
          <div className="news-box_button">
            <div
              className="news-button emotion"
              onClick={() => handleLike(post.id)}
            >
              <ThumbUpOffAltIcon
                style={{ color: actionLike.includes(post.id) ? "blue" : "" }}
              />
              <span
                style={{ color: actionLike.includes(post.id) ? "blue" : "" }}
              >
                Like
              </span>
            </div>
            <div className="news-button comment">
              <ChatBubbleIcon />
              <span>Comment</span>
            </div>
            <div className="news-button share">
              <SendIcon />
              <span>Share</span>
            </div>
          </div>
          <hr className="newsHr" />
          <div className="news-box_list-comment">
            <ListComment />
          </div>
        </div>
      ))}
    </div>
  );
};

export default News;
