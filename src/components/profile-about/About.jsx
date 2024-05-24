import React from "react";
import "./About.css";
import { Link, Outlet, Route, Routes, useNavigate } from "react-router-dom";
import OverView from "./about/OverView";
import WorkAndEducation from "./about/WorkAndEducation";
import PlacesLived from "./about/PlacesLived";
import Contact from "./about/Contact";
import Family from "./about/Family";
import DetailsAbout from "./about/DetailsAbout";
const link = [
  {
    linkName: "Overview",
    path: "overview",
    component: OverView,
  },
  {
    linkName: "Work and education",
    path: "work_and_education",
    component: WorkAndEducation,
  },
  {
    linkName: "Places lived",
    path: "places",
    component: PlacesLived,
  },
  {
    linkName: "Contact and basic info",
    path: "contact",
    component: Contact,
  },
  {
    linkName: "Family and relationships",
    path: "family",
    component: Family,
  },
  {
    linkName: "Details about you",
    path: "details",
    component: DetailsAbout,
  },
];
const About = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="about-container">
        <div className="about-left">
          <p className="about-left_title">Introduce</p>
          <ul>
            {link.map((el, index) => (
              <li
                onClick={() => navigate(`/user-profile/about/${el.path}`)}
                key={index}
              >
                {el.linkName}
              </li>
            ))}
          </ul>
        </div>
        <div className="about-right">
          <Routes>
            <Route path="/" element={<OverView />} />
            {link.map((el) => (
              <Route path={el.path} element={<el.component />} />
            ))}
          </Routes>
          <Outlet />
        </div>
      </div>
    </>
  );
};

export default About;
