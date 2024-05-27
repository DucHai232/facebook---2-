import React from "react";
import "./Header.css";
import FacebookIcon from "@mui/icons-material/Facebook";
import SearchIcon from "@mui/icons-material/Search";
import HomeIcon from "@mui/icons-material/Home";
import OndemandVideoIcon from "@mui/icons-material/OndemandVideo";
import StorefrontIcon from "@mui/icons-material/Storefront";
import Diversity1Icon from "@mui/icons-material/Diversity1";
import AddBoxIcon from "@mui/icons-material/AddBox";
import ChatIcon from "@mui/icons-material/Chat";
import NotificationsIcon from "@mui/icons-material/Notifications";
import { Avatar } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
const Header = () => {
  const navigate = useNavigate();
  const data = useSelector((state) => state.userReducer);
  return (
    <div className="header-container">
      <div className="header-left">
        <div className="header-left_logo" onClick={() => navigate("/")}>
          <FacebookIcon className="logo-facebook" />
        </div>
        <div className="header-left_search">
          <SearchIcon className="search-icon" />
          <input
            type="text"
            placeholder="Search in facebook"
            className="search-input"
          />
        </div>
      </div>
      <div className="header-center">
        <ul>
          <li>
            <HomeIcon />
          </li>
          <li>
            <OndemandVideoIcon />
          </li>
          <li>
            <StorefrontIcon />
          </li>
          <li>
            <Diversity1Icon />
          </li>
          <li>
            <AddBoxIcon />
          </li>
        </ul>
      </div>
      <div className="header-right">
        <div
          className="header-right_profile"
          onClick={() => navigate("/user-profile")}
        >
          <Avatar
            alt="Remy Sharp"
            src="https://yt3.googleusercontent.com/-CFTJHU7fEWb7BYEb6Jh9gm1EpetvVGQqtof0Rbh-VQRIznYYKJxCaqv_9HeBcmJmIsp2vOO9JU=s900-c-k-c0x00ffffff-no-rj"
          />

          <span className="profile-name">Duc hai</span>
        </div>
        <div className="header-right_communicate">
          <div className="icon_item">
            <ChatIcon />
            <span className="number_alert">1</span>
          </div>
          <div className="icon_item">
            <NotificationsIcon />
            <span className="number_alert">3</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
