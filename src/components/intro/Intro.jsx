import "./intro.css";
import Hinson from "../../img/hinson.jpg";
import Scroll from "../../img/scroll.svg";
import Discord from "./icons/Discord";
import Twitter from "./icons/Twitter";
import LinkedIn from "./icons/LinkedIn";

const Intro = () => {
  const openURL = (url) => {
    const newWindow = window.open(url, "_blank", "noopener,noreferrer");
    if (newWindow) newWindow.opener = null;
  };

  return (
    <div className="i" id="intro">
      <div className="i-left">
        <div className="i-left-wrapper">
          <h2 className="i-intro">Hello, my name is</h2>
          <h1 className="i-name">Hinson Wong</h1>
          <div className="i-title">
            <div className="i-title-wrapper">
              <div className="i-title-item">Cardano Developer</div>
              <div className="i-title-item">Fullstack Developer</div>
              <div className="i-title-item">Data Analyst</div>
              <div className="i-title-item">CFA*</div>
              <div className="i-title-item">ACCA*</div>
            </div>
          </div>
          <p className="i-desc">
            Full time data analyst covering business data globally. Seeking to
            transit into a fullstack developer, helping building out impactful
            blockchain projects.
          </p>
          <p className="i-disc">
            *To be certified upon sufficient experience hours.{" "}
          </p>
        </div>
        <img src={Scroll} alt="" className="i-scroll" />
      </div>

      {/* Start of right side */}
      <div className="i-right">
        <div className="i-spacer"></div>
        {/* The photo component */}
        <div className="i-bg">
          <div className="i-bg-frame">
            <img src={Hinson} alt="" className="i-img" />
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
      </div>
    </div>
  );
};

export default Intro;
