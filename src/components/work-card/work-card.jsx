import { T, useTranslate } from "@tolgee/react";
import { useEffect } from "react";
import "./work-card.scss";
import WOW from "wowjs";
import Modal from "../modal/modal";
import { useState } from "react";

const WorkCard = ({ name, imgURL, about, work, techs, webURL }) => {
  const t = useTranslate();
  const [showModal, setShowModal] = useState(false);
  useEffect(() => {
    new WOW.WOW({
      live: false,
    }).init();
  }, []);

  return (
    <>
      <div className="img-box" onClick={() => setShowModal(true)}>
        <span className="img-name">{name}</span>
        <img
          className="project-img wow fadeIn"
          data-wow-delay={Math.random() + "s"}
          src={imgURL}
          alt=""
        />
      </div>

      <Modal
        show={showModal}
        close={() => {
          setShowModal(!showModal);
        }}
        title={name}
        textButton={t("accept")}
        animation={"animate__animated animate__fadeIn"}
        size={"big"}
        link={webURL}
      >
        <iframe
          title={name}
          className="iframe-project"
          src={webURL}
          frameborder="0"
        ></iframe>

        <div className="row mt-4">
          <div className="col-12 center">
            <p>
              <T keyName={about} />
            </p>
          </div>
        </div>

        <div className="row mt-4">
          <div className="col-12 center">
            <h2>
              <T keyName="what-did" />
            </h2>
          </div>
        </div>

        <div className="row mt-4">
          <div className="col-12 center">
            <p>
              <T keyName={work} />
            </p>
          </div>
        </div>

        <div className="row mt-4">
          <div className="col-12 center">
            <h2>
              <T keyName="tech-used" />
            </h2>
          </div>
        </div>

        <div className="row mt-4">
          <div className="col-12 center">
            <p>
              <T keyName={techs} />
            </p>
          </div>
        </div>
      </Modal>
    </>
  );
};

export default WorkCard;

{
  /* <div className="work-card">
  <div className="work-card-header">
    <h2>{name}</h2>
  </div>
  <div className="work-card-body mt-4">
    <div className="row">
      <div className="col-12 center">
        <img src={imgURL} alt="" />
      </div>
    </div>

    <div className="row mt-4">
      <div className="col-12 center">
        <p>
          <T keyName={about} />
        </p>
      </div>
    </div>

    <div className="row mt-4">
      <div className="col-12 center">
        <h2>
          <T keyName="what-did" />
        </h2>
      </div>
    </div>

    <div className="row mt-4">
      <div className="col-12 center">
        <p>
          <T keyName={work} />
        </p>
      </div>
    </div>

    <div className="row mt-4">
      <div className="col-12 center">
        <h2>
          <T keyName="tech-used" />
        </h2>
      </div>
    </div>

    <div className="row mt-4">
      <div className="col-12 center">
        <p>
          <T keyName={techs} />
        </p>
      </div>
    </div>
  </div>

  <div className="row work-card-footer">
    <hr />
    <div className="col-12">
      <a href={webURL} rel="noreferrer" target="_blank" className="as-btn">
        <T keyName="see-more" />
      </a>
    </div>
  </div>
</div> */
}
