import React, { useState } from "react";
import { Wrapper } from "../../../hoc";
import { Button } from "../../UI";

import { contactSvg } from "../../../assets/img";

import "./ContactForm.scss";

const ACTION =
  "https://docs.google.com/forms/u/0/d/e/1FAIpQLSd-OETDi0R-XX-D1mPC1baS_Y5RY6GnGyo8PSoI72aWM8bcZw/formResponse";

const ContactForm = () => {
  const [submitted, setSubmitted] = useState(false);

  return (
    <section className="ContactForm" id="contact-form">
      <Wrapper>
        <h2>Онлайн запис</h2>
        <div className="ContactForm_content">
          {(!submitted && (
            <>
              <iframe
                title="hidden_iframe"
                id="hidden_iframe"
                name="hidden_iframe"
                style={{ display: "none" }}
              ></iframe>
              <form
                className="ContactForm_form"
                action={ACTION}
                method="POST"
                target="hidden_iframe"
                onSubmit={() => {
                  setSubmitted(true);
                }}
              >
                <input
                  className="ContactForm_input"
                  name="entry.700207351"
                  placeholder="Ім'я"
                />
                <input
                  className="ContactForm_input"
                  name="entry.1752486665"
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
