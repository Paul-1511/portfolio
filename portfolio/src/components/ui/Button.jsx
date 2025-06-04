// src/ui/Button.jsx
import React from 'react';
import './Button.css';

import { useResponsive } from '../hooks/useResponsive';

const Button = ({ 
  children, 
  variant = 'primary', 
  size = 'medium',
  onClick, 
  className = '',
  disabled = false,
  loading = false,
  icon,
  iconPosition = 'left',
  fullWidth = false,
  type = 'button',
  ...props 
}) => {
  const { isMobile } = useResponsive();
  
  // Ajustar tamaño automáticamente en móvil
  const responsiveSize = isMobile && size === 'medium' ? 'small' : size;
  
  const baseClasses = 'btn';
  const variantClass = `btn-${variant}`;
  const sizeClass = `btn-${responsiveSize}`;
  const fullWidthClass = fullWidth || isMobile ? 'btn-full-width' : '';
  const loadingClass = loading ? 'btn-loading' : '';
  const disabledClass = disabled ? 'btn-disabled' : '';

  const handleClick = (e) => {
    if (disabled || loading) {
      e.preventDefault();
      return;
    }
    if (onClick) {
      onClick(e);
    }
  };

  return (
    <button 
      type={type}
      className={`${baseClasses} ${variantClass} ${sizeClass} ${fullWidthClass} ${loadingClass} ${disabledClass} ${className}`}
      onClick={handleClick}
      disabled={disabled || loading}
      {...props}
    >
      {loading && <span className="btn-spinner"></span>}
      {icon && iconPosition === 'left' && !loading && (
        <span className="btn-icon btn-icon-left">{icon}</span>
      )}
      <span className="btn-text">{children}</span>
      {icon && iconPosition === 'right' && !loading && (
        <span className="btn-icon btn-icon-right">{icon}</span>
      )}
    </button>
  );
};

export default Button;