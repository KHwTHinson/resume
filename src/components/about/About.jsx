import "./about.css";
import Sidan from "../../img/sidan.png";
import Cardano from "../../img/cardano_logo.png";
import TypeWriter from "typewriter-effect";

const About = () => {
  return (
    <div className="a" id="about">
      <img src={Cardano} alt="" className="a-bg" />
      <div className="a-right">
        <h1 className="a-title">About Me</h1>
        <p className="a-sub">
          {" "}
          <TypeWriter
            onInit={(typewriter) => {
              typewriter
                .typeString("Blockchain Enthusiast")
                .pauseFor(2000)
                .typeString("<br>Dedicated in Cardano Ecosystem")
                .pauseFor(2000)
                .start();
            }}
            options={{
              autoStart: true,
              loop: true,
              changeDeleteSpeed: 1,
            }}
          />
        </p>
        <p className="a-desc">
          {" "}
          Scroll down to view participation in Cardano Ecosystem
        </p>
      </div>
      <div className="a-left">
        <div className="a-card bg"></div>
        <div className="a-card">
          <img src={Sidan} alt="" className="a-img" />
        </div>
      </div>
    </div>
  );
};

export default About;
