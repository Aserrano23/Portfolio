import "./techs.scss";
import { T } from "@tolgee/react";
import Separator from "../separator/separator";
const Techs = () => {
  return (
    <div className="container container-techs">
      <div className="row">
        <div className="col wow fadeIn">
          <h2>
            <T keyName="techs-known" />
          </h2>
        </div>
      </div>

      <div className="row">
        <div className="col wow fadeIn">
          <p>
            <T keyName="techs-description" />
          </p>
        </div>
      </div>

      <div className="white-container wow fadeIn">
        <div className="row">
          <div className="col wow fadeIn">
            <h3>
              <T keyName="level" />
            </h3>
            <Separator />
          </div>
        </div>
        <div className="row mt-3">
          <div className="col center">
            <h4 className="beginner wow fadeInLeft">
              <T keyName="beginner" />
            </h4>
          </div>
          <div className="col center">
            <h4 className="intermediate wow fadeInDown">
              <T keyName="intermediate" />
            </h4>
          </div>
          <div className="col center">
            <h4 className="expert wow fadeInRight">
              <T keyName="expert" />
            </h4>
          </div>
        </div>
      </div>

      <div className="white-container mt-3 wow fadeIn">
        <div className="row">
          <div className="col-xl-6 col-lg-6 col-md-6 col-12">
            <div className="row">
              <div className="col wow fadeIn">
                <h3>
                  <T keyName="techs" />
                </h3>
                <Separator />
              </div>
            </div>
            <div className="row mt-3">
              <div className="col center-v">
                <p className="beginner wow fadeInLeft">
                  Redux, NestJS, NodeJS, WooCommerce, Shopify
                </p>
                <p className="intermediate wow fadeInRight">
                  React, Angular, Wordpress, Webflow, Truffle, Remix IDE, Stripe
                </p>
                <p className="expert wow fadeInLeft">
                  Bootstrap, Git, API Rest, Wagmi, EtherJS, Web3JS
                </p>
              </div>
            </div>
          </div>
          <div className="col-xl-6 col-lg-6 col-md-6 col-12">
            <div className="row">
              <div className="col wow fadeIn">
                <h3>
                  <T keyName="languages" />
                </h3>
                <Separator />
              </div>
            </div>
            <div className="row">
              <div className="col center-v mt-3">
                <p className="beginner wow fadeInRight">PHP, Java, Python</p>
                <p className="intermediate wow fadeInLeft">
                  Typescript, Solidity, SQL, MongoDB, SASS
                </p>
                <p className="expert wow fadeInRight">Javascript, HTML, CSS3</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Techs;
