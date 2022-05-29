import React from "react";
import "./skills.css";
import Sidan from "../../img/sidan.png";
import IOHK from "../../img/iohk-full.png";
import Butterflies from "../../img/beautiful_butterflies.png";
import Stingrays from "../../img/flying_stingrays.png";
import Sprites from "../../img/friendly_sprites.png";
import Bison from "../../img/magical_bison.png";
import Turtle from "../../img/gentle_turtle.png";
import Tree from "../../img/tree_of_life.png";

const Skills = () => {
  const openURL = (url) => {
    const newWindow = window.open(url, "_blank", "noopener,noreferrer");
    if (newWindow) newWindow.opener = null;
  };

  return (
    <div className="s" id="skill">
      <div className="s-header">
        <span className="s-h-title">
          True Cardano Enthusiast with Deep Involvement
        </span>
        <span className="s-h-side">
          <div className="s-side-words">Checkout activities:</div>
          <div
            className="s-iohk-bg"
            onClick={() => openURL("https://discord.gg/inputoutput")}
          >
            <img src={IOHK} alt="" />
          </div>
        </span>
      </div>
      <div className="s-wrapper-space">
        <div className="s-wrapper">
          <div className="s-col col-1">
            <div className="s-box">
              <div className="s-card">
                <div className="s-front">
                  <p className="s-words">Stake Pool Operator</p>
                  <img src={Bison} alt="" className="s-card-pic" />
                </div>
                <div className="s-back">
                  <div className="s-back-container">
                    <section>
                      <div className="s-b-details">
                        <span className="s-b-title">Cardano SPO</span>
                        <span>Since Oct 2021</span>
                      </div>
                      <p className="s-back-title">Skills Involved:</p>
                      <li className="s-back-desc">Linux server setup</li>
                      <li className="s-back-desc">Cardano node maintenance</li>
                      <li className="s-back-desc">Cardano-cli interaction</li>
                    </section>
                  </div>
                  {/* <img src={Sidan} alt="" className="s-card-pic" /> */}
                </div>
              </div>
            </div>
            <div className="s-box">
              <div className="s-card">
                <div className="s-front">
                  <p className="s-words">Plutus Pioneer Programme</p>
                  <img src={Butterflies} alt="" className="s-card-pic" />
                </div>
                <div className="s-back">
                  <div className="s-back-container">
                    <p className="s-back-title">Completed PPP 3rd Cohort</p>
                    <p className="s-back-title">Skills Involved:</p>
                    <li className="s-back-desc">Onchain code development</li>
                    <li className="s-back-desc">
                      Offchain code endpoint design
                    </li>
                    <li className="s-back-desc">
                      Testing in emulator / property-based test / coverage
                      report / private & public testnet
                    </li>
                  </div>
                  <img src={Sidan} alt="" className="s-card-pic" />
                </div>
              </div>
            </div>
          </div>
          <div className="s-col col-2">
            <div className="s-box">
              <div className="s-card">
                <div className="s-front">
                  <p className="s-words">Marlowe Pioneer Programme</p>
                  <img src={Turtle} alt="" className="s-card-pic" />
                </div>
                <div className="s-back">
                  <div className="s-back-container">
                    <p className="s-back-title">MPP 1st Cohort Participant</p>
                  </div>
                  <img src={Sidan} alt="" className="s-card-pic" />
                </div>
              </div>
            </div>
            <div className="s-box">
              <div className="s-card">
                <div className="s-front">
                  <p className="s-words">Community Docs Contributor</p>
                  <img src={Tree} alt="" className="s-card-pic" />
                </div>
                <div className="s-back">
                  <div className="s-back-container">
                    <p className="s-back-title">Contributor of PPP Docs Site</p>
                    <p className="s-back-title">Skills Involved:</p>
                    <li className="s-back-desc">MD documentation</li>
                    <li className="s-back-desc">
                      Observation on common obstacle
                    </li>
                    <li className="s-back-desc">
                      Details workflow description
                    </li>
                  </div>
                  <img src={Sidan} alt="" className="s-card-pic" />
                </div>
              </div>
            </div>
          </div>
          <div className="s-col col-3">
            <div className="s-box">
              <div className="s-card">
                <div className="s-front">
                  <p className="s-words">
                    Emurgo
                    <br />
                    Cardano Associate Programme
                  </p>
                  <img src={Stingrays} alt="" className="s-card-pic" />
                </div>
                <div className="s-back">
                  <div className="s-back-container">
                    <p className="s-back-title">Emurgo CADP Batch 65</p>
                    <p className="s-back-title">Skills Involved:</p>
                    <li className="s-back-desc">
                      Deep understanding in Blockchain
                    </li>
                    <li className="s-back-desc">
                      Intensive Haskell Training <br></br>(Daily study session)
                    </li>
                  </div>
                  <img src={Sidan} alt="" className="s-card-pic" />
                </div>
              </div>
            </div>
            <div className="s-box">
              <div className="s-card">
                <div className="s-front">
                  <p className="s-words">Light Wallet Helper</p>
                  <img src={Sprites} alt="" className="s-card-pic" />
                </div>
                <div className="s-back">
                  <div className="s-back-container">
                    <p className="s-back-title">
                      Participated in ideation process & UIUX interview call
                    </p>
                  </div>
                  <img src={Sidan} alt="" className="s-card-pic" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
