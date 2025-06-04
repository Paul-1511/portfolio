import React, { useState, useEffect } from 'react';
import styled, { css, keyframes } from 'styled-components';
import useResponsive from '../../hooks/useResponsive';

const ToggleContainer = styled.div`
  position: ${({ $position }) => $position};
  top: 20px;
  right: 20px;
  z-index: 100;
  
  ${({ $size }) => 
    $size === 'small' && css`
      transform: scale(0.8);
    `}
`;

const ToggleButton = styled.button`
  background: transparent;
  border: none;
  cursor: pointer;
  padding: 8px;
  position: relative;
`;

const ToggleTrack = styled.div`
  width: 60px;
  height: 30px;
  background: ${({ theme }) => theme.backgroundSecondary};
  border-radius: 15px;
  position: relative;
  overflow: hidden;
`;

const ToggleThumb = styled.div`
  width: 26px;
  height: 26px;
  background: ${({ theme }) => theme.primary};
  border-radius: 50%;
  position: absolute;
  top: 2px;
  left: ${({ $isDark }) => ($isDark ? '32px' : '2px')};
  transition: left 0.3s ease;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const twinkle = keyframes`
  0%, 100% { opacity: 0.2; }
  50% { opacity: 1; }
`;

const Star = styled.span`
  position: absolute;
  font-size: 10px;
  animation: ${twinkle} 2s infinite;
  
  &:nth-child(1) { top: 5px; left: 10px; }
  &:nth-child(2) { top: 15px; left: 25px; }
  &:nth-child(3) { top: 8px; left: 40px; }
`;

const ThemeToggle = ({ 
  theme, setTheme, size = 'medium', position = 'fixed'
}) => {
  const isDark = theme === 'dark';
  const { isMobile } = useResponsive();
  const responsiveSize = isMobile ? 'small' : size;
  const responsivePosition = isMobile ? 'absolute' : position;

  const toggleTheme = () => {
    setTheme(isDark ? 'light' : 'dark');
  };

  return (
    <ToggleContainer $size={responsiveSize} $position={responsivePosition}>
      <ToggleButton 
        onClick={toggleTheme}
        aria-label={`Cambiar a tema ${isDark ? 'claro' : 'oscuro'}`}
      >
        <ToggleTrack>
          {isDark && (
            <>
              <Star>✨</Star>
              <Star>⭐</Star>
              <Star>✨</Star>
            </>
          )}
          <ToggleThumb $isDark={isDark}>
            {isDark ? '🌙' : '☀️'}
          </ToggleThumb>
        </ToggleTrack>
      </ToggleButton>
    </ToggleContainer>
  );
};

export default ThemeToggle;