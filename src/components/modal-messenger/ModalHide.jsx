import { Avatar } from "@mui/material";
import React from "react";

const ModalHide = ({ handeUnHide, person }) => {
  return (
    <div className="modal-hide-container" onClick={() => handeUnHide()}>
      <Avatar alt="Remy Sharp" src={person.avatar} />
    </div>
  );
};

export default ModalHide;
