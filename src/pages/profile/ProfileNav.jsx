import React from "react";
import { Link } from "react-router-dom";
const ProfileNav = ({ linkNav }) => {
  return (
    <div className="nav-container">
      <ul>
        {linkNav.map((link) => (
          <li>
            <Link to={link.path}>{link.linkName}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProfileNav;
