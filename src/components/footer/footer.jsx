import "./footer.scss";
import Separator from "../separator/separator";
import { T } from "@tolgee/react";
import SpotifyNowPlaying from "../spotify-now-playing/spotify-now-playing";

const Footer = () => {
  return (
    <div className="purple-box mt-5 wow fadeIn">
      <div className="container center-v">
        <div className="circle mt-4 mb-4 wow fadeInDown">
          <a href="https://adrianserrano.me">
            <img
              src="/assets/images/logo192.png"
              alt="Adrian Serrano Web developer Desarrollador web castellon"
              width={"70px"}
            />
          </a>
        </div>

        {/* <div className="row mb-3">
          <div className="col">
            <h4>
              <T keyName="slogan" />
            </h4>
          </div>
        </div> */}

        <Separator color="white" />

        <div className="row rrss-icons wow fadeIn">
          <div className="col rrss-container">
            <a
              href="https://wa.me/34600206194"
              target="_blank"
              rel="noreferrer"
              className="rrss-circle"
            >
              <img
                src="/assets/images/whatsapp.png"
                width="20"
                alt="adrian serrano whatsapp link"
              />
            </a>
          </div>
          <div className="col rrss-container">
            <a
              href="mailto:adrianserranocontacto@gmail.com"
              target="_blank"
              rel="noreferrer"
              className="rrss-circle"
            >
              <img
                src="/assets/images/mail.png"
                width="20"
                alt="Adrian serrano web developer email"
              />
            </a>
          </div>
          <div className="col rrss-container">
            <a
              href="https://www.linkedin.com/in/adrian-serrano-castillo-90149712a"
              target="_blank"
              rel="noreferrer"
              className="rrss-circle"
            >
              <img
                src="/assets/images/linkedin.png"
                width="20"
                alt="Adrian serrano web developer linkedin profile"
              />
            </a>
          </div>
          <div className="col rrss-container">
            <a
              href="https://t.me/Aserrano23"
              target="_blank"
              rel="noreferrer"
              className="rrss-circle"
            >
              <img
                src="/assets/images/telegram.png"
                width="20"
                alt="Adrian Serrano Web developer Desarrollador web castellon telegram chat"
              />
            </a>
          </div>
          <div className="col rrss-container">
            <a
              href="https://instagram.com/adrianserrano23?igshid=ZDdkNTZiNTM="
              target="_blank"
              rel="noreferrer"
              className="rrss-circle"
            >
              <img
                src="/assets/images/instagram.png"
                width="20"
                alt="Adrian Serrano Web developer Desarrollador web castellon instagram link"
              />
            </a>
          </div>
          <div className="col rrss-container">
            <a
              href="https://github.com/Aserrano23"
              target="_blank"
              rel="noreferrer"
              className="rrss-circle"
            >
              <img
                src="/assets/images/github-logo.png"
                width="25"
                alt="Adrian Serrano Web developer Desarrollador web castellon github"
              />
            </a>
          </div>
        </div>

        <div className="row mt-4">
          <div className="col wow fadeInUp">
            <h5>
              <T keyName="made-by-me" /> ©adrianserrano.me 2023
            </h5>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
