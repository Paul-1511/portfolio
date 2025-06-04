import React from 'react';
import useResponsive from '../../hooks/useResponsive';
import Button from '../ui/Button';
import styled from 'styled-components';

const HeroContainer = styled.section`
  min-height: 100vh;
  display: flex;
  align-items: center;
  padding: 2rem;
  background: ${({ theme }) => theme.background};
  color: ${({ theme }) => theme.text};
`;

const HeroContent = styled.div`
  display: flex;
  max-width: 1200px;
  margin: 0 auto;
  gap: 3rem;
  align-items: center;

  ${({ $isMobile }) => $isMobile && `
    flex-direction: column;
    text-align: center;
  `}
`;

const HeroText = styled.div`
  flex: 1;
  h1 span {
    color: ${({ theme }) => theme.primary};
  }
`;

const HeroImage = styled.div`
  flex: 1;
  img {
    width: 100%;
    max-width: 400px;
    border-radius: 20px;
    box-shadow: 0 10px 30px rgba(0,0,0,0.2);
  }
`;

const HeroButtons = styled.div`
  display: flex;
  gap: 1rem;
  margin: 2rem 0;
`;

const HeroSocial = styled.div`
  display: flex;
  gap: 1.5rem;
  a {
    font-size: 1.5rem;
    color: ${({ theme }) => theme.text};
    transition: color 0.3s;
    &:hover {
      color: ${({ theme }) => theme.primary};
    }
  }
`;

const HeroSection = () => {
  const { isMobile } = useResponsive();

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <HeroContainer id="inicio">
      <HeroContent $isMobile={isMobile}>
        <HeroText>
          <h1>Hola, soy <span>Pablo Méndez</span></h1>
          <h2>Desarrollador Full Stack</h2>
          <p>
            {!isMobile && "Especializado en React, Node.js y TypeScript. "}
            Creo soluciones web eficientes y escalables.
          </p>

          <HeroButtons>
            <Button onClick={() => scrollTo('proyectos')} variant="primary">
              Ver Proyectos
            </Button>
            <Button 
              as="a" 
              href="/CV.pdf" 
              download="CV_PabloMendez.pdf"
              variant="secondary"
            >
              Descargar CV
            </Button>
          </HeroButtons>

          <HeroSocial>
            <a href="https://github.com/Paul-1511" target="_blank" rel="noopener">
              <i className="fab fa-github"></i>
            </a>
            <a href="mailto:paulmendez1511@gmail.com">
              <i className="fas fa-envelope"></i>
            </a>
          </HeroSocial>
        </HeroText>

        {/*
        {!isMobile && (
          <HeroImage>
            <img 
              src="/images/profile.jpg" 
              alt="Pablo Méndez" 
              loading="lazy"
            />
          </HeroImage>
        )}
        */}
      </HeroContent>
    </HeroContainer>
  );
};

export default HeroSection;