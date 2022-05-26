import "../intro/intro.css";
import "./entrance.css";
import Discord from "../intro/icons/Discord";
import Twitter from "../intro/icons/Twitter";
import LinkedIn from "../intro/icons/LinkedIn";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { successLogin } from "../../features/login/loginSlice";

const Entrance = () => {
  const login = useSelector((state) => state.login.auth);
  const dispatch = useDispatch();
  const [pw, setPw] = useState(false);

  const openURL = (url) => {
    const newWindow = window.open(url, "_blank", "noopener,noreferrer");
    if (newWindow) newWindow.opener = null;
  };

  const _handleKeyDown = (e) => {
    if (e.key === "Enter") {
      console.log(e.target.value);
      if (e.target.value == "Emurgo CV" || e.target.value == "Fiaz!!") {
        dispatch(successLogin(login));
      } else {
        setPw(true);
      }
    }
  };

  return (
    <div className="c" id="intro">
      {/* Start of right side */}
      <div className="c-end">
        <div className="i-spacer"></div>

        {/* The photo component */}
        <div className="c-bg">
          <div className="c-words">
            <br /> <br />
            <div className="e-form">
              <input type="text" onKeyDown={_handleKeyDown}></input>
              <label className="e-label">
                <span className="e-password">
                  Please Enter Passphrase {pw ? "(Please try again)" : ""}:
                </span>
              </label>
            </div>
          </div>
        </div>

        {/* The social icon component */}
        <div className="i-socials">
          <div className="i-spacer-icon"></div>
          <div
            className="i-socials-icons"
            onClick={() =>
              openURL("https://discordapp.com/users/887269496568578058")
            }
          >
            <Discord />
          </div>
          <div
            className="i-socials-icons"
            onClick={() => openURL("https://twitter.com/SIDANLife")}
          >
            <Twitter />
          </div>
          <div
            className="i-socials-icons"
            onClick={() =>
              openURL("https://www.linkedin.com/in/hinson-wong-137b9a152/")
            }
          >
            <LinkedIn />
          </div>
          <div className="i-spacer-icon"></div>
        </div>
        <div className="i-spacer"></div>
      </div>
    </div>
  );
};

export default Entrance;
