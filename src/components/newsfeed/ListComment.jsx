import { Avatar } from "@mui/material";
import React, { useState } from "react";
import SendIcon from "@mui/icons-material/Send";
const ListComment = ({ newsPost, dataComment, postId }) => {
  const [inputComment, setInputComment] = useState("");
  const [listComment, setListComment] = useState(dataComment);
  const handleComment = () => {
    if (inputComment) {
      newsPost.map((post) => {
        if (post.id === postId) {
          const userComment = {
            id: `cmt-${dataComment.length + 1}`,
            comment: inputComment,
            username: "Duc hai",
            avatar:
              "https://www.vietnamworks.com/hrinsider/wp-content/uploads/2023/12/anh-den-ngau-012.jpg",
          };
          setListComment([...listComment, userComment]);
          setInputComment("");
        }
      });
    }
  };

  return (
    <div className="listComment-container">
      <p className="see-more">See more answers</p>
      {listComment.map((cmt) => (
        <div className="user-comment">
          <Avatar alt="Cindy Baker" src={cmt.avatar} />
          <div className="comment">
            <p className="username">{cmt.username}</p>
            <p>{cmt.comment}</p>
          </div>
        </div>
      ))}

      <div className="button-comment">
        <Avatar
          alt="Cindy Baker"
          src="https://i.pinimg.com/236x/12/37/b3/1237b30268db9ee0c9cbe3a79b1ff8fa.jpg"
        />
        <div className="button">
          <textarea
            type="text"
            placeholder="Reply under name Duc Hai"
            value={inputComment}
            onChange={(e) => setInputComment(e.target.value)}
          />
          <span onClick={handleComment}>
            <SendIcon
              className="send-icon"
              style={{ cursor: inputComment ? "pointer" : "no-drop" }}
            />
          </span>
        </div>
      </div>
    </div>
  );
};

export default ListComment;
