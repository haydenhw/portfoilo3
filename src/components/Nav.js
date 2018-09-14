import React, { Component } from 'react';
import classNames from 'classnames';
import { Link, DirectLink, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'
import ContactLinks from './ContactLinks';
import Portfolio from './Portfolio';

export default function Nav({ areLinksHidden, currentRoute, isTop, onMenuClick }) {
  const navClass = classNames('nav', {
    'is-active': !areLinksHidden,
    'has-background': !isTop,
  });

  const navLeftClass = classNames('nav-left', {
    'is-visible': !areLinksHidden
  });

  const menuIconClass = classNames('nav-menu-icon', {
    'icon-menu': areLinksHidden,
    'icon-close': !areLinksHidden,
  });

  const aboutLinkClass = classNames('nav-menu-item', {
    'is-active': currentRoute === '/',
  });

  const portfolioLinkClass = classNames('nav-menu-item', {
    'is-active': currentRoute === '/portfolio',
  });

  const contactLinkClass = classNames('nav-menu-item', {
    'is-active': currentRoute === '/contact',
  });

  return (
    <nav className={navClass}>
      <div className="nav-container">
        <div className={navLeftClass}>
          <Link
            className={aboutLinkClass}
            duration={500}
            smooth
            spy
            to="home"
          >
            HOME
          </Link>
          <Link className={portfolioLinkClass}
            duration={500}
            smooth
            spy
            to="projects"
          >
            PROJECTS
          </Link>
          <Link className={contactLinkClass}
            duration={500}
            smooth
            spy
            to="about"
          >
            ABOUT
          </Link>
        </div>
        <div className="nav-right">
          <ContactLinks className="nav-contact-links" />
          <span className={menuIconClass} onClick={onMenuClick}></span>
        </div>
      </div>
    </nav>
  );
}
