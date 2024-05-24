import React, { useEffect, useState } from "react";
import ListIcon from "@mui/icons-material/List";
import Grid from "@mui/material/Grid";
import ListFriends from "../../data/ListFriends.json";
import MenuIcon from "@mui/icons-material/Menu";
import { useNavigate } from "react-router-dom";
const list = [
  {
    title: "All friends",
    key: "all",
  },
  {
    title: "Recently Added",
    key: "add",
  },
  {
    title: "Birthdays",
    key: "birthday",
  },
  {
    title: "Work",
    key: "work",
  },
  {
    title: "College",
    key: "college",
  },
  {
    title: "High School",
    key: "highschool",
  },
  {
    title: "Current City",
    key: "city",
  },
  {
    title: "Following",
    key: "following",
  },
];
const Friends = () => {
  const navigate = useNavigate();
  const [key, setKey] = useState("all");
  const [data, setData] = useState(ListFriends.slice(0, 6));
  useEffect(() => {
    if (key === "all") setData(ListFriends.slice(0, 6));
    const currentTime = new Date();
    if (key === "add") {
      const dataAdd = ListFriends.filter((friend) => {
        const targetTime = new Date(friend.timeAcp);
        const timeDifference = currentTime - targetTime;
        const daysDifference = timeDifference / (1000 * 3600 * 24);
        return daysDifference < 7;
      });
      setData(dataAdd);
    }
    if (key === "birthday") {
      const dataBirthday = ListFriends.filter((friend) => {
        const birthday = new Date(friend.timeAcp);
        return (
          birthday.getMonth() === currentTime.getMonth() &&
          birthday.getDate() === currentTime.getDate()
        );
      });
      setData(dataBirthday);
    }
  }, [key]);
  return (
    <div className="box-container">
      <div className="box-header">
        <span className="title">Friends</span>
        <div className="action">
          <span>Friend requests</span>
          <span>Find Friends</span>
          <ListIcon className="icon" />
        </div>
      </div>
      <div className="box-nav">
        <ul>
          {list.map((el, index) => (
            <li onClick={() => setKey(el.key)} key={index}>
              {el.title}
            </li>
          ))}
        </ul>
      </div>
      <div className="friends-list">
        <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
          {data.length > 0 &&
            data.map((friend) => (
              <Grid item xs={6} key={friend.id}>
                <div className="friend-box">
                  <img
                    src={friend.avatar}
                    className="image"
                    onClick={() => navigate(`/${friend.nickname}`)}
                  />
                  <div className="des">
                    <p>{friend.username}</p>
                    <p>10 mutual friends</p>
                  </div>
                  <MenuIcon className="icon" />
                </div>
              </Grid>
            ))}
          {data.length === 0 && <p className="empty">Not Friends</p>}
        </Grid>
      </div>
    </div>
  );
};

export default Friends;
