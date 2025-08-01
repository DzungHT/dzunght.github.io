'use client';

import { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { Link as ScrollLink, Events, scrollSpy } from 'react-scroll';
import { menuItems, type MenuItem } from '@/lib/menuItems';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { FaBars } from 'react-icons/fa6';

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
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

  const MenuItemRender = (item: MenuItem) => {
    const normalizePath = (path: string) => path.replace(/\/+$/, '');
    const isSamePage = item.url === '*' || normalizePath(pathname) === normalizePath(item.url);

    return (
      <Nav.Item className={`${activeSection === item.scrollTo ? 'active' : ''}`} key={item.name}>
        {isSamePage ? (
          <ScrollLink
            to={item.scrollTo!}
            smooth={true}
            duration={300}
            offset={-74}
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
      </Nav.Item>
    );
  };

  return (
    <Navbar expand="lg" fixed="top" variant="dark" className={`fixed-top ${scrolled ? 'navbar-shrink' : ''}`} id="mainNav">
      <Container>
        <Navbar.Brand href="/">
          <img src="/favicon.svg" alt="Logo" />
          <span className="ms-1 my-auto">dzunght.github.io</span>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarResponsive">
          Menu
          <FaBars className="ms-1" />
        </Navbar.Toggle>
        <Navbar.Collapse id="navbarResponsive">
          <Nav className="text-uppercase ms-auto py-2 py-lg-0">{menuItems.map(MenuItemRender)}</Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
