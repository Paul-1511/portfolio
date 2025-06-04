import React, { useState } from 'react';
import useResponsive from '../../hooks/useResponsive'; // Ruta corregida (desde layout/)
import Button from '../ui/Button'; // Opcional
import ThemeToggle from '../ui/ThemeToggle'; // tema oscuro/claro

const Header = ({ theme, setTheme }) => { // Recibe props de App.jsx para el tema
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { isMobile } = useResponsive();

  return (
    <header className="header">
      <nav className="navbar">
        <div className="navbar-brand">
          <a href="#inicio">
            <h2>Pablo Méndez</h2>
          </a>
        </div>
        
        <ul className={`nav-links ${isMenuOpen ? 'active' : ''}`}>
          <li><a href="#inicio">Inicio</a></li>
          <li><a href="#proyectos">Proyectos</a></li>
          <li><a href="#habilidades">Habilidades</a></li>
          <li><a href="#contacto">Contacto</a></li>
          <li><a href="/CV.pdf" target="_blank" rel="noopener noreferrer">CV</a></li>
          <li>
            <ThemeToggle theme={theme} setTheme={setTheme} /> {/* Componente de tema */}
          </li>
        </ul>
        
        {isMobile && (
          <button 
            className="menu-toggle"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            ☰
          </button>
        )}
      </nav>
    </header>
  );
};

export default Header;