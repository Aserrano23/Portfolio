import "./footer.scss";
import Separator from "../separator/separator";
import { T } from "@tolgee/react";
const Footer = () => {
  return (
    <div className="purple-box mt-5 wow fadeIn">
      <div className="container center-v">
        <div className="circle mb-4 wow fadeInDown">
          <a href="https://adrianserrano.me">
            <img src="/assets/images/logo192.png" alt="" width={"70px"} />
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
              <img src="/assets/images/whatsapp.png" width="20" alt="" />
            </a>
          </div>
          <div className="col rrss-container">
            <a
              href="mailto:contacto@adrianserrano.me"
              target="_blank"
              rel="noreferrer"
              className="rrss-circle"
            >
              <img src="/assets/images/mail.png" width="20" alt="" />
            </a>
          </div>
          <div className="col rrss-container">
            <a
              href="https://www.linkedin.com/in/adrian-serrano-castillo-90149712a"
              target="_blank"
              rel="noreferrer"
              className="rrss-circle"
            >
              <img src="/assets/images/linkedin.png" width="20" alt="" />
            </a>
          </div>
          <div className="col rrss-container">
            <a
              href="https://t.me/Aserrano23"
              target="_blank"
              rel="noreferrer"
              className="rrss-circle"
            >
              <img src="/assets/images/telegram.png" width="20" alt="" />
            </a>
          </div>
          <div className="col rrss-container">
            <a
              href="https://instagram.com/adrianserrano23?igshid=ZDdkNTZiNTM="
              target="_blank"
              rel="noreferrer"
              className="rrss-circle"
            >
              <img src="/assets/images/instagram.png" width="20" alt="" />
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
