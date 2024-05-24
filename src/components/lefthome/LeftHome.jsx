import React, { useEffect, useState } from "react";
import "./LeftHome.css";
import MovieIcon from "@mui/icons-material/Movie";
import EventAvailableIcon from "@mui/icons-material/EventAvailable";
import GroupIcon from "@mui/icons-material/Group";
import GroupAddIcon from "@mui/icons-material/GroupAdd";
import AutoAwesomeMosaicIcon from "@mui/icons-material/AutoAwesomeMosaic";
import VideogameAssetIcon from "@mui/icons-material/VideogameAsset";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ExpandLess from "@mui/icons-material/ExpandLess";
import likePages from "../../data/LikePage.json";
const data = [
  {
    id: 1,
    text: "Watch",
    color: "#ffb443",
    icon: <MovieIcon />,
  },
  {
    id: 2,
    text: "Events",
    color: "#00fff2",
    icon: <EventAvailableIcon />,
  },
  {
    id: 3,
    text: "Friends",
    color: "#dd6229",
    icon: <GroupAddIcon />,
  },
  {
    id: 4,
    text: "Memories",
    color: "#c929e9",
    icon: <AutoAwesomeMosaicIcon />,
  },
  {
    id: 5,
    text: "Group",
    color: "#00fff2",
    icon: <GroupIcon />,
  },
  {
    id: 6,
    text: "Play game",
    color: "#00fff2",
    icon: <VideogameAssetIcon />,
  },
];
const LeftHome = () => {
  const [sliceData, setSliceData] = useState([]);
  const [slicePages, setSlicePages] = useState([]);
  const numberInit = 4;
  const [number, setNumber] = useState(numberInit);
  const [numberPage, setNumberPage] = useState(numberInit);
  const sort = likePages.sort((a, b) => a.interact - b.interact);

  useEffect(() => {
    setSliceData(data.slice(0, number));
    setSlicePages(likePages.slice(0, numberPage));
  }, [number, numberPage]);
  return (
    <div className="lefthome-container">
      <div className="top-lefthome">
        <ul>
          {sliceData.map((item) => (
            <li key={item.id}>
              <div className="icon" style={{ color: `${item.color}` }}>
                {" "}
                {item.icon}
              </div>
              <span>{item.text}</span>
            </li>
          ))}
          <li className="see-more">
            {number === data.length && (
              <p onClick={() => setNumber(4)}>
                Hide <ExpandLess />{" "}
              </p>
            )}
            {number === numberInit && (
              <p onClick={() => setNumber(data.length)}>
                See more <ExpandMoreIcon />{" "}
              </p>
            )}
          </li>
        </ul>
      </div>
      <div className="bottom-lefthome">
        <h3>Shortcuts</h3>
        <div className="shortcut-page">
          <ul>
            {slicePages.map((page) => (
              <li key={page.id}>
                <img src={page.image} className="shortcut-image" />
                <span className="page-name">{page.pageName}</span>
              </li>
            ))}
            <li className="see-more">
              {numberPage === likePages.length && (
                <p onClick={() => setNumberPage(numberInit)}>
                  Hide <ExpandLess />{" "}
                </p>
              )}
              {numberPage === numberInit && (
                <p onClick={() => setNumberPage(likePages.length)}>
                  See more <ExpandMoreIcon />{" "}
                </p>
              )}
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default LeftHome;
