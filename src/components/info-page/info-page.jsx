import { useNavigate, useSearchParams } from "react-router-dom";
import "./info-page.scss";
import Navbar from "../navbar/navbar";
import { useEffect, useState } from "react";
import Footer from "../footer/footer";
import Modal from "../modal/modal";
import { T, useSetLanguage, useTranslate } from "@tolgee/react";

const InfoPage = () => {
  const [searchParams] = useSearchParams();
  const name = searchParams.get("name");
  const business = searchParams.get("business");
  const sender = searchParams.get("sender");
  const navigate = useNavigate();
  const t = useTranslate();
  const setLanguage = useSetLanguage();
  const [modal, setModal] = useState(false);
  const Toggle = () => setModal(!modal);

  useEffect(() => {
    console.log(name, business, sender);
    if (!name || !business || !sender) {
      navigate("/");
    }
  }, [business, name, sender, navigate]);
  return (
    <>
      <Navbar ToggleModal={Toggle} />

      <div className="info-page-container">
        <div className="content">
          <h1>Estimado/a {name},</h1>
          <p>
            Gracias por su interés en nuestros servicios. En{" "}
            <span className="bold">AsDev</span>, estamos comprometidos a ayudar
            a <span className="bold">{business}</span> a alcanzar su máximo
            potencial en el entorno digital.
          </p>
          <p>
            Para que pueda familiarizarse mejor con nuestro trabajo, le
            explicamos cómo en <span className="bold">AsDev</span> impulsamos
            las oportunidades de <span className="bold">{business}</span>.
          </p>
          <p className="bold bigger">
            Nuestro enfoque abarca tres pilares fundamentales:
          </p>
          <p>
            Creación de sitios web efectivos y personalizados: Diseñamos páginas
            web adaptadas a las necesidades específicas de su negocio y su
            sector, priorizando tanto la funcionalidad como la experiencia del
            usuario. Cada detalle está pensado para captar la atención de sus
            clientes y facilitar la interacción, con el objetivo de convertir
            visitas en oportunidades de negocio.
          </p>
          <p>
            Mantenimiento continuo y mejoras: El entorno digital está en
            constante evolución, y las páginas web no pueden quedarse atrás. Nos
            encargamos de que su sitio esté siempre actualizado y optimizado,
            realizando revisiones técnicas periódicas y ajustes en el diseño o
            el contenido para mantener su relevancia frente a la competencia.
          </p>
          <p>
            Estrategias para destacar frente a la competencia: No solo
            desarrollamos sitios web visualmente atractivos, sino que también
            implementamos tácticas que le permitirán diferenciarse en su sector.
            Ya sea a través de optimización SEO, integración de herramientas de
            marketing digital o análisis de la competencia, trabajamos para que
            su empresa destaque en los motores de búsqueda y atraiga a los
            clientes adecuados.
          </p>
          <p>
            En un mercado tan competitivo, contar con una página web sólida y
            bien gestionada puede ser la clave para llegar más lejos. Nuestro
            equipo de expertos está preparado para acompañarlo en este proceso,
            brindando soluciones digitales que impulsen su negocio y lo coloquen
            un paso por delante de su competencia.
          </p>
          <p>
            Quedamos a su disposición para cualquier consulta adicional y para
            ajustar nuestras propuestas a sus necesidades específicas. ¡Estamos
            seguros de que juntos lograremos grandes resultados!
          </p>
          <p>Saludos cordiales,</p>
          <p>
            {sender}
            <br />
            <span className="bold">AsDev</span>
          </p>
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

export default InfoPage;
