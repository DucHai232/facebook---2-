import React from "react";
import "./FriendProfile.css";
import Header from "../../components/header/Header";
import { Container } from "@mui/material";
import ProfileHeader from "../profile/ProfileHeader";
import ListFriend from "../../data/ListFriends.json";
import { Outlet, Route, Routes, useParams } from "react-router-dom";
import ProfileNav from "../profile/ProfileNav";
import ListImagesCurrent from "../../data/ListImageCurrent.json";
import ListFriends from "../../data/ListFriends.json";
import UserCurrent from "../profile/UserCurrent";

const FriendProfile = () => {
  const params = useParams();
  const filterData = ListFriend.filter(
    (friend) => friend.nickname === params.nickname
  );
  const linkNav = [
    {
      linkName: "Timline",
      path: `/${params.nickname}`,
    },
    {
      linkName: "About",
      path: `/${params.nickname}/about`,
    },
    {
      linkName: "Friends",
      path: `/${params.nickname}/friends`,
    },
    {
      linkName: "Photos",
      path: `/${params.nickname}/photos`,
    },
    {
      linkName: "Videos",
      path: `/${params.nickname}/videos`,
    },
  ];
  return (
    <>
      <Header />
      <Container>
        <ProfileHeader data={filterData[0]} />
        <hr className="profileHr" />
        <ProfileNav linkNav={linkNav} />
        <Routes>
          <Route
            path="/"
            element={
              <UserCurrent
                about={filterData[0].about}
                listImages={ListImagesCurrent}
                listFriends={ListFriends}
                nickname={params.nickname}
              />
            }
          />
        </Routes>
      </Container>
      <Outlet />
    </>
  );
};

export default FriendProfile;
