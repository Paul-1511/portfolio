import React from 'react';
import useResponsive from '../../hooks/useResponsive';
import useInView from '../../hooks/useInView';
import Button from '../ui/Button';
import styled from 'styled-components';

const HeroContainer = styled.section`
  min-height: 100vh;
  display: flex;
  align-items: center;
  padding: 2rem;
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
  justify-content: center;
  
  @media (max-width: 600px) {
    flex-direction: column;
    align-items: center;
    gap: 0.75rem;
  }
`;

const HeroSocial = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  a, button {
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
  const [ref, inView] = useInView({ threshold: 0.1 });

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <HeroContainer id="inicio" ref={ref} className={inView ? 'fade-in-section' : 'fade-out-section'}>
      <HeroContent $isMobile={isMobile}>
        <HeroText>
          <h1>Hola, soy <span>Pablo Méndez</span></h1>
          <h2>Desarrollador Full Stack</h2>
          <p>
            {!isMobile && "Aprendiendo React, Node.js y TypeScript. "}
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
          <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '2rem' }}>
            <iframe
              src="/CV.pdf"
              title="CV Preview"
              style={{ border: '1px solid #ccc', borderRadius: '8px', width: '100%', maxWidth: '700px', height: isMobile ? '400px' : '1000px' }}
            />
          </div>

          <HeroSocial>
            <Button
              as="a"
              href="https://github.com/Paul-1511"
              target="_blank"
              rel="noopener"
              variant="text"
              style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}
            >
              <i className="fab fa-github"></i> GitHub
            </Button>
            <Button
              as="a"
              href="mailto:paulmendez1511@gmail.com"
              variant="text"
              style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}
            >
              <i className="fas fa-envelope"></i> Email
            </Button>
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