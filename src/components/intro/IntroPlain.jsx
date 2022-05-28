import "./introPlain.css";
import Hinson from "../../img/hinson.jpg";
import CUHK from "../../img/cuhk.png";
import UoM from "../../img/uom.png";
import Illinois from "../../img/illinois.png";
import Discord from "./icons/Discord";
import Twitter from "./icons/Twitter";
import LinkedIn from "./icons/LinkedIn";

const IntroPlain = () => {
  const openURL = (url) => {
    const newWindow = window.open(url, "_blank", "noopener,noreferrer");
    if (newWindow) newWindow.opener = null;
  };

  return (
    <div className="ip" id="introplain">
      <div className="ip-head">
        <div className="ip-h-left">
          <h1 className="ip-name">Hinson Wong</h1>
          <h2 className="ip-desc">
            Full time data analyst covering business data globally. Seeking to
            transit into a fullstack developer, helping building out impactful
            blockchain projects.
          </h2>
          <div className="ip-edu">
            <h2>Education</h2>
          </div>
        </div>
        <div className="ip-h-right">
          <div className="ip-bg-frame">
            <img src={Hinson} alt="" />
          </div>
          <div className="ip-socials">
            <div
              className="ip-socials-icons"
              onClick={() =>
                openURL("https://discordapp.com/users/887269496568578058")
              }
            >
              <Discord />
            </div>
            <div
              className="ip-socials-icons"
              onClick={() => openURL("https://twitter.com/SIDANLife")}
            >
              <Twitter />
            </div>
            <div
              className="ip-socials-icons"
              onClick={() =>
                openURL("https://www.linkedin.com/in/hinson-wong-137b9a152/")
              }
            >
              <LinkedIn />
            </div>
          </div>
        </div>
      </div>

      <div className="ip-tail">
        <div className="ip-t-education">
          <div className="ip-t-edu-cuhk">
            <section>
              <div className="ip-edu-header">
                <span>
                  <i className="ip-edu-icon">
                    <img src={CUHK} alt="" />
                  </i>
                  <span>
                    <h1 className="ip-t-edu-title">
                      The Chinese University of Hong Kong
                    </h1>
                  </span>
                </span>
                <span>2016 - 2020</span>
              </div>
              <h2>
                Global Accounting Stream, BBA (First Class Honors) in
                Professional Accountancy <br />
                Minor in Finance
              </h2>
              <div className="ip-details">
                <ul>
                  <li>
                    Major GPA: 3.8/4.0 | Cumulative GPA: 3.7/4.0 | GRE
                    Quantitative: 167/170
                  </li>
                  <li>
                    Dean’s List of the Faculty of Business Administration for
                    all CUHK academic years
                  </li>
                  <li>
                    5+ scholarships including Centaline Charity Fund
                    Scholarship, EY Scholarship etc.
                  </li>
                  <li>Beta Gamma Sigma Business Honor Society</li>
                  <li>
                    President of The Society of Accountancy, Student Union of
                    CUHK
                  </li>
                  <li>
                    Honours at Entrance: HKDSE 5** in Mathematics, Economics and
                    Business, Accounting and Financial Studies (Top 1.4%, 1.8%
                    and 1.4%)
                  </li>
                  <li>
                    Award-winning contestant in various case competitions:
                    <ul>
                      <li>
                        HKICPA Business Case Competition 2018 – Finalist (Final
                        12 out of 600+ teams in PRC)
                      </li>
                      <li>
                        CGMA Global Business Challenge North Asia 2018 – 1st
                        runner-up
                      </li>
                      <li>
                        HSBC Financial Innovation Challenge 2018 – Champion
                      </li>
                      <li>
                        2nd runner-up - Vice Chancellor’s Cup of Student
                        Entrepreneurship Boot Camp Competition
                      </li>
                    </ul>
                  </li>
                </ul>
              </div>
            </section>
          </div>
          <div className="ip-t-edu-others">
            <section className="UoM">
              <div className="ip-t-other-uni">
                <div className="ip-edu-header">
                  <span>
                    <i className="ip-edu-icon-others">
                      <img src={UoM} alt="" />
                    </i>
                  </span>
                  <span>2018 - 2019</span>
                </div>
                <span className="ip-others-details">
                  <div>
                    Alliance Manchester Business School, BBA Programme
                    (International Academic Exchange)
                  </div>
                </span>
              </div>
            </section>
            <section className="Illinois">
              <div className="ip-t-other-uni">
                <div className="ip-edu-header">
                  <span>
                    <i className="ip-edu-icon-others">
                      <img src={Illinois} alt="" className="ip-illinois-icon" />
                    </i>
                  </span>
                  <span>2019 - 2020</span>
                </div>
                <span className="ip-others-details">
                  <div>
                    Department of Mathematics, NetMath Programme (Calculus I:
                    A+, Calculus II: A)
                  </div>
                </span>
              </div>
            </section>
          </div>
        </div>
      </div>

      {/* The photo component */}
    </div>
  );
};

export default IntroPlain;
