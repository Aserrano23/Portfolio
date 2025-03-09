import "./home.scss";
import { T } from "@tolgee/react";
import Separator from "../separator/separator";
import Contact from "../contact/contact";
import "animate.css";
import Projects from "../projects/projects";
import BlockchainSection from "../blockchain-section/blockchain-section";
import Techs from "../techs/techs";
import LatestPosts from "../latest-posts/latest-posts";
import SpotifyNowPlaying from "../spotify-now-playing/spotify-now-playing";
import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();

  return (
    <>
      <main>
        <div className="animate__animated animate__slideInDown">
          <div className="row mt-5">
            <div className="col-12">
              <h1 className="mt-5">
                <T keyName="greeting" />
              </h1>
            </div>
          </div>

          <div className="row mt-4">
            <div className="col-12">
              <h2>
                <T keyName="job" />
              </h2>
            </div>
          </div>
        </div>

        <div className="row mt-2">
          <div className="col-12 center">
            <img
              className="avatar animate__animated animate__slideInUp"
              src="/assets/images/avatar.png"
              alt="adrian avatar"
            />
          </div>
        </div>

        <div className="purple-box">
          <div className="container animate__animated animate__fadeIn animate__slow">
            <div className="row">
              <div className="col-12">
                <h3>
                  <T keyName="about-me" />
                </h3>
              </div>
            </div>

            <div className="row mt-3 center">
              <div className="col-12">
                <p>
                  <T keyName="bio" />
                </p>
              </div>
            </div>
          </div>
        </div>

        <Projects />
        <Separator />
        <div className="purple-box mt-5 wow fadeIn">
          <Techs />
        </div>

        <div className="services-section">
          <h2>Servicios</h2>
          <p>
            En AsDev Ofrecemos soluciones innovadoras en desarrollo web y
            tecnología blockchain, adaptadas a tus necesidades. Ya sea un sitio
            web o una solución blockchain, lo hacemos posible.
          </p>
          <button
            className="as-btn wow fadeIn"
            onClick={() => navigate("/services")}
          >
            Ver servicios
          </button>
        </div>
        <Separator />
        <BlockchainSection />
        <Separator />

        <LatestPosts />

        <Separator />

        <div id="contact" className="row mt-5">
          <div className="col-12 wow fadeIn">
            <h2>
              <T keyName="contact" />
            </h2>
          </div>
        </div>

        <div className="row">
          <div className="col center wow fadeIn">
            <p>
              <T keyName="contact-description" />
            </p>
          </div>
        </div>
        <Contact />
        <SpotifyNowPlaying />
      </main>

      <a
        href="https://wa.me/34624181206"
        className="whatsapp-button animate__animated animate__bounce"
        target="_blank"
        rel="noreferrer"
      >
        <div className="notification">
          <span>1</span>
        </div>
        <img
          src="/assets/images/whatsapp-logo.png"
          alt="whatsapp link to chat with me"
        />
      </a>
    </>
  );
}

export default Home;
