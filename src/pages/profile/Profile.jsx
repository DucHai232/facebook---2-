import React from "react";
import "./Profile.css";
import Header from "../../components/header/Header";
import { Container } from "@mui/material";
import ProfileHeader from "./ProfileHeader";
import ProfileNav from "./ProfileNav";
import { Route, Routes, Outlet } from "react-router-dom";
import UserCurrent from "./UserCurrent";
import ListImagesCurrent from "../../data/ListImageCurrent.json";
import ListFriends from "../../data/ListFriends.json";
import AboutMain from "../../components/profile-about/AboutMain";
import dataUser from "../../data/UserCurrent.json";
const linkNav = [
  {
    linkName: "Timeline",
    path: "/user-profile",
  },
  {
    linkName: "About",
    path: "about",
  },
  {
    linkName: "Friends",
    path: "friends",
  },
  {
    linkName: "Photos",
    path: "photos",
  },
  {
    linkName: "Videos",
    path: "videos",
  },
];
const Profile = () => {
  return (
    <>
      <Header />
      <Container>
        <ProfileHeader data={dataUser[0]} />
        <hr className="profileHr" />
        <ProfileNav linkNav={linkNav} />
        <Routes>
          <Route
            path="/"
            element={
              <UserCurrent
                about={dataUser[0].about}
                listImages={ListImagesCurrent}
                listFriends={ListFriends}
                nickname={"duchai"}
              />
            }
          />
          <Route path="about/*" element={<AboutMain />} />
        </Routes>
      </Container>
      <Outlet />
    </>
  );
};

export default Profile;
