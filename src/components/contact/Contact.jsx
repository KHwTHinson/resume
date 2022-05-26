import "../intro/intro.css";
import Discord from "../intro/icons/Discord";
import Twitter from "../intro/icons/Twitter";
import LinkedIn from "../intro/icons/LinkedIn";

const Contact = () => {
  const openURL = (url) => {
    const newWindow = window.open(url, "_blank", "noopener,noreferrer");
    if (newWindow) newWindow.opener = null;
  };

  return (
    <div className="c" id="intro">
      {/* Start of right side */}
      <div className="c-end">
        <div className="i-spacer"></div>
        {/* The photo component */}
        <div className="c-bg">
          <div className="c-words">
            {" "}
            <br /> <br /> Welcome any collaboration!
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

export default Contact;
