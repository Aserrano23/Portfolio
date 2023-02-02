import ReactDOM from "react-dom";
import "./modal.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faExternalLink } from "@fortawesome/free-solid-svg-icons";

const Modal = ({
  show,
  close,
  title,
  children,
  textButton,
  animation,
  size = "small",
  link,
}) => {
  return ReactDOM.createPortal(
    <>
      {show && (
        <div
          className={"as_modalContainer " + animation}
          onClick={() => {
            close();
          }}
        >
          <div
            className="as_modal"
            style={size === "big" ? { width: "60vw", height: "90vh" } : {}}
            onClick={(e) => e.stopPropagation()}
          >
            <div className="as_modal_header">
              {link ? (
                <>
                  <a
                    className="link-page"
                    href={link}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <h2 className="as_modal_header_title">
                      {title}
                      <FontAwesomeIcon
                        style={{ marginLeft: "10px" }}
                        icon={faExternalLink}
                        size="2xs"
                      />
                    </h2>
                  </a>
                  <span className="close" onClick={() => close()}>
                    &#10005;
                  </span>
                </>
              ) : (
                <>
                  <h2 className="as_modal_header_title">{title}</h2>
                  <span className="close" onClick={() => close()}>
                    &#10005;
                  </span>
                </>
              )}
            </div>
            <div className="as_modal_body">{children}</div>
            <div className="as_modal_footer">
              <button
                className="as-btn-outline"
                onClick={() => {
                  close();
                }}
              >
                {textButton}
              </button>
            </div>
          </div>
        </div>
      )}
    </>,
    document.getElementById("modal")
  );
};

export default Modal;
