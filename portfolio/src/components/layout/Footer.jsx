import React from 'react';
import { useResponsive } from '../hooks/useResponsive';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const { isMobile } = useResponsive();

  return (
    <footer className="footer">
      <div className={`footer-content ${isMobile ? 'mobile-footer' : ''}`}>
        <div className="footer-section">
          <h3>Pablo Méndez</h3>
          <p>Desarrollador Web Full Stack</p>
        </div>

        <div className="footer-section">
          <h4>Enlaces</h4>
          <ul>
            <li><a href="#proyectos">Proyectos</a></li>
            <li><a href="#habilidades">Habilidades</a></li>
            <li><a href="/CV.pdf">Descargar CV</a></li>
          </ul>
        </div>

        <div className="footer-section">
          <h4>Contacto</h4>
          <div className={`social-links ${isMobile ? 'mobile-social' : ''}`}>
            <a href="mailto:paulmendez1511@gmail.com">Email</a>
            <a href="https://github.com/Paul-1511">GitHub</a>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>&copy; {currentYear} Tu Nombre. Todos los derechos reservados.</p>
      </div>
    </footer>
  );
};

export default Footer;