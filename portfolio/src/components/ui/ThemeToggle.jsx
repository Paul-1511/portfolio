import React from 'react';
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
  border-radius: 20px;
  transition: all 0.3s ease;
  
  &:hover {
    transform: scale(1.05);
    box-shadow: ${({ theme }) => theme.shadows?.medium || '0 4px 12px rgba(0,0,0,0.15)'};
  }
`;

const ToggleTrack = styled.div`
  width: 60px;
  height: 30px;
  background: ${({ theme, $isDark }) => 
    $isDark 
      ? 'linear-gradient(135deg, #211C84 0%, #4D55CC 50%, #7A73D1 100%)'
      : 'linear-gradient(135deg, #FCFFC1 0%, #FFE893 50%, #FBB4A5 100%)'
  };
  border: 2px solid ${({ theme }) => theme.primary}40;
  border-radius: 15px;
  position: relative;
  overflow: hidden;
  box-shadow: inset 0 2px 8px rgba(0,0,0,0.1);
`;

const ToggleThumb = styled.div`
  width: 26px;
  height: 26px;
  background: ${({ theme, $isDark }) => 
    $isDark 
      ? `linear-gradient(135deg, ${theme.primaryLight || '#8bb8ff'}, ${theme.secondary || '#9d4edd'})`
      : `linear-gradient(135deg, ${theme.primary || '#3a86ff'}, ${theme.secondary || '#8338ec'})`
  };
  border: 2px solid ${({ theme }) => theme.backgroundSecondary || '#ffffff'};
  border-radius: 50%;
  position: absolute;
  top: 2px;
  left: ${({ $isDark }) => ($isDark ? '32px' : '2px')};
  transition: all 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94);
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: ${({ theme }) => theme.shadows?.small || '0 2px 4px rgba(0,0,0,0.1)'};
  
  &:hover {
    transform: scale(1.1);
  }
`;

const twinkle = keyframes`
  0%, 100% { 
    opacity: 0.3; 
    transform: scale(0.8);
  }
  50% { 
    opacity: 1; 
    transform: scale(1.2);
  }
`;

const float = keyframes`
  0%, 100% { transform: translateY(0px); }
  50% { transform: translateY(-2px); }
`;

const Star = styled.span`
  position: absolute;
  font-size: 10px;
  animation: ${twinkle} 2s infinite;
  color: ${({ theme }) => theme.primaryLight || '#8bb8ff'};
  filter: drop-shadow(0 0 2px currentColor);
  
  &:nth-child(1) { 
    top: 5px; 
    left: 10px; 
    animation-delay: 0s;
  }
  &:nth-child(2) { 
    top: 15px; 
    left: 25px; 
    animation-delay: 0.7s;
  }
  &:nth-child(3) { 
    top: 8px; 
    left: 40px; 
    animation-delay: 1.4s;
  }
`;

const SunRay = styled.span`
  position: absolute;
  font-size: 8px;
  color: ${({ theme }) => theme.primary || '#3a86ff'};
  animation: ${float} 1.5s ease-in-out infinite;
  filter: drop-shadow(0 0 1px currentColor);
  
  &:nth-child(1) { 
    top: 3px; 
    right: 15px;
    animation-delay: 0s;
  }
  &:nth-child(2) { 
    top: 12px; 
    right: 8px;
    animation-delay: 0.5s;
  }
  &:nth-child(3) { 
    top: 18px; 
    right: 20px;
    animation-delay: 1s;
  }
`;

const Icon = styled.span`
  font-size: 14px;
  filter: drop-shadow(0 1px 2px rgba(0,0,0,0.2));
  transition: all 0.3s ease;
  
  ${ToggleThumb}:hover & {
    transform: rotate(${({ $isDark }) => $isDark ? '15deg' : '180deg'});
  }
`;

const ThemeToggle = ({
  theme, 
  setTheme, 
  size = 'medium', 
  position = 'fixed' 
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
        <ToggleTrack $isDark={isDark}>
          {isDark ? (
            <>
              <Star>✨</Star>
              <Star>⭐</Star>
              <Star>✨</Star>
            </>
          ) : (
            <>
              <SunRay>✦</SunRay>
              <SunRay>✧</SunRay>
              <SunRay>✦</SunRay>
            </>
          )}
          <ToggleThumb $isDark={isDark}>
            <Icon $isDark={isDark}>
              {isDark ? '🌙' : '☀️'}
            </Icon>
          </ToggleThumb>
        </ToggleTrack>
      </ToggleButton>
    </ToggleContainer>
  );
};

export default ThemeToggle;