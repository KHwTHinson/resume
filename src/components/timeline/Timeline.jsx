import "./timeline.css";
import "./icons/t-icons.css";
import Arrow from "../nav/icons/Arrow";
import CDC from "../../img/cdc.svg";
import DappUni from "../../img/dapp-uni.png";
import Citi from "../../img/citi.png";
import PwC from "../../img/pwc.png";
import Contact from "../contact/Contact";

const Timeline = () => {
  const openURL = (url) => {
    const newWindow = window.open(url, "_blank", "noopener,noreferrer");
    if (newWindow) newWindow.opener = null;
  };

  const handleClick = (id) => {
    const element = document.getElementById(id);
    element.scrollIntoView();
  };

  return (
    <div className="t" id="timeline">
      <div className="t-wrapper">
        <div className="t-center-line">
          <a onClick={() => handleClick("timeline")} className="t-scroll-icon">
            <Arrow />
          </a>
        </div>
        <div className="t-row row-1" id="cdc">
          <section>
            <i className="t-icon fas-1">
              <img src={CDC} className="t-i-cdc" alt="" />
            </i>
            <div className="t-details">
              <span className="t-title">
                Growth Data Analyst / <br /> Business Intelligence Engineer
              </span>
              <span>Mar 2022 - Present</span>
            </div>
            <ul>
              <li>
                Created and maintained internal products insight dashboard for
                existing Crypto.com apps globally
              </li>
              <li>
                Conducted ethereum onchain analysis for tracking performance of
                decentralized NFT trading protocols such as Opensea
              </li>
              <li>
                Utilized several external app performance tracking providers'
                API endpoint (e.g. Data.ai etc) to keep track on Crypto.com's
                and competitors' performance
              </li>
              <li>
                Performed end-to-end data analysis, from data collection,
                cleaning, storing, visualization to presentation on a daily
                basis
              </li>
            </ul>
            <p className="t-skills">
              Skills <br /> API Data Calling, Data cleaning, Data Analysis,
              Python, Tableau, MySQL, Scheduled Script / Selenium Automation
            </p>
            <div className="t-bottom">
              <a
                onClick={() => {
                  openURL(
                    "https://jobs.lever.co/crypto/4bd0f073-8e55-4794-8d4e-333fa812917d"
                  );
                }}
              >
                Read more
              </a>
              <i>Crypto.com</i>
            </div>
          </section>
        </div>
        <div className="t-row row-2" id="dapp-uni">
          <section>
            <i className="t-icon fas-1">
              <img src={DappUni} className="t-i-du" alt="" />
            </i>
            <div className="t-details">
              <span className="t-title">
                Participant, <br /> Blockchain Developer Bootcamp
              </span>
              <span>Mar - Jul 2021</span>
            </div>
            <ul>
              <li>
                Completed Blockchain Developer Bootcamp, acquired basic
                knowledge in full stack Ethereum development packages such as
                Truffle Suite, Redux-React using Solidity and JavaScript (with
                html-css integrations).
              </li>
              <li>
                Sitting in Blockchain Mastery University, able to perform
                semi-guided Ethereum Dapp development.
              </li>
            </ul>
            <p className="t-skills">
              Skills <br /> Fullstack Development, Solidity, Redux DevTool,
              React.js, Infura, Truffle-suite / Ganache, Node.js
            </p>
            <div className="t-bottom">
              <a onClick={() => openURL("https://www.dappuniversity.com/")}>
                Read more
              </a>
              <i>DAPP University</i>
            </div>
          </section>
        </div>
        <div className="t-row row-1" id="citi">
          <section>
            <i className="t-icon fas-1">
              <img src={Citi} className="t-i-citi" alt="" />
            </i>
            <div className="t-details">
              <span className="t-title">Analyst, Commercial Banking</span>
              <span>Aug 2020 - Mar 2022</span>
            </div>
            <ul>
              <li>
                Relationship Manager at Emerging Corporate (EC) team
                <li className="in-bullet">
                  Drove a brand-new industry focus initiative - Logistics
                  Ecosystem Initiative. Conducted market research; estimated
                  market size and wallet size; presented the proposal on behalf
                  of division head in the regional meeting to APAC EC head, who
                  accordingly adopts the strategy with headcounts created and
                  resulted in 5 times higher conversion rate
                </li>
                <li className="in-bullet">
                  Maintained and performed a pool of existing clients with
                  ongoing business development activities in parallel
                </li>
                <li className="in-bullet">
                  {" "}
                  Automated the Citi account throughput analysis of clients,
                  turning a 30-minutes process to 1-minute
                </li>
              </li>
              <li>
                Cash & Trade Product Specialist
                <li className="in-bullet">
                  Worked with treasury departments on accounts repricing
                  strategy for bank’s balance sheet management
                </li>
                <li className="in-bullet">
                  Built automation for monitoring transaction records and
                  account balance for exploiting opportunities in existing
                  clients
                </li>
              </li>
            </ul>
            <p className="t-skills">
              Skills <br /> Business Strategy, Relationship Managemet, Business
              Development, Financial Products, Pitching, Credit Assessment, KYC
              / Due Diligence, Automation
            </p>
            <div className="t-bottom">
              <a
                onClick={() =>
                  openURL("https://inews.hket.com/article/3046090/")
                }
              >
                Read news (CN)
              </a>
              <i>Citi</i>
            </div>
          </section>
        </div>
        <div className="t-row row-2" id="audit">
          <section>
            <i className="t-icon fas-1">
              <img src={PwC} alt="" className="t-i-audit" />
            </i>
            <div className="t-details">
              <span className="t-title">Intern, Assurance</span>
              <span>May - Aug 2018</span>
            </div>
            <ul>
              <li className="in-bullet">
                Performed tests of detail and tests of control for client in
                several industries, including catering, construction, wholesales
                and engineering industry
              </li>
            </ul>
            <div className="t-bottom">
              <a
                onClick={() => {
                  openURL(
                    "https://www.pwchk.com/en/services/audit-and-assurance.html"
                  );
                }}
              >
                Read more
              </a>
              <i>PwC / EY</i>
            </div>
          </section>
        </div>
      </div>
      <Contact />
    </div>
  );
};

export default Timeline;
