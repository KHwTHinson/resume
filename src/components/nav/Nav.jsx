import "./nav.css";
import Hinson from "../../img/hinson.jpg";
import Arrow from "./icons/Arrow";
import Info from "./icons/Info";
import Portfolio from "./icons/Portfolio";
import Skill from "./icons/Skill";
import Theme from "./icons/Theme";
import { useSelector, useDispatch } from "react-redux";
import { lightTheme, darkTheme } from "../../features/theme/themeSlice";

const Nav = () => {
  const handleClick = (id) => {
    const element = document.getElementById(id);
    element.scrollIntoView();
  };

  const theme = useSelector((state) => state.theme.mode);
  const dispatch = useDispatch();

  const changeTheme = () => {
    if (theme == "dark") {
      dispatch(lightTheme(theme));
    } else {
      dispatch(darkTheme(theme));
    }
  };

  return (
    <div className="navbar">
      <ul className="navbar-nav">
        <li className="logo">
          <a onClick={() => handleClick("introplain")} className="nav-link">
            <span className="link-text">Hinson W</span>
            <Arrow />
          </a>
        </li>
        <li className="nav-item">
          <a
            onClick={() => handleClick("introplain")}
            className="nav-link-sidan"
          >
            <img src={Hinson} alt="" className="nav-icon-sidan" />
          </a>
        </li>
        <li className="nav-item">
          <a onClick={() => handleClick("introplain")} className="nav-link">
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
          <a onClick={() => changeTheme()} className="nav-link">
            <Theme />
            <span className="link-text">Theme</span>
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Nav;
