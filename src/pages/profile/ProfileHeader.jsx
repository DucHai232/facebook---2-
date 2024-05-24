import React from "react";
import Avatar from "@mui/material/Avatar";
import AvatarGroup from "@mui/material/AvatarGroup";
import { Button } from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import AddIcon from "@mui/icons-material/Add";
import DoneIcon from "@mui/icons-material/Done";
import ChatBubbleIcon from "@mui/icons-material/ChatBubble";
const ProfileHeader = ({ data }) => {
  return (
    <div className="profile-box">
      <div className="profile-header">
        <img src={data.background} className="background-profile" />
        <div className="header-bottom">
          <div className="header-info">
            <img src={data.avatar} className="avatar" />
            <div className="des">
              <p className="username">{data.username}</p>
              <p className="number-friends">600 friends</p>
              <AvatarGroup max={4} className="avatar-group">
                {data.friends.map((image) => (
                  <Avatar alt="Remy Sharp" src={image} />
                ))}
              </AvatarGroup>
            </div>
          </div>
          <div className="header-change">
            {data.nickname ? (
              <>
                <Button
                  variant="contained"
                  color="inherit"
                  className="add-story"
                >
                  <DoneIcon /> Friends
                </Button>
                <Button variant="contained">
                  <ChatBubbleIcon /> Message
                </Button>
              </>
            ) : (
              <>
                <Button variant="contained" className="add-story">
                  <AddIcon /> Add Story
                </Button>
                <Button variant="contained" color="inherit">
                  <EditIcon /> Edit Profile
                </Button>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileHeader;
