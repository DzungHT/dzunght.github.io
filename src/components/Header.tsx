import { useEffect, useState } from 'react';
import { Link } from 'react-scroll';
import './Header.css'

export default function Header() {
  const [navOpen, setNavOpen] = useState(false);
  const handleNavToggle = () => setNavOpen(!navOpen);

  useEffect(() => {
    const handleScroll = () => {
      const nav = document.getElementById('mh-header');
      if (window.scrollY >= 50) {
        nav?.classList.add('nav-strict');
      } else {
        nav?.classList.remove('nav-strict');
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header id="mh-header" className="black-bg mh-header mh-fixed-nav nav-scroll mh-xs-mobile-nav">
      <div
        className={`overlay fixed inset-0 bg-black/70 transition-opacity ${navOpen ? 'block' : 'hidden'}`}
        onClick={handleNavToggle}
      />
      <div className="container mx-auto px-4 py-4">
        <nav className="flex justify-between items-center">
          <button
            onClick={handleNavToggle}
            className="text-white z-50 md:hidden"
            aria-label="Toggle Navigation"
          >
            <div className="w-6 h-0.5 bg-white mb-1" />
            <div className="w-6 h-0.5 bg-white mb-1" />
            <div className="w-6 h-0.5 bg-white" />
          </button>
          <ul className={`md:flex space-x-6 md:space-x-10 ${navOpen ? 'block bg-[#0bceaf] p-6 fixed left-0 top-0 h-full w-64' : 'hidden'} md:block text-white text-lg`}>
            {['home', 'about', 'skills', 'experience', 'portfolio', 'pricing', 'blog', 'contact'].map((item) => (
              <li key={item} className="my-2 md:my-0">
                <Link
                  to={`mh-${item}`}
                  smooth
                  duration={750}
                  offset={-60}
                  className="cursor-pointer hover:text-cyan-300"
                  onClick={() => setNavOpen(false)}
                >
                  {item.charAt(0).toUpperCase() + item.slice(1)}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}