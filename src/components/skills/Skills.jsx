import React from "react";
import "./skills.css";
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
            <div className="s-box" id="SPO">
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
                      <div className="s-back-content">
                        <ul>
                          <li className="s-back-desc">
                            Setup 1 block producing node and 2 relay nodes in
                            linux cloud servers in high security standard with
                            use of offline machine in signing node certification
                          </li>
                          <li className="s-back-desc">
                            Maintaining the stake pool through key rotation and
                            continuous participation in SPO community
                          </li>
                        </ul>
                        <div className="s-b-bottom">
                          <p className="s-back-skills">
                            Skills Involved: <br />
                            Linux backend server, Cardano-node, Cardano-cli,
                            Transaction composition, Ledger querying
                          </p>
                        </div>
                        <a
                          onClick={() =>
                            openURL("https://cardano.org/stake-pool-operation/")
                          }
                        >
                          Read more
                        </a>
                      </div>
                    </section>
                  </div>
                </div>
              </div>
            </div>
            <div className="s-box" id="PPP">
              <div className="s-card">
                <div className="s-front">
                  <p className="s-words">Plutus Pioneer Programme</p>
                  <img src={Butterflies} alt="" className="s-card-pic" />
                </div>
                <div className="s-back">
                  <div className="s-back-container">
                    <section>
                      <div className="s-b-details">
                        <span className="s-b-title">PPP 3rd Cohort</span>
                        <span>Feb 2022</span>
                      </div>
                      <div className="s-back-content">
                        <ul>
                          <li className="s-back-desc">
                            Participated in the 3rd cohort of PPP in full
                          </li>
                          <li className="s-back-desc">
                            Acquired plutus scripting technique in validator,
                            state machine, minting and staking.
                          </li>
                          <li className="s-back-desc">
                            Acquired testing technique such as emulator trace,
                            property based test and coverage report.
                          </li>
                        </ul>
                        <div className="s-b-bottom">
                          <p className="s-back-skills">
                            Skills Involved: <br />
                            Haskell, Plutus, PAB, Cardano-cli, Cardano Smart
                            Contract Testing, Private Testnet
                          </p>
                        </div>
                        <a
                          onClick={() =>
                            openURL("https://discord.gg/inputoutput")
                          }
                        >
                          Checkout Discord PPP Channel
                        </a>
                      </div>
                    </section>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="s-col col-2">
            <div className="s-box" id="MPP">
              <div className="s-card">
                <div className="s-front">
                  <p className="s-words">Marlowe Pioneer Programme</p>
                  <img src={Turtle} alt="" className="s-card-pic" />
                </div>
                <div className="s-back">
                  <div className="s-back-container">
                    <section>
                      <div className="s-b-details">
                        <span className="s-b-title">MPP 1st Cohort</span>
                        <span>May 2022</span>
                      </div>
                      <div className="s-back-content">
                        <ul>
                          <li className="s-back-desc">
                            Participating in the 1st cohort of MPP
                          </li>
                          <li className="s-back-desc">
                            Learning the Marlowe domain-specific-language for
                            future development of DeFi smart contracts on
                            Cardano
                          </li>
                        </ul>
                        <div className="s-b-bottom">
                          <p className="s-back-skills">
                            Skills Involved: <br />
                            Haskell, Marlowe, DeFi
                          </p>
                        </div>
                        <a
                          onClick={() =>
                            openURL("https://discord.gg/inputoutput")
                          }
                        >
                          Checkout Discord MPP Channel
                        </a>
                      </div>
                    </section>
                  </div>
                </div>
              </div>
            </div>
            <div className="s-box" id="doc-team">
              <div className="s-card">
                <div className="s-front">
                  <p className="s-words">Community Docs Contributor</p>
                  <img src={Tree} alt="" className="s-card-pic" />
                </div>
                <div className="s-back">
                  <div className="s-back-container">
                    <section>
                      <div className="s-b-details">
                        <span className="s-b-title">Docs Contributor</span>
                        <span>Since Feb 2022</span>
                      </div>
                      <div className="s-back-content">
                        <ul>
                          <li className="s-back-desc">
                            Being invited to the community docs contributor team
                            in recognition of quality docs provided to the
                            community
                          </li>
                          <li className="s-back-desc">
                            Participated in site doc site building and discuss
                            to help other PPP participants follow along the
                            course
                          </li>
                        </ul>
                        <div className="s-b-bottom">
                          <p className="s-back-skills">
                            Skills Involved: <br />
                            Markdown Documentation, Detailed Workflow
                            Description, Obervation on Common Obstacles
                          </p>
                        </div>
                        <a
                          onClick={() =>
                            openURL(
                              "https://plutus-community.readthedocs.io/en/latest/"
                            )
                          }
                        >
                          Checkout Community Docs Site
                        </a>
                      </div>
                    </section>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="s-col col-3">
            <div className="s-box" id="emurgo">
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
                    <section>
                      <div className="s-b-details">
                        <span className="s-b-title">CADP Batch 65</span>
                        <span>Since Feb 2022</span>
                      </div>
                      <div className="s-back-content">
                        <ul>
                          <li className="s-back-desc">
                            Built a deep understandign in fundamentally how
                            blockchain technology and specifically Cardano works
                          </li>
                          <li className="s-back-desc">
                            Intensive daily training in Haskell
                          </li>
                        </ul>
                        <div className="s-b-bottom">
                          <p className="s-back-skills">
                            Skills Involved: <br />
                            Blockchain, Cardano, Haskell
                          </p>
                        </div>
                        <a
                          onClick={() =>
                            openURL("https://education.emurgo.io/")
                          }
                        >
                          Emurgo Site
                        </a>
                      </div>
                    </section>
                  </div>
                </div>
              </div>
            </div>
            <div className="s-box" id="light-wallet">
              <div className="s-card">
                <div className="s-front">
                  <p className="s-words">Light Wallet Helper</p>
                  <img src={Sprites} alt="" className="s-card-pic" />
                </div>
                <div className="s-back">
                  <div className="s-back-container">
                    <section>
                      <div className="s-b-details">
                        <span className="s-b-title">
                          Helper in IO's Light Wallet
                        </span>
                        <span>2022</span>
                      </div>
                      <div className="s-back-content">
                        <ul>
                          <li className="s-back-desc">
                            Attended ideation session at the beginning
                          </li>
                          <li className="s-back-desc">
                            Attended UI/UX interview
                          </li>
                          <li className="s-back-desc">
                            No further details disclosed as NDA signed
                          </li>
                        </ul>
                        <div className="s-b-bottom">
                          <p className="s-back-skills">
                            Skills Involved: <br />
                            Ideation, UI/UX, demand identification
                          </p>
                        </div>
                        <a
                          onClick={() =>
                            openURL(
                              "https://twitter.com/iohkmedia/status/1441851406219034631"
                            )
                          }
                        >
                          IO Public Info
                        </a>
                      </div>
                    </section>
                  </div>
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
