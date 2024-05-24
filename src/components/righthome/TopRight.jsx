import { Avatar } from "@mui/material";
import React from "react";

const TopRight = () => {
  return (
    <div className="topright-container">
      <p className="topright-title">Sponsored</p>
      <div className="sponsored">
        <Avatar
          alt="Cindy Baker"
          src="https://i.pinimg.com/236x/12/37/b3/1237b30268db9ee0c9cbe3a79b1ff8fa.jpg"
        />
        <div className="content">
          <p className="title">Lebo's Pizza</p>
          <p className="des">
            Experience the trendy pizza spot in Palo Alto being called the next
            big things
          </p>
          <img src="https://www.foodandwine.com/thmb/Wd4lBRZz3X_8qBr69UOu2m7I2iw=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/classic-cheese-pizza-FT-RECIPE0422-31a2c938fc2546c9a07b7011658cfd05.jpg" />
        </div>
      </div>
    </div>
  );
};

export default TopRight;
