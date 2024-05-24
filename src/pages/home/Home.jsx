import React, { useEffect, useState } from "react";
import "./Home.css";
import Header from "../../components/header/Header";
import LeftHome from "../../components/lefthome/LeftHome";
import NewsFeed from "../../components/newsfeed/NewsFeed";
import RightHome from "../../components/righthome/RightHome";
import { useSelector } from "react-redux";

const Home = () => {
  const data = useSelector((state) => state.userReducer);
  console.log("component Home", data);

  return (
    <>
      <button onClick={handleCreateUser}>Create User</button>
      <Header />
      <div className="home-content">
        <LeftHome />
        <NewsFeed />
        <RightHome />
      </div>
    </>
  );
};

export default Home;
