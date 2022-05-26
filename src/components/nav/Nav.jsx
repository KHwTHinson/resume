import "./nav.css";
import Sidan from "../../img/sidan.png";
import Arrow from "./icons/Arrow";
import Info from "./icons/Info";
import Portfolio from "./icons/Portfolio";
import Skill from "./icons/Skill";
import Theme from "./icons/Theme";
import { useEffect } from "react";

const Nav = () => {
  const handleClick = (id) => {
    const element = document.getElementById(id);
    element.scrollIntoView();
  };

  return (
    <div className="navbar">
      <ul className="navbar-nav">
        <li className="logo">
          <a onClick={() => handleClick("intro")} className="nav-link">
            <span className="link-text">Whatever</span>
            <Arrow />
          </a>
        </li>
        <li className="nav-item">
          <a onClick={() => handleClick("intro")} className="nav-link-sidan">
            <img src={Sidan} alt="" className="nav-icon-sidan" />
          </a>
        </li>
        <li className="nav-item">
          <a onClick={() => handleClick("about")} className="nav-link">
            <Info />
            <span className="link-text">About</span>
          </a>
        </li>
        <li className="nav-item">
          <a onClick={() => handleClick("skill")} className="nav-link">
            <Portfolio />
            <span className="link-text">Cardano</span>
          </a>
        </li>
        <li className="nav-item">
          <a onClick={() => handleClick("timeline")} className="nav-link">
            <Skill />
            <span className="link-text">Experience</span>
          </a>
        </li>
        <li className="nav-item">
          <a href="" className="nav-link">
            <Theme />
            <span className="link-text">Theme</span>
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Nav;
