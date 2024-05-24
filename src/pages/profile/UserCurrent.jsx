import React, { useEffect, useState } from "react";
import BusinessCenterIcon from "@mui/icons-material/BusinessCenter";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import HouseIcon from "@mui/icons-material/House";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { Grid } from "@mui/material";
import PostStatus from "../../components/newsfeed/PostStatus";
import News from "../../components/newsfeed/News";
import PostProfile from "../../data/PostProfile.json";
import ListFriends from "../../data/ListFriends.json";
import { useNavigate } from "react-router-dom";
const UserCurrent = ({ nickname, about, listImages, listFriends }) => {
  const [sliceFriend, setSliceFriend] = useState([]);
  const navigate = useNavigate();
  useEffect(() => {
    setSliceFriend(listFriends.slice(0, 6));
  }, []);

  const dataFilter = ListFriends.filter(
    (friend) => friend.nickname === nickname
  )[0];

  return (
    <div className="usercurrent-container">
      <div className="left-side">
        <div className="introduct">
          <p className="introduct-title">About</p>
          <ul>
            <li>
              <BusinessCenterIcon className="icon" />{" "}
              <span>{about.education}</span>
            </li>
            <li>
              <HouseIcon className="icon" />
              <span>{about.address}</span>
            </li>
            <li>
              <LocationOnIcon className="icon" />
              <span>{about.live}</span>
            </li>
            <li>
              <FavoriteIcon className="icon" />
              <span>
                {about.status === 1
                  ? "Dating"
                  : about.status === 0
                  ? "Single"
                  : "Married"}
              </span>
            </li>
          </ul>
          <p className="btn-seemore">See More About Duc Hai</p>
        </div>
        <div className="list-image">
          <div className="list-image_header">
            <span>Images</span>
            <span>See All Images</span>
          </div>
          <Grid
            container
            spacing={{ xs: 1, md: 1 }}
            columns={{ xs: 4, sm: 8, md: 12 }}
          >
            {listImages.map((image, index) => (
              <Grid item xs={2} sm={4} md={4} key={image.id}>
                <img src={image.image} className="image" />
              </Grid>
            ))}
          </Grid>
        </div>
        <div className="list-friends">
          <div className="list-friends_header">
            <div className="list-friends_left">
              <p>Friends</p>
              <p>600 friends</p>
            </div>
            <span>See All Friends</span>
          </div>
          <Grid
            container
            spacing={{ xs: 1, md: 1 }}
            columns={{ xs: 4, sm: 8, md: 12 }}
          >
            {sliceFriend.map((friend, index) => (
              <Grid item xs={2} sm={4} md={4} key={friend.id}>
                <div onClick={() => navigate(`/${friend.nickname}`)}>
                  <img src={friend.avatar} className="image" />
                  <p className="username">{friend.username}</p>
                </div>
              </Grid>
            ))}
          </Grid>
        </div>
      </div>
      <div className="right-side">
        <div className="post-profile">
          <PostStatus />
        </div>
        <div className="news-profile">
          {nickname === "duchai" ? (
            <News data={PostProfile[0]} />
          ) : (
            <News data={dataFilter} />
          )}
        </div>
      </div>
    </div>
  );
};

export default UserCurrent;
