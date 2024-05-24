import React from "react";
import BusinessCenterIcon from "@mui/icons-material/BusinessCenter";
import SchoolIcon from "@mui/icons-material/School";
import HomeIcon from "@mui/icons-material/Home";
import AddIcon from "@mui/icons-material/Add";
import PhoneIcon from "@mui/icons-material/Phone";
import LockIcon from "@mui/icons-material/Lock";
import PublicIcon from "@mui/icons-material/Public";
import EditIcon from "@mui/icons-material/Edit";
const OverView = () => {
  return (
    <div className="overview-container">
      <ul>
        <li className="added">
          <BusinessCenterIcon /> <span>Works at FPT University HCM</span>
          <div className="absolute">
            <LockIcon className="icon icon-select" />
            <EditIcon className="icon" />
          </div>
        </li>
        <li className="added">
          <SchoolIcon />{" "}
          <div className="des">
            <p>Studies at FPT University HCM</p>
            <p>Started in 2019</p>
          </div>
          <div className="absolute">
            <PublicIcon className="icon icon-select" />
            <EditIcon className="icon" />
          </div>
        </li>
        <li className="added">
          <HomeIcon />
          <span> Lives in Ho Chi Minh City, VietNam</span>
          <div className="absolute">
            <PublicIcon className="icon icon-select" />
            <EditIcon className="icon" />
          </div>
        </li>

        <li className="added">
          <AddIcon className="icon-link" />
          <span className="link">Add Home</span>
        </li>
        <li className="added">
          <AddIcon className="icon-link" />
          <span className="link">Add a relationship status</span>
        </li>
        <li className="added">
          <PhoneIcon />{" "}
          <div className="des">
            <p>0914999888</p>
            <p>Mobile</p>
          </div>
          <div className="absolute">
            <LockIcon className="icon icon-select" />
            <EditIcon className="icon" />
          </div>
        </li>
      </ul>
    </div>
  );
};

export default OverView;
