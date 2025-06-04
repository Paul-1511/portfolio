import React, { useState } from 'react';
import {useResponsive} from '../../hooks/useResponsive';


const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { isMobile } = useResponsive();

  return (
    <header className="header">
      <nav className="navbar">
        <div className="navbar-brand">
          <h2>Pablo Méndez</h2>
        </div>
        
        <ul className={`nav-links ${isMenuOpen ? 'active' : ''}`}>
          <li><a href="#inicio">Inicio</a></li>
          <li><a href="#proyectos">Proyectos</a></li>
          <li><a href="#habilidades">Habilidades</a></li>
          <li><a href="#contacto">Contacto</a></li>
          <li><a href="/CV.pdf" target="_blank">CV</a></li>
        </ul>
        
        {isMobile && (
          <button 
            className="menu-toggle"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            ☰
          </button>
        )}
      </nav>
    </header>
  );
};

export default Header;