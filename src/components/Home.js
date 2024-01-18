import React from "react";
import "../styles/Home.css";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHome,
  faUser,
  faBriefcase,
  faEnvelope,
  faCog,
  faSun,
  faMoon,
  faAdjust,
  faGear,
} from "@fortawesome/free-solid-svg-icons";
import profilePic from "../assets/mypic.png";

const Home = () => {
  const [theme, setTheme] = useState("dark");

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <div className={`app ${theme}`}>
      <aside className="left-sidebar">
        <FontAwesomeIcon icon={faGear} className="icon" />
        <FontAwesomeIcon
          icon={theme === "dark" ? faSun : faMoon}
          onClick={toggleTheme}
          className="icon theme-toggle"
        />
      </aside>
      <aside className="right-sidebar">
        <div className="icon-container">
          <FontAwesomeIcon icon={faHome} className="icon" />
        </div>
        <FontAwesomeIcon icon={faUser} className="icon" />
        <FontAwesomeIcon icon={faBriefcase} className="icon" />
        <FontAwesomeIcon icon={faEnvelope} className="icon" />
        <FontAwesomeIcon icon={faAdjust} className="icon" />
      </aside>
      <main className="main-content">
        <img src={profilePic} alt="Profile" className="profile-pic" />
        <div className="text-content">
          <h1>Menna Meligy</h1>
          <h2>software developer</h2>
          <p>Undergraduate computer engineering student at BME university</p>
          <p>Software developer trainee at Morgan Stanley</p>
          <button className="more-about-btn">More About Me</button>
        </div>
      </main>
    </div>
  );
};

export default Home;
