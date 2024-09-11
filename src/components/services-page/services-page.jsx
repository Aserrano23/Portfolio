import Footer from "../footer/footer";
import Navbar from "../navbar/navbar";
import "./services-page.scss";
import { useEffect, useState } from "react";
import Contact from "../contact/contact";
import Modal from "../modal/modal";
import { T, useSetLanguage, useTranslate } from "@tolgee/react";

export const ServicesPage = () => {
  const t = useTranslate();
  const setLanguage = useSetLanguage();
  const [modal, setModal] = useState(false);
  const Toggle = () => setModal(!modal);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Navbar ToggleModal={Toggle} />
      <div className="services-container">
        <div className="header">
          <img src="/assets/images/header-bg.svg" alt="" />
          <div className="shape"></div>
          <h1>
            <T keyName="services-title" />
          </h1>
          <p>
            <T keyName="services-desc" />
          </p>
        </div>
        <div className="block-separator"></div>
        <div className="company">
          <div className="title-container">
            <h2>
              <T keyName="about-asdev" />
            </h2>
            <div className="separator"></div>
          </div>

          <div className="company-container">
            <img src="/assets/images/our-company.svg" alt="" />
            <div className="text">
              <p>
                <T keyName="about-asdev-desc1" />
              </p>
              <p>
                <T keyName="about-asdev-desc2" />
              </p>
            </div>
          </div>
        </div>
        <div className="services">
          <div className="title-container">
            <h2>
              <T keyName="our-services" />
            </h2>
            <div className="separator"></div>
          </div>

          <div className="services-items-container">
            <div className="service-item">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="2"
                stroke="#3a31b2"
                className="size-6"
                width={35}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M17.25 6.75 22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3-4.5 16.5"
                />
              </svg>

              <h3>
                <b>
                  <T keyName="service-web-title" />
                </b>
              </h3>
              <p>
                <T keyName="service-web-desc" />
              </p>
            </div>
            <div className="service-item">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="2"
                stroke="#3a31b2"
                className="size-6"
                width={35}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15.59 14.37a6 6 0 0 1-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 0 0 6.16-12.12A14.98 14.98 0 0 0 9.631 8.41m5.96 5.96a14.926 14.926 0 0 1-5.841 2.58m-.119-8.54a6 6 0 0 0-7.381 5.84h4.8m2.581-5.84a14.927 14.927 0 0 0-2.58 5.84m2.699 2.7c-.103.021-.207.041-.311.06a15.09 15.09 0 0 1-2.448-2.448 14.9 14.9 0 0 1 .06-.312m-2.24 2.39a4.493 4.493 0 0 0-1.757 4.306 4.493 4.493 0 0 0 4.306-1.758M16.5 9a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Z"
                />
              </svg>

              <h3>
                <b>
                  <T keyName="service-opt-title" />
                </b>
              </h3>
              <p>
                <T keyName="service-opt-desc" />
              </p>
            </div>
            <div className="service-item">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="2"
                stroke="#3a31b2"
                className="size-6"
                width={35}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M13.19 8.688a4.5 4.5 0 0 1 1.242 7.244l-4.5 4.5a4.5 4.5 0 0 1-6.364-6.364l1.757-1.757m13.35-.622 1.757-1.757a4.5 4.5 0 0 0-6.364-6.364l-4.5 4.5a4.5 4.5 0 0 0 1.242 7.244"
                />
              </svg>

              <h3>
                <b>
                  <T keyName="service-blockchain-title" />
                </b>
              </h3>
              <p>
                <T keyName="service-blockchain-desc" />
              </p>
            </div>
            <div className="service-item">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="2"
                stroke="#3a31b2"
                className="size-6"
                width={35}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m3.75 13.5 10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75Z"
                />
              </svg>

              <h3>
                <b>
                  <T keyName="service-support-title" />
                </b>
              </h3>
              <p>
                <T keyName="service-support-desc" />
              </p>
            </div>
          </div>
        </div>
        <div className="CTA">
          <h2>
            <T keyName="cta-title" />
          </h2>
          <p>
            <T keyName="cta-desc" />
          </p>

          <Contact />
        </div>
      </div>
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
};
