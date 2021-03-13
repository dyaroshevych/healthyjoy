import React, { useState } from "react";
import { Wrapper } from "../../../hoc";
import { Button } from "../../UI";

import { contactSvg } from "../../../assets/img";

import "./ContactForm.scss";

const ACTION =
  "https://docs.google.com/forms/u/8/d/e/1FAIpQLSfolp3vrSdAKQQdWHoWPLeO-CrFzyll0Z1BvpAtatUxSbLQtw/formResponse";
const startTime = new Date().getTime();

const ContactForm = () => {
  const [submitCount, setSubmitCount] = useState(0);

  return (
    <section className="ContactForm" id="contact-form">
      <Wrapper>
        <h2>
          Онлайн запис <img src={contactSvg} alt="" />
        </h2>
        <div className="ContactForm_content">
          {((submitCount < 1 || new Date().getTime() - startTime < 3000) && (
            <>
              <iframe
                title="hidden_iframe"
                id="hidden_iframe"
                name="hidden_iframe"
                style={{ position: "absolute" }}
                width="1"
                height="1"
                onLoad={() => {
                  setSubmitCount(submitCount + 1);
                }}
              ></iframe>
              <form
                className="ContactForm_form"
                action={ACTION}
                method="POST"
                target="hidden_iframe"
                onSubmit={() => {}}
              >
                <input
                  className="ContactForm_input"
                  name="entry.2081458265"
                  placeholder="Ім'я"
                  onFocus={(e) => (e.target.placeholder = "Введіть своє ім'я")}
                />
                <input
                  className="ContactForm_input"
                  name="entry.1818145073"
                  placeholder="Номер телефону"
                />
                <Button>Надіслати</Button>
              </form>
            </>
          )) || (
            <div>
              <p>Дякуємо, що обрали нас!</p>
              <p>Наш менеджер невдовзі Вам зателефонує!</p>
            </div>
          )}

          <div>
            <img className="ContactForm_image" src={contactSvg} alt="Contact" />
          </div>
        </div>
      </Wrapper>
    </section>
  );
};

export default ContactForm;
