import React from 'react';
import styled from 'styled-components';
import useResponsive from '../../hooks/useResponsive';
import Button from '../ui/Button';

const FooterContainer = styled.footer`
  background: ${({ theme }) => theme.background};
  border-top: 2px solid ${({ theme }) => theme.primary}20;
  padding: 40px 20px 20px;
  margin-top: auto;
  box-shadow: 0 -4px 20px rgba(0,0,0,0.1);
`;

const FooterContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 30px;
  
  ${({ $isMobile }) => $isMobile && `
    grid-template-columns: 1fr;
    gap: 20px;
    text-align: center;
  `}
`;

const FooterSection = styled.div`
  h3, h4 {
    color: ${({ theme }) => theme.primary};
    margin-bottom: 15px;
    font-family: ${({ theme }) => theme.fonts?.primary || 'Inter, sans-serif'};
    font-weight: 600;
  }
  
  h3 {
    font-size: 24px;
    background: linear-gradient(135deg, ${({ theme }) => theme.primary}, ${({ theme }) => theme.secondary});
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
  }
  
  p {
    color: ${({ theme }) => theme.textLight};
    margin-bottom: 15px;
    font-size: 16px;
  }
`;

const LinksList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  
  li {
    margin-bottom: 8px;
    
    a {
      color: ${({ theme }) => theme.text};
      text-decoration: none;
      transition: all 0.3s ease;
      padding: 5px 0;
      display: inline-block;
      position: relative;
      
      &:hover {
        color: ${({ theme }) => theme.primary};
        transform: translateX(5px);
      }
      
      &::after {
        content: '';
        position: absolute;
        width: 0;
        height: 2px;
        bottom: 0;
        left: 0;
        background: linear-gradient(135deg, ${({ theme }) => theme.primary}, ${({ theme }) => theme.secondary});
        transition: width 0.3s ease;
      }
      
      &:hover::after {
        width: 100%;
      }
    }
  }
`;

const SocialLinks = styled.div`
  display: flex;
  gap: 15px;
  
  ${({ $isMobile }) => $isMobile && `
    justify-content: center;
    flex-wrap: wrap;
  `}
  
  a {
    color: ${({ theme }) => theme.text};
    text-decoration: none;
    padding: 10px 15px;
    border-radius: 8px;
    background: ${({ theme }) => theme.primary}10;
    border: 1px solid ${({ theme }) => theme.primary}20;
    transition: all 0.3s ease;
    display: flex;
    align-items: center;
    gap: 8px;
    font-size: 14px;
    
    &:hover {
      background: ${({ theme }) => theme.primary};
      color: white;
      transform: translateY(-2px);
      box-shadow: ${({ theme }) => theme.shadows?.medium || '0 4px 12px rgba(0,0,0,0.15)'};
    }
    
    i {
      font-size: 16px;
    }
  }
`;

const FooterBottom = styled.div`
  margin-top: 30px;
  padding-top: 20px;
  border-top: 1px solid ${({ theme }) => theme.primary}20;
  text-align: center;
  
  p {
    color: ${({ theme }) => theme.textLight};
    font-size: 14px;
    margin: 0;
  }
`;

const CVButton = styled(Button)`
  margin-top: 10px;
  
  i {
    margin-right: 8px;
  }
`;

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const { isMobile } = useResponsive();

  return (
    <FooterContainer>
      <FooterContent $isMobile={isMobile}>
        <FooterSection>
          <h3>Pablo Méndez</h3>
          <p>Desarrollador Web Full Stack</p>
          <CVButton
            as="a"
            href="/CV.pdf"
            target="_blank"
            rel="noopener noreferrer"
            variant="secondary"
            size={isMobile ? "small" : "medium"}
          >
            <i className="fas fa-file-download"></i>
            Descargar CV
          </CVButton>
        </FooterSection>

        <FooterSection>
          <h4>Enlaces</h4>
          <LinksList>
            <li><a href="#proyectos">Proyectos</a></li>
            <li><a href="#habilidades">Habilidades</a></li>
            <li><a href="#contacto">Contacto</a></li>
          </LinksList>
        </FooterSection>

        <FooterSection id="contacto">
          <h4>Contacto</h4>
          <SocialLinks $isMobile={isMobile}>
            <a href="mailto:1511@gmail.com">
              <i className="fas fa-envelope"></i>
              Email
            </a>
            <a
              href="https://github.com/Paul-1511"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-github"></i>
              GitHub
            </a>
          </SocialLinks>
        </FooterSection>
      </FooterContent>

      <FooterBottom>
        <p>&copy; {currentYear} Pablo Méndez. Todos los derechos reservados.</p>
      </FooterBottom>
    </FooterContainer>
  );
};

export default Footer;