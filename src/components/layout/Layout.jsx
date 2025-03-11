import { Outlet } from "react-router-dom";
import Navbar from "../navbar/navbar";
import Footer from "../footer/footer";
import { T, useTranslate, useSetLanguage } from "@tolgee/react";
import { useState } from "react";
import Modal from "../modal/modal";

export const Layout = () => {
  const [modal, setModal] = useState(false);
  const t = useTranslate();
  const setLanguage = useSetLanguage();
  const Toggle = () => setModal(!modal);

  return (
    <div className="layout">
      <Navbar ToggleModal={Toggle} />
      <main className="content">
        <Outlet /> {/* Aquí se renderizarán las páginas */}
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
    </div>
  );
};
