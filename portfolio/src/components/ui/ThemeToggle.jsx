import React, { useState, useEffect } from 'react';
import './ThemeToggle.css';
import { useResponsive } from '../hooks/useResponsive';

const ThemeToggle = ({ 
  className = '',
  size = 'medium',
  position = 'fixed',
  showLabel = false,
  variant = 'default'
}) => {
  const [isDark, setIsDark] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);
  const { isMobile } = useResponsive();

  // Ajustar tamaño y posición automáticamente en móvil
  const responsiveSize = isMobile ? 'small' : size;
  const responsivePosition = isMobile ? 'absolute' : position;

  useEffect(() => {
    // Verificar preferencia guardada o del sistema
    const savedTheme = localStorage.getItem('theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    
    const initialTheme = savedTheme || (prefersDark ? 'dark' : 'light');
    setIsDark(initialTheme === 'dark');
    
    // Aplicar tema inicial
    document.documentElement.setAttribute('data-theme', initialTheme);
    document.body.classList.toggle('dark-theme', initialTheme === 'dark');
  }, []);

  useEffect(() => {
    // Aplicar tema al documento
    const theme = isDark ? 'dark' : 'light';
    document.documentElement.setAttribute('data-theme', theme);
    document.body.classList.toggle('dark-theme', isDark);
    localStorage.setItem('theme', theme);

    // Emitir evento personalizado para notificar cambio de tema
    window.dispatchEvent(new CustomEvent('themeChange', { detail: { theme } }));
  }, [isDark]);

  const toggleTheme = () => {
    setIsAnimating(true);
    setIsDark(!isDark);
    
    // Resetear animación
    setTimeout(() => {
      setIsAnimating(false);
    }, 300);
  };

  const baseClasses = 'theme-toggle';
  const variantClass = `theme-toggle-${variant}`;
  const animatingClass = isAnimating ? 'theme-toggle-animating' : '';

  return (
    <div className={`${baseClasses} theme-toggle-${responsiveSize} theme-toggle-${responsivePosition} ${variantClass} ${animatingClass} ${className}`}>
      <button 
        className="theme-toggle-button"
        onClick={toggleTheme}
        aria-label={`Cambiar a tema ${isDark ? 'claro' : 'oscuro'}`}
        title={`Cambiar a tema ${isDark ? 'claro' : 'oscuro'}`}
      >
        <div className="theme-toggle-track">
          <div className="theme-toggle-thumb">
            <span className="theme-toggle-icon">
              {isDark ? '🌙' : '☀️'}
            </span>
          </div>
        </div>
        
        {!isMobile && (
          <div className="theme-toggle-background">
            <div className="theme-toggle-stars">
              <span className="star star-1">✨</span>
              <span className="star star-2">⭐</span>
              <span className="star star-3">✨</span>
            </div>
            <div className="theme-toggle-clouds">
              <span className="cloud cloud-1">☁️</span>
              <span className="cloud cloud-2">☁️</span>
            </div>
          </div>
        )}
      </button>
      
      {showLabel && !isMobile && (
        <span className="theme-toggle-label">
          {isDark ? 'Modo Oscuro' : 'Modo Claro'}
        </span>
      )}
    </div>
  );
};

export default ThemeToggle;