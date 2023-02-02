import "./blockchain-section.scss";
import { T } from "@tolgee/react";

const BlockchainSection = () => {
  return (
    <div className="container mt-5 mb-5">
      <div className="row">
        <div className="col wow fadeIn">
          <h1>Blockchain</h1>
        </div>
      </div>

      <div className="row">
        <div className="col wow fadeInUp">
          <p>
            <T keyName="blockchain-description" />
          </p>
        </div>
      </div>

      <div className="row">
        <div className="col center">
          {/* <a
            href="/blockchain"
            target="_blank"
            rel="noreferrer"
            className="as-btn wow fadeIn"
          >
            <T keyName="come" />
          </a> */}
          <button className="as-btn-disabled wow fadeIn">
            <T keyName="soon" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default BlockchainSection;
