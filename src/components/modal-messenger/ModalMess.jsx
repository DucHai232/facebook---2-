import React, { useState } from "react";
import "./ModalMess.css";
import { Avatar } from "@mui/material";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import VideocamIcon from "@mui/icons-material/Videocam";
import HorizontalRuleIcon from "@mui/icons-material/HorizontalRule";
import CloseIcon from "@mui/icons-material/Close";
import AddIcon from "@mui/icons-material/Add";
import ImageIcon from "@mui/icons-material/Image";
import AddReactionIcon from "@mui/icons-material/AddReaction";
import FavoriteIcon from "@mui/icons-material/Favorite";
import Chat from "../../data/Chat.json";

const ModalMess = ({ setOpen, person, handleHide }) => {
  const [dataChat, setDataChat] = useState(Chat);
  const [input, setInput] = useState({
    userId: "user-2",
    text: "",
  });
  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      if (input.text.trim() !== "") {
        const newChat = [...dataChat, input];
        setDataChat(newChat);
        setInput({ ...input, text: "" });
      }
    }
  };

  return (
    <>
      <div className="modal-mess-container">
        <div className="modal-header">
          <Avatar alt="Remy Sharp" src={person.avatar} />
          <div className="des">
            <p>{person.username}</p>
            <p>Active now</p>
          </div>
          <div className="icon">
            <LocalPhoneIcon className="space" />
            <VideocamIcon className="space" />
            <HorizontalRuleIcon
              className="space"
              onClick={() => handleHide()}
            />
            <CloseIcon className="space" onClick={() => setOpen(false)} />
          </div>
        </div>
        <div className="modal-chat">
          {dataChat.map((mes) => (
            <div
              className={mes.userId === "user-2" ? "messeage own" : "message"}
            >
              {mes.userId === "user-1" && (
                <Avatar
                  alt="Remy Sharp"
                  src={person.avatar}
                  className="avatar"
                />
              )}

              <span>{mes.text}</span>
            </div>
          ))}

          <div className="modal-chat_right"></div>
        </div>
        <div className="modal-input">
          <div className="icon">
            <AddIcon className="space" />
            <ImageIcon className="space" />
            <AddReactionIcon className="space" />
          </div>
          <input
            type="text"
            placeholder="Aa"
            className="input-text"
            value={input.text}
            onChange={(e) => setInput({ ...input, text: e.target.value })}
            onKeyDown={handleKeyDown}
          />
          <FavoriteIcon className="heart" />
        </div>
      </div>
    </>
  );
};

export default ModalMess;
