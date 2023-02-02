import "./contact.scss";
import { T, useTranslate } from "@tolgee/react";

const Contact = () => {
  const t = useTranslate();

  return (
    <div className="container">
      <div id="contact" className="row mt-5">
        <div className="col-12 wow fadeIn">
          <h1>
            <T keyName="contact" />
          </h1>
        </div>
      </div>

      <div className="row">
        <div className="col center wow fadeIn">
          <p>
            <T keyName="contact-description" />
          </p>
        </div>
      </div>

      <div className="row mt-5">
        <div className="col">
          <form
            action="https://usebasin.com/f/d68a1ce2766e"
            method="POST"
            encType="multipart/form-data"
            id="form"
          >
            <div className="row">
              <div className="col end wow fadeInLeft">
                <input
                  type="text"
                  name="name"
                  id="name"
                  placeholder={t("name")}
                  required
                />
              </div>
              <div className="col start wow fadeInRight">
                <input
                  type="text"
                  name="email"
                  id="email"
                  placeholder={t("email")}
                  required
                />
              </div>
            </div>

            <div className="row mt-3">
              <div className="col center wow fadeInUp">
                <textarea
                  name="message"
                  id="message"
                  className="msg-textarea"
                  placeholder={t("msg")}
                  required
                ></textarea>
              </div>
            </div>

            <div className="row mt-3">
              <div className="col center">
                <input
                  type="submit"
                  value={t("send")}
                  className="as-btn submit-form wow fadeIn"
                />
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
