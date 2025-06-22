'use client';

import { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { Link as ScrollLink, Events, scrollSpy } from 'react-scroll';
import { menuItems, type MenuItem } from '../data/MenuItems';

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [expanded, setExpanded] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY >= 50);
    };
    window.addEventListener('scroll', handleScroll);

    Events.scrollEvent.register('begin', () => {});
    Events.scrollEvent.register('end', () => {});
    scrollSpy.update();

    return () => {
      window.removeEventListener('scroll', handleScroll);
      Events.scrollEvent.remove('begin');
      Events.scrollEvent.remove('end');
    };
  }, []);

  const handleSetActive = (to: string) => {
    setActiveSection(to);
  };

  const handleToggle = () => setExpanded((prev) => !prev);
  const handleClose = () => setExpanded(false);

  const MenuItemRender = (item: MenuItem) => {
    const normalizePath = (path: string) => path.replace(/\/+$/, '');
    const isSamePage = item.url === '*' || normalizePath(pathname) === normalizePath(item.url);

    return (
      <li className={`nav-item ${activeSection === item.scrollTo ? 'active' : ''}`} key={item.name}>
        {isSamePage ? (
          <ScrollLink
            to={item.scrollTo!}
            smooth
            duration={750}
            offset={-60}
            spy={true}
            onSetActive={handleSetActive}
            className="nav-link text-capitalize"
          >
            {item.name}
          </ScrollLink>
        ) : (
          <Link
            href={{
              pathname: item.url,
              query: { scrollTo: item.scrollTo },
            }}
            className="nav-link text-capitalize"
          >
            {item.name}
          </Link>
        )}
      </li>
    );
  };

  return (
    <header id="mh-header" className={`black-bg mh-header mh-fixed-nav mh-xs-mobile-nav nav-scroll ${scrolled ? 'nav-strict' : ''}`}>
      <div className="overlay" onClick={handleClose}></div>
      <div className="container">
        <div className="row">
          <nav className="navbar navbar-expand-lg mh-nav nav-btn">
            <button
              className={`navbar-toggler ${expanded ? 'active' : ''}`}
              type="button"
              onClick={handleToggle}
              aria-controls="navbarSupportedContent"
              aria-expanded={expanded}
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon icon"></span>
            </button>

            <div className={`collapse navbar-collapse ${expanded ? 'active show' : ''}`} id="navbarSupportedContent">
              <ul className="navbar-nav mr-auto ml-auto" onClick={handleClose}>
                {menuItems.map(MenuItemRender)}
              </ul>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
