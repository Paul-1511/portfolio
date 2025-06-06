import React from 'react';
import { useTheme } from 'styled-components';
import useResponsive from '../../hooks/useResponsive';
import useInView from '../../hooks/useInView';
import Button from '../ui/Button';
import styled from 'styled-components';

const HeroContainer = styled.section`
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2rem;
  color: ${({ theme }) => theme.text};
  position: relative;
  overflow: hidden;
  text-align: center;
  background: transparent; /* Background completamente transparente */

  &::before {
    content: '';
    position: absolute;
    inset: 0;
    background: transparent;
    z-index: -2;
  }

  &::after {
    content: '';
    position: absolute;
    inset: 0;
    background: rgba(255, 255, 255, 0.6); 
    z-index: -1;
  }
`;

const HeroContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const HeroText = styled.div`
  width: 100%;
  max-width: 800px;
  z-index: 1;
  display: flex;
  flex-direction: column;
  align-items: center;

  h1 {
    font-size: clamp(2rem, 5vw, 3.5rem);
    margin-bottom: 1rem;
    
    span {
      color: ${({ theme }) => theme.primary};
      background: linear-gradient(135deg, ${({ theme }) => theme.primary}, ${({ theme }) => theme.secondary});
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-clip: text;
      position: relative;
      display: inline-block;
      
      &::after {
        content: '';
        position: absolute;
        bottom: 0;
        left: 0;
        width: 100%;
        height: 3px;
        background: linear-gradient(135deg, ${({ theme }) => theme.primary}, ${({ theme }) => theme.secondary});
        transform: scaleX(0);
        transform-origin: right;
        transition: transform 0.3s ease;
      }
      
      &:hover::after {
        transform: scaleX(1);
        transform-origin: left;
      }
    }
  }

  h2 {
    font-size: clamp(1.25rem, 3vw, 2rem);
    margin-bottom: 1.5rem;
    color: ${({ theme }) => theme.text};
    font-weight: 400;
  }

  p {
    font-size: clamp(1rem, 2vw, 1.25rem);
    line-height: 1.6;
    margin: 0 auto 2rem;
    color: ${({ theme }) => theme.text};
    max-width: 600px;
  }
`;

const HeroButtons = styled.div`
  display: flex;
  gap: 1rem;
  margin: 2rem 0;
  justify-content: center;
  width: 100%;
  
  @media (max-width: 600px) {
    flex-direction: column;
    align-items: center;
  }
`;

const PrimaryButton = styled(Button)`
  background: ${({ theme }) => theme.scrolltheme};
  color: white;
  border: none;
  border-radius: 50px;
  padding: 0.75rem 2rem;
  font-size: 1rem;
  font-weight: 500;
  min-width: 180px;
  text-align: center;
  
  &:hover {
    background: ${({ theme }) => theme.scrolltheme};
    filter: brightness(1.1);
    transform: translateY(-2px);
  }
`;

const DownloadButton = styled(Button)`
  background: ${({ theme }) => theme.scrolltheme};
  color: white;
  border: none;
  border-radius: 50px;
  padding: 0.75rem 2rem;
  font-size: 1rem;
  font-weight: 500;
  min-width: 180px;
  text-align: center;
  
  &:hover {
    color: white;
    background: ${({ theme }) => theme.scrolltheme};
    transform: translateY(-2px);
  }
`;

const HeroSocial = styled.div`
  display: flex;
  gap: 1.5rem;
  margin-top: 2rem;
  justify-content: center;

  a, button {
    font-size: 1rem;
    color: ${({ theme }) => theme.text};
    transition: all 0.3s;
    background: rgba(255, 255, 255, 0.1);
    padding: 0.75rem 1.5rem;
    border-radius: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.5rem;
    box-shadow: ${({ theme }) => theme.shadows.small};
    text-decoration: none;
    border: none;
    cursor: pointer;

    &:hover {
      color: white;
      background: ${({ theme }) => theme.scrolltheme};
      transform: translateY(-3px);
      box-shadow: ${({ theme }) => theme.shadows.medium};
    }

    i {
      font-size: 1.2rem;
    }
  }
`;

const CVPreview = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 2rem;
  width: 100%;
  
  iframe {
    border: 1px solid ${({ theme }) => theme.primaryLight};
    border-radius: 8px;
    width: 100%;
    max-width: 700px;
    height: ${({ $isMobile }) => $isMobile ? '400px' : '600px'};
    background: white;
    box-shadow: ${({ theme }) => theme.shadows.medium};
  }
`;

const HeroSection = () => {
  const { isMobile } = useResponsive();
  const [ref, inView] = useInView({ threshold: 0.1 });
  const theme = useTheme();

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <HeroContainer id="inicio" ref={ref} className={inView ? 'fade-in-section' : 'fade-out-section'}>
      <HeroContent>
        <HeroText>
          <h1>Hola, soy <span>Pablo Méndez</span></h1>
          <h2>Desarrollador Full Stack</h2>
          <p>
            {!isMobile && "Aprendiendo React, Node.js y TypeScript. "}
            Creo soluciones web eficientes y escalables.
          </p>

          <HeroButtons>
            <PrimaryButton onClick={() => scrollTo('proyectos')}>
              Ver Proyectos
            </PrimaryButton>
            <DownloadButton 
              as="a" 
              href="/CV.pdf" 
              download="CV_PabloMendez.pdf"
            >
              Descargar CV
            </DownloadButton>
          </HeroButtons>

          <CVPreview $isMobile={isMobile}>
            <iframe
              src="/CV.pdf"
              title="CV Preview"
            />
          </CVPreview>

          <HeroSocial>
            <Button
              as="a"
              href="https://github.com/Paul-1511"
              target="_blank"
              rel="noopener noreferrer"
              variant="text"
              aria-label="GitHub"
            >
              <i className="fab fa-github"></i>
              GitHub
            </Button>
            <Button
              as="a"
              href="mailto:paulmendez1511@gmail.com"
              variant="text"
              aria-label="Email"
            >
              <i className="fas fa-envelope"></i>
              Email
            </Button>
          </HeroSocial>
        </HeroText>
      </HeroContent>
    </HeroContainer>
  );
};

export default HeroSection;