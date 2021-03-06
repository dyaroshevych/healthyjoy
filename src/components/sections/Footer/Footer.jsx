import React from "react";

import { Wrapper } from "../../../hoc";

import { linkedinSvg } from "../../../assets/img/social";

import "./Footer.scss";

const Footer = () => (
  <footer className="Footer">
    <Wrapper className="Footer_content">
      <h4 className="Footer_heading">
        Healthy Joy Ukraine {new Date().getFullYear()}
      </h4>
      <div>
        <p>Developed by</p>
        <p>
          <a
            className="Footer_link"
            href="https://www.linkedin.com/in/bmykhaylivvv/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Bohdan Mykhayliv <img src={linkedinSvg} alt="LinkedIn" />
          </a>
        </p>
        <p>
          <a
            className="Footer_link"
            href="https://www.linkedin.com/in/dyaroshevych/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Dmytro Yaroshevych <img src={linkedinSvg} alt="LinkedIn" />
          </a>
        </p>
      </div>
      <div>
        <p>Design by</p>
        <p>
          <a
            className="Footer_link"
            href="https://www.linkedin.com/in/mariya-fenchyn-145b251a3/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Mariya Fenchyn <img src={linkedinSvg} alt="LinkedIn" />
          </a>
        </p>
      </div>
    </Wrapper>
  </footer>
);
export default Footer;
