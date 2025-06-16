import React from 'react';

const Footer = () => {
  return (
    <footer className="py-6 mt-10 text-sm border-t theme-bg theme-border">
      <div className="container flex flex-col items-center justify-between gap-4 px-4 mx-auto md:flex-row">
        <div>
          <p>&copy; {new Date().getFullYear()} Your Name. All rights reserved.</p>
        </div>
        <div className="flex gap-4">
          <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer" className="theme-accent">
            GitHub
          </a>
          <a href="https://linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer" className="theme-accent">
            LinkedIn
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
