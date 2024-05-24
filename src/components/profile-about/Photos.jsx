import React from "react";
import ListIcon from "@mui/icons-material/List";
import { Grid } from "@mui/material";
const list = [
  {
    title: "Photos of you",
    key: "you",
  },
  {
    title: "Your Photos",
    key: "your",
  },
  {
    title: "Albums",
    key: "album",
  },
];
const Photos = () => {
  return (
    <>
      <div className="box-container" style={{ marginBottom: "100px" }}>
        <div className="box-header">
          <span className="title">Photos</span>
          <div className="action">
            <span>Add photos/video</span>
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
          <Grid
            container
            rowSpacing={1}
            columnSpacing={{ xs: 1, sm: 2, md: 3 }}
          ></Grid>
        </div>
      </div>
    </>
  );
};

export default Photos;
