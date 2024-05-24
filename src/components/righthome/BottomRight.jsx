import React from "react";
import CakeIcon from "@mui/icons-material/Cake";
const BottomRight = () => {
  return (
    <div className="bottomright-container">
      <p className="bottomright-title">Birthdays</p>
      <div className="des">
        <CakeIcon htmlColor="#18abe6" />
        <span className="alert">
          <b>Meo U, David Teo</b> and <b>2 others</b> have birthdays today
        </span>
      </div>
    </div>
  );
};

export default BottomRight;
