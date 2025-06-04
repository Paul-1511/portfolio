import React from 'react';
import useResponsive from '../../hooks/useResponsive'; // Ruta corregida (desde layout/)
import Button from '../ui/Button'; // Opcional: para botones de contacto

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const { isMobile } = useResponsive();

  return (
    <footer className="footer">
      <div className={`footer-content ${isMobile ? 'mobile-footer' : ''}`}>
        <div className="footer-section">
          <h3>Pablo Méndez</h3>
          <p>Desarrollador Web Full Stack</p>
          <Button 
            as="a" 
            href="/CV.pdf" 
            target="_blank" 
            rel="noopener noreferrer"
            variant="secondary"
            style={{ marginBottom: '1rem' }}
          >
            <i className="fas fa-file-download" style={{ marginRight: '0.5rem' }}></i>Descargar CV
          </Button>
        </div>

        <div className="footer-section">
          <h4>Enlaces</h4>
          <ul>
            <li><a href="#proyectos">Proyectos</a></li>
            <li><a href="#habilidades">Habilidades</a></li>
            <li><a href="#contacto">Contacto</a></li>
          </ul>
        </div>

        <div className="footer-section" id="contacto">
          <h4>Contacto</h4>
          <div className={`social-links ${isMobile ? 'mobile-social' : ''}`}>
            <a href="mailto:paulmendez1511@gmail.com" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <i className="fas fa-envelope"></i> Email
            </a>
            <a 
              href="https://github.com/Paul-1511" 
              target="_blank" 
              rel="noopener noreferrer"
              style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}
            >
              <i className="fab fa-github"></i> GitHub
            </a>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>&copy; {currentYear} Pablo Méndez. Todos los derechos reservados.</p>
      </div>
    </footer>
  );
};

export default Footer;