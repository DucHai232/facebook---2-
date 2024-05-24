import React from "react";
import "./RightHome.css";
import TopRight from "./TopRight";
import BottomRight from "./BottomRight";
import ContactsRight from "./ContactsRight";
const RightHome = () => {
  return (
    <div className="righthome-container">
      <TopRight />
      <hr className="rightHr" />
      <BottomRight />
      <hr className="rightHr" />
      <ContactsRight />
    </div>
  );
};

export default RightHome;
