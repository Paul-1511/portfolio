import React, { useState } from 'react';
import styled from 'styled-components';
import useResponsive from '../../hooks/useResponsive';
import Button from '../ui/Button';
import ThemeToggle from '../ui/ThemeToggle';

const HeaderContainer = styled.header`
  background: ${({ theme }) => theme.background};
  border-bottom: 2px solid ${({ theme }) => theme.primary}20;
  box-shadow: ${({ theme }) => theme.shadows?.medium || '0 4px 12px rgba(0,0,0,0.15)'};
  position: sticky;
  top: 0;
  z-index: 1000;
  backdrop-filter: blur(10px);
`;

const Navbar = styled.nav`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
  height: 70px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const NavbarBrand = styled.div`
  a {
    text-decoration: none;
    
    h2 {
      margin: 0;
      font-size: 28px;
      font-weight: 700;
      background: linear-gradient(135deg, ${({ theme }) => theme.primary}, ${({ theme }) => theme.secondary});
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-clip: text;
      font-family: ${({ theme }) => theme.fonts?.primary || 'Inter, sans-serif'};
      transition: all 0.3s ease;
      
      &:hover {
        transform: scale(1.05);
      }
    }
  }
`;

const NavLinks = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  align-items: center;
  gap: 30px;
  
  ${({ $isMobile, $isOpen }) => $isMobile && `
    position: fixed;
    top: 70px;
    left: 0;
    width: 100%;
    height: calc(100vh - 70px);
    background: ${({ theme }) => theme.backgroundSecondary};
    flex-direction: column;
    justify-content: flex-start;
    padding-top: 50px;
    gap: 20px;
    transform: translateX(${$isOpen ? '0' : '-100%'});
    transition: transform 0.3s ease;
    box-shadow: ${({ theme }) => theme.shadows?.large || '0 8px 24px rgba(0,0,0,0.2)'};
  `}
  
  li {
    a {
      color: ${({ theme }) => theme.text};
      text-decoration: none;
      font-weight: 500;
      padding: 8px 16px;
      border-radius: 8px;
      transition: all 0.3s ease;
      position: relative;
      font-size: ${({ $isMobile }) => $isMobile ? '18px' : '16px'};
      
      &:hover {
        color: ${({ theme }) => theme.primary};
        background: ${({ theme }) => theme.primary}10;
        transform: translateY(-2px);
      }
      
      &::after {
        content: '';
        position: absolute;
        width: 0;
        height: 2px;
        bottom: 0;
        left: 50%;
        transform: translateX(-50%);
        background: linear-gradient(135deg, ${({ theme }) => theme.primary}, ${({ theme }) => theme.secondary});
        transition: width 0.3s ease;
      }
      
      &:hover::after {
        width: 80%;
      }
    }
  }
`;

const MenuToggle = styled.button`
  display: none;
  background: none;
  border: none;
  font-size: 24px;
  color: ${({ theme }) => theme.text};
  cursor: pointer;
  padding: 8px;
  border-radius: 8px;
  transition: all 0.3s ease;
  
  &:hover {
    background: ${({ theme }) => theme.primary}20;
    color: ${({ theme }) => theme.primary};
    transform: scale(1.1);
  }
  
  ${({ $isMobile }) => $isMobile && `
    display: block;
  `}
`;

const ThemeToggleWrapper = styled.li`
  ${({ $isMobile }) => $isMobile && `
    margin-top: 20px;
  `}
`;

const Header = ({ theme, setTheme }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { isMobile } = useResponsive();

  return (
    <HeaderContainer>
      <Navbar>
        <NavbarBrand>
          <a href="#inicio">
            <h2>Pablo Méndez</h2>
          </a>
        </NavbarBrand>

        <NavLinks $isMobile={isMobile} $isOpen={isMenuOpen}>
          <li><a href="#inicio">Inicio</a></li>
          <li><a href="#proyectos">Proyectos</a></li>
          <li><a href="#habilidades">Habilidades</a></li>
          <li><a href="#contacto">Contacto</a></li>
          <li>
            <a href="/CV.pdf" target="_blank" rel="noopener noreferrer">
              CV
            </a>
          </li>
          <ThemeToggleWrapper $isMobile={isMobile}>
            <ThemeToggle 
              theme={theme} 
              setTheme={setTheme}
              position={isMobile ? "relative" : "static"}
            />
          </ThemeToggleWrapper>
        </NavLinks>

        <MenuToggle
          $isMobile={isMobile}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? '✕' : '☰'}
        </MenuToggle>
      </Navbar>
    </HeaderContainer>
  );
};

export default Header;