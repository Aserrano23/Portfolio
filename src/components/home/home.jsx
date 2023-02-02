import "./home.scss";
import { T, useTranslate, useSetLanguage } from "@tolgee/react";
import { useState } from "react";
import Modal from "../modal/modal";
import Navbar from "../navbar/navbar";
import Separator from "../separator/separator";
import Contact from "../contact/contact";
import "animate.css";
import Projects from "../projects/projects";
import BlockchainSection from "../blockchain-section/blockchain-section";
import Techs from "../techs/techs";
import Footer from "../footer/footer";

function Home() {
  const t = useTranslate();
  const setLanguage = useSetLanguage();
  const [modal, setModal] = useState(false);
  const Toggle = () => setModal(!modal);

  return (
    <>
      <Navbar ToggleModal={Toggle} />

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
              <h4>
                <T keyName="job" />
              </h4>
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
                <h1>
                  <T keyName="about-me" />
                </h1>
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

        <BlockchainSection />
        <Separator />
        <Contact />
      </main>

      <Footer />

      <Modal
        show={modal}
        close={() => {
          Toggle();
        }}
        title={t("lang-select")}
        textButton={t("accept")}
        animation={"animate__animated animate__fadeIn"}
      >
        <div className="row">
          <div className="col-6 end">
            <button
              className="as-btn-outline"
              onClick={() => setLanguage("es-ES")}
            >
              <T keyName="spanish" />
            </button>
          </div>
          <div className="col-6 start">
            <button
              className="as-btn-outline"
              onClick={() => setLanguage("en")}
            >
              <T keyName="english" />
            </button>
          </div>
        </div>
      </Modal>

      <a
        href="https://wa.me/34600206194"
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
