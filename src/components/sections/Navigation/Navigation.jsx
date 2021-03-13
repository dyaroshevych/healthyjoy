import React, { useState } from "react";
import { Link } from "react-scroll";
import { Wrapper } from "../../../hoc";
import { Backdrop } from "../../UI";

import { logoSvg } from "../../../assets/img";

import "./Navigation.scss";

const LINKS = [
  { name: "Про нас", link: "about" },
  { name: "Переваги", link: "advantages" },
  { name: "Послуги", link: "services" },
  { name: "Абонементи", link: "subscription" },
  { name: "Контакти І Онлайн запис", link: "contact-form" },
];

const NavigationLinks = ({ links }) => (
  <ul className="Navigation_list">
    {links.map(({ name, link }) => (
      <li key={link} className="Navigation_linkContainer">
        <Link className="Navigation_link" to={link} smooth>
          {name}
        </Link>
      </li>
    ))}
  </ul>
);

const NavigationMobileMenu = ({ visible, toggleVisibility }) => {
  return (
    <>
      <Backdrop visible={visible} toggleVisibility={toggleVisibility} />
      <div className="Navigation_mobileHiddenMenu" visible={`${visible}`}>
        <NavigationLinks links={LINKS.slice(0, 4)} />
      </div>
    </>
  );
};

const Navigation = () => {
  const [visible, setVisibility] = useState(false);

  const toggleVisibility = () => setVisibility(!visible);

  return (
    <nav className="Navigation" id="navigation">
      <NavigationMobileMenu
        visible={visible}
        toggleVisibility={toggleVisibility}
      />
      <div className="Navigation_logoContainer">
        <div className="Navigation_mobileMenu">
          <div className="Navigation_mobileMenuLeftSide">
            <input
              className="Navigation_mobileMenuToggleButtonInput"
              id="toggle-button__input"
              type="checkbox"
              checked={visible}
              visible={`${visible}`}
              onChange={toggleVisibility}
            />
            <label
              className="Navigation_mobileMenuToggleButtonLabel"
              htmlFor="toggle-button__input"
            >
              <span></span>
            </label>
            <img
              className="Navigation_mobileMenuLogo"
              src={logoSvg}
              alt="Healthy Joy"
            />
          </div>
          <Link
            className="Navigation_mobileMenuButton"
            to={LINKS[LINKS.length - 1].link}
            smooth
          >
            <p>{LINKS[LINKS.length - 1].name}</p>
          </Link>
        </div>
        <img className="Navigation_logo" src={logoSvg} alt="Healthy Joy" />
      </div>
      <ul className="Navigation_container">
        <Wrapper>
          <li className="Navigation_linksContainer">
            <NavigationLinks links={LINKS.slice(0, 4)} />
          </li>
          <li className="Navigation_linksContainer">
            <NavigationLinks links={LINKS.slice(-1)} />
          </li>
        </Wrapper>
      </ul>
    </nav>
  );
};

export default Navigation;
