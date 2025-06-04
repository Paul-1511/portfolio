import React from 'react';
import './HeroSection.css';
import { useResponsive } from '../hooks/useResponsive';

const HeroSection = () => {
  const { isMobile, isTablet } = useResponsive();

  const scrollToProjects = () => {
    document.getElementById('proyectos').scrollIntoView({ behavior: 'smooth' });
  };

  const downloadCV = () => {
    const link = document.createElement('a');
    link.href = '/CV.pdf'; 
    link.download = 'CV_PabloMendez.pdf';
    link.click();
  };

  return (
    <section className="hero-section" id="inicio">
      <div className="hero-container">
        <div className={`hero-content ${isMobile ? 'mobile-layout' : ''}`}>
          <div className="hero-text">
            <h1 className="hero-title">
              Hola, soy <span className="highlight">Tu Nombre</span>
            </h1>
            <h2 className="hero-subtitle">
              Desarrollador Web Full Stack
            </h2>
            <p className="hero-description">
              Especializado en React, JavaScript y tecnologías modernas. 
              {!isMobile && "Apasionado por crear experiencias web increíbles y funcionales."}
              Transformo ideas en código limpio y eficiente.
            </p>
            <div className={`hero-buttons ${isMobile ? 'mobile-buttons' : ''}`}>
              <button className="btn btn-primary" onClick={scrollToProjects}>
                Ver Proyectos
              </button>
              <button className="btn btn-secondary" onClick={downloadCV}>
                Descargar CV
              </button>
            </div>
            <div className="hero-social">
              <a href="https://github.com/Paul-1511" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-github"></i>
              </a>
              <a href="mailto:paulmendez1511@gmail.com">
                <i className="fas fa-envelope"></i>
              </a>
            </div>
          </div>
          {!isMobile && (
            <div className="hero-image">
              <div className="hero-avatar">
                <img src="/images/profile.jpg" alt="Tu foto de perfil" />
              </div>
              <div className="hero-decoration">
                <div className="floating-element"></div>
                <div className="floating-element"></div>
                <div className="floating-element"></div>
              </div>
            </div>
          )}
        </div>
        <div className="hero-scroll">
          <div className="scroll-indicator">
            <span>Scroll</span>
            <div className="scroll-arrow"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;