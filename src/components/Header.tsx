// src/components/Header.jsx
import { useState, useEffect } from 'react';
import { Link, Events, scrollSpy } from 'react-scroll';
import { menuItems, type MenuItem } from '@/data/MenuItems';
import { useLocation, Link as RouterLink } from 'react-router-dom';

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [expanded, setExpanded] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  const location = useLocation();
  const currentPath = location.pathname;

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY >= 50);
    };
    window.addEventListener('scroll', handleScroll);

    // Subscribe to scroll events to track active section
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
    if (item.url === '*' || currentPath === item.url)
      return (
        <li className={`nav-item ${activeSection === item.scrollTo ? 'active' : ''}`} key={item.name}>
          <Link to={item.scrollTo!} smooth duration={750} offset={-60} spy={true} onSetActive={handleSetActive} className="nav-link text-capitalize">
            {item.name}
          </Link>
        </li>
      );
    else {
      return (
        <li className={`nav-item ${activeSection === item.scrollTo ? 'active' : ''}`} key={item.name}>
          <RouterLink to={item.url} state={{ scrollTo: item.scrollTo }} className="nav-link text-capitalize">
            {item.name}
          </RouterLink>
        </li>
      );
    }
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
