// src/components/Header.jsx
import { useState, useEffect } from 'react';
import { Link, Events, scrollSpy } from 'react-scroll';

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [expanded, setExpanded] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

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

  const handleSetActive = (to) => {
    setActiveSection(to.replace('mh-', ''));
  };

  const handleToggle = () => setExpanded((prev) => !prev);
  const handleClose = () => setExpanded(false);

  const menuItems = ['home', 'about', 'skills', 'experience', 'blog', 'contact'];

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
                {menuItems.map((item) => (
                  <li className={`nav-item ${activeSection === item ? 'active' : ''}`} key={item}>
                    <Link to={`mh-${item}`} smooth duration={750} offset={-60} spy={true} onSetActive={handleSetActive} className="nav-link">
                      {item.charAt(0).toUpperCase() + item.slice(1)}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
