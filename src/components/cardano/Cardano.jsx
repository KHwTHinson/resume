import "./cardano.css";
import IOHK from "../../img/iohk.png";

const Cardano = () => {
  const openURL = (url) => {
    const newWindow = window.open(url, "_blank", "noopener,noreferrer");
    if (newWindow) newWindow.opener = null;
  };

  return (
    <div className="cardano" id="cardano">
      <section>
        <i className="cdn-icon fas-1">
          {/* <img src={IOHK} className="t-i-cdc" alt="" /> */}
        </i>
        <div className="cdn-details">
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
            Utilized several external app performance tracking providers' API
            endpoint (e.g. Data.ai etc) to keep track on Crypto.com's and
            competitors' performance
          </li>
          <li>
            Performed end-to-end data analysis, from data collection, cleaning,
            storing, visualization to presentation on a daily basis
          </li>
        </ul>
        <p className="t-skills">
          Skills <br /> API Data Calling, Data cleaning, Data Analysis, Python,
          Tableau, MySQL, Scheduled Script / Selenium Automation
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
  );
};

export default Cardano;
