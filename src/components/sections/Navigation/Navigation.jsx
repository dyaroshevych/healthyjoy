import React from 'react';
import { Link } from 'react-scroll';
import { Wrapper } from '../../../hoc'

import { logoSvg } from '../../../assets/img';

import './Navigation.scss';

const NavigationLinks = ({ links }) => (
  <ul className='Navigation_list'>
    {links.map(({ name, link }) => (
      <li
        key={link}
        className='Navigation_linkContainer'
      >
        <Link
          className='Navigation_link'
          to={link}
          smooth
        >
          {name}
        </Link>
      </li>
    ))}
  </ul>
);

const Navigation = () => {

  const links = [
    { name: 'Про нас', link: 'about' },
    { name: 'Переваги', link: 'advantages' },
    { name: 'Послуги', link: 'services' },
    { name: 'Абонементи', link: 'subscription' },
    { name: 'Контакти І Онлайн запис', link: 'contact-form' },
  ];

  return (
    <nav className='Navigation' id='navigation'>
      <div className='Navigation_logoContainer'>
        <img className='Navigation_logo' src={logoSvg} alt='Healthy Joy' />
      </div>
      <ul className='Navigation_container'>
        <Wrapper>
          <li className='Navigation_linksContainer'>
            <NavigationLinks links={links.slice(0, 4)} />
          </li>
          <li className='Navigation_linksContainer'>
            <NavigationLinks links={links.slice(-1)} />
          </li>
        </Wrapper>
      </ul>
    </nav>
  );
};

export default Navigation;
