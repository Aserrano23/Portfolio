import WorkCard from "../work-card/work-card";
import { T } from "@tolgee/react";

const Projects = () => {
  return (
    <div className="container work mt-5 mb-5">
      <div className="row">
        <div className="col-12 wow fadeIn">
          <h1>
            <T keyName="my-projects" />
          </h1>
        </div>
      </div>

      <div className="row">
        <div className="col-12 wow fadeIn">
          <p>
            <T keyName="my-projects-description" />
          </p>
        </div>
      </div>

      <div className="row mt-3">
        <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12 mt-3">
          <WorkCard
            name="Cryptospace"
            imgURL="/assets/images/cryptospace.png"
            about="aboutCryptospace"
            work="cryptospace-work"
            techs="cryptospace-techs"
            webURL="https://www.cryptospace.es"
          />
        </div>
        <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12 mt-3">
          <WorkCard
            name="Aloha DeFi"
            imgURL="/assets/images/alohadefi.png"
            about="aboutAlohadefi"
            work="alohadefi-work"
            techs="aloha-techs"
            webURL="https://www.alohadefi.io"
          />
        </div>
        <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12 mt-3">
          <WorkCard
            name="S.U.R.F. Invaders"
            imgURL="/assets/images/surfinvaders.png"
            about="aboutSURF"
            work="surf-work"
            techs="surf-techs"
            webURL="https://www.alohadefi.io/surf"
          />
        </div>
        <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12 mt-3">
          <WorkCard
            name="Onboard"
            imgURL="/assets/images/onboard.png"
            about="aboutOnboard"
            work="onboard-work"
            techs="onboard-techs"
            webURL="https://www.onboardapp.me"
          />
        </div>
        <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12 mt-3">
          <WorkCard
            name="Secretos de Asia"
            imgURL="/assets/images/secretosdeasia.png"
            about="aboutSecretos"
            work="secretos-work"
            techs="secretos-techs"
            webURL="https://www.secretosdeasia.com"
          />
        </div>
        <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12 mt-3">
          <WorkCard
            name="Barrio Santo Ink"
            imgURL="/assets/images/barriosantoink.png"
            about="aboutBarriosanto"
            work="barrio-work"
            techs="barrio-techs"
            webURL="https://www.barriosantoink.com"
          />
        </div>
        <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12 mt-3">
          <WorkCard
            name="Liquid miners"
            imgURL="/assets/images/liquidminers.png"
            about="aboutLiquid"
            work="liquid-work"
            techs="liquid-techs"
            webURL="https://test.liquidminers.com/"
          />
        </div>
      </div>

      <div className="row mt-4">
        <div className="col-12 wow fadeIn">
          <p>
            <T keyName="my-projects-footer" />
            😎
          </p>
        </div>
      </div>
      <div className="row">
        <div className="col-12 center">
          <a href="#contact" className="as-btn wow slideInUp">
            <T keyName="contact" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Projects;
