import { Avatar } from "@mui/material";
import React, { useState } from "react";
import ListFriends from "../../data/ListFriends.json";
import ModalMess from "../modal-messenger/ModalMess";
import ModalHide from "../modal-messenger/ModalHide";
const ContactsRight = () => {
  const [open, setOpen] = useState(false);
  const [hide, setHide] = useState(false);
  const [person, setPerson] = useState(null);
  const handleOpen = (id) => {
    setOpen(true);
    const newPerson = ListFriends.filter((friend) => friend.userId === id);
    setPerson(newPerson);
  };
  const handleHide = () => {
    setHide(true);
    setOpen(false);
  };
  const handeUnHide = () => {
    setHide(false);
    setOpen(true);
  };
  return (
    <>
      <div className="contactsRight-container">
        <p className="contactsRight-title">Contacts</p>
        <div className="list-contacts">
          {ListFriends.map((friend) => (
            <div
              className="user-contact"
              key={friend.id}
              onClick={() => handleOpen(friend.userId)}
            >
              <div className="avatar">
                <Avatar alt="Cindy Baker" src={friend.avatar} />
              </div>

              <span className="username">{friend.username}</span>
            </div>
          ))}
        </div>
      </div>
      {open && (
        <ModalMess
          setOpen={setOpen}
          person={person[0]}
          handleHide={handleHide}
        />
      )}
      {hide && <ModalHide handeUnHide={handeUnHide} person={person[0]} />}
    </>
  );
};

export default ContactsRight;
