import { Avatar } from "@mui/material";
import React, { useState } from "react";
import ImageIcon from "@mui/icons-material/Image";
import InsertEmoticonIcon from "@mui/icons-material/InsertEmoticon";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import CloseIcon from "@mui/icons-material/Close";
const PostStatus = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const handleImage = (e) => {
    const fileImage = e.target.files[0];
    if (fileImage) {
      const imageUrl = URL.createObjectURL(fileImage);
      setSelectedImage(imageUrl);
    }
  };
  const handleRemoveImage = () => {
    setSelectedImage(null);
  };
  return (
    <div className="post-container">
      <div className="post-input">
        <Avatar
          alt="Cindy Baker"
          src="https://i.pinimg.com/236x/12/37/b3/1237b30268db9ee0c9cbe3a79b1ff8fa.jpg"
        />
        <input className="input" placeholder="What's on your mind, Duc Hai?" />
      </div>
      <hr className="post-hr" />
      {selectedImage && (
        <div style={{ position: "relative" }}>
          <img
            src={selectedImage}
            style={{
              marginLeft: "10%",
              marginTop: "10px",
              marginBottom: "20px",
              borderRadius: "10px",
              width: "80%",
              height: "400px",
              objectFit: "cover",
            }}
          />
          <CloseIcon
            style={{
              backgroundColor: "blue",
              color: "white",
              top: "20px",
              right: "12%",
              position: "absolute",
              cursor: "pointer",
            }}
            onClick={handleRemoveImage}
          />
        </div>
      )}

      <div className="post-file">
        <div className="post-image">
          <input
            type="file"
            id="image"
            accept="image/*"
            hidden
            onChange={handleImage}
          />
          <label htmlFor="image" className="lable-image">
            {" "}
            <ImageIcon htmlColor="tomato" />
            <span>Photo/Videos</span>
          </label>
        </div>
        <div className="post-friends">
          <label className="lable-friends">
            {" "}
            <PersonAddIcon htmlColor="#08bfecee" />
            <span>Tag Friends</span>
          </label>
        </div>
        <div className="post-feel">
          <label className="lable-feel">
            {" "}
            <InsertEmoticonIcon htmlColor="orange" />
            <span>Feeling/Activity</span>
          </label>
        </div>
      </div>
    </div>
  );
};

export default PostStatus;
