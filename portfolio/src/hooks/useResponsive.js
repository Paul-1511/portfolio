import { useState, useEffect } from 'react';

/**
 * Custom hook para manejar responsive design con detección precisa
 * @typedef {'xs'|'sm'|'md'|'lg'|'xl'|'xxl'} Breakpoint
 * 
 * @returns {{
 *   screenWidth: number,
 *   screenHeight: number,
 *   isMobile: boolean,
 *   isTablet: boolean,
 *   isDesktop: boolean,
 *   breakpoint: Breakpoint,
 *   orientation: 'portrait'|'landscape',
 *   isPortrait: boolean,
 *   isLandscape: boolean,
 *   isTouchDevice: boolean,
 *   breakpoints: {xs: number, sm: number, md: number, lg: number, xl: number, xxl: number}
 * }} Objeto con todas las propiedades responsive
 */
const useResponsive = () => {
  // Verificar si estamos en el cliente (para SSR/Next.js)
  const isClient = typeof window !== 'undefined';

  // Breakpoints actualizables (basados en Bootstrap 5)
  const BREAKPOINTS = {
    xs: 0,     // <576px
    sm: 576,   // ≥576px
    md: 768,   // ≥768px
    lg: 992,   // ≥992px
    xl: 1200,  // ≥1200px
    xxl: 1400  // ≥1400px
  };

  // Estado inicial
  const [windowState, setWindowState] = useState(() => ({
    screenWidth: isClient ? window.innerWidth : 0,
    screenHeight: isClient ? window.innerHeight : 0,
    orientation: isClient ? 
      (window.innerWidth > window.innerHeight ? 'landscape' : 'portrait') : 'portrait',
    isTouchDevice: isClient ? 
      ('ontouchstart' in window || navigator.maxTouchPoints > 0) : false,
    breakpoint: 'xs'
  }));

  // Efecto para manejar el resize
  useEffect(() => {
    if (!isClient) return;

    const handleResize = () => {
      const width = window.innerWidth;
      const height = window.innerHeight;

      // Determinar breakpoint actual
      let breakpoint = 'xs';
      if (width >= BREAKPOINTS.xxl) breakpoint = 'xxl';
      else if (width >= BREAKPOINTS.xl) breakpoint = 'xl';
      else if (width >= BREAKPOINTS.lg) breakpoint = 'lg';
      else if (width >= BREAKPOINTS.md) breakpoint = 'md';
      else if (width >= BREAKPOINTS.sm) breakpoint = 'sm';

      setWindowState({
        screenWidth: width,
        screenHeight: height,
        orientation: width > height ? 'landscape' : 'portrait',
        isTouchDevice: 'ontouchstart' in window || navigator.maxTouchPoints > 0,
        breakpoint
      });
    };

    // Configurar listener
    window.addEventListener('resize', handleResize);
    
    // Llamar inmediatamente para establecer el estado inicial
    handleResize();

    // Limpieza
    return () => window.removeEventListener('resize', handleResize);
  }, [isClient]);

  // Calcular valores derivados
  const derivedValues = {
    isMobile: windowState.breakpoint === 'xs' || windowState.breakpoint === 'sm',
    isTablet: windowState.breakpoint === 'md',
    isDesktop: windowState.breakpoint === 'lg' || 
               windowState.breakpoint === 'xl' || 
               windowState.breakpoint === 'xxl',
    isPortrait: windowState.orientation === 'portrait',
    isLandscape: windowState.orientation === 'landscape',
    breakpoints: BREAKPOINTS
  };

  return { ...windowState, ...derivedValues };
};

export default useResponsive;