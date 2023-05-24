import React, { useState } from 'react';
import Icons from '../Icons/Icons';

function Navbar() {
  const [activeSection, setActiveSection] = useState('home');

  const handleNavLinkClick = (section) => {
    setActiveSection(section);
    scrollToSection(section);
  };

  const scrollToSection = (section) => {
    const element = document.getElementById(section);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav >
      <ul>
        <li className={activeSection === 'home' ? 'active' : ''}>
          <a onClick={() => handleNavLinkClick('home')} href="#home">
            Home
          </a>
        </li>
        <li className={activeSection === 'about' ? 'active' : ''}>
          <a onClick={() => handleNavLinkClick('about')} href="#about">
            About
          </a>
        </li>
        <li className={activeSection === 'projects' ? 'active' : ''}>
          <a onClick={() => handleNavLinkClick('projects')} href="#projects">
            Projects
          </a>
        </li>
        <li className={activeSection === 'contact' ? 'active' : ''}>
          <a onClick={() => handleNavLinkClick('contact')} href="#contact">
            Contact
          </a>
        </li>
        <li className={activeSection === 'contact' ? 'active' : ''}>
          <a onClick={() => handleNavLinkClick('contact')} href="#contact">
            <Icons/>
          </a>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
