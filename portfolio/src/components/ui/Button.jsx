import React from 'react';
import styled, { css } from 'styled-components';
import useResponsive from '../../hooks/useResponsive';

const ButtonBase = styled.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border-radius: 8px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  gap: 8px;
  border: none;
  position: relative;
  font-family: ${({ theme }) => theme.fonts?.primary || 'Inter, sans-serif'};
  box-shadow: ${({ theme }) => theme.shadows?.small || '0 2px 4px rgba(0,0,0,0.1)'};
  
  &:hover {
    transform: translateY(-1px);
    box-shadow: ${({ theme }) => theme.shadows?.medium || '0 4px 12px rgba(0,0,0,0.15)'};
  }
  
  &:active {
    transform: translateY(0);
  }

  ${({ $variant, theme }) =>
    $variant === 'primary' && css`
      background: ${theme.primary};
      color: white;
      &:hover { 
        background: ${theme.primaryDark};
      }
    `}

  ${({ $variant, theme }) =>
    $variant === 'secondary' && css`
      background: ${theme.secondary};
      color: white;
      &:hover { 
        background: ${theme.secondaryDark};
      }
    `}

  ${({ $variant, theme }) =>
    $variant === 'outline' && css`
      background: transparent;
      border: 2px solid ${theme.primary};
      color: ${theme.primary};
      &:hover { 
        background: ${theme.primary};
        color: white;
      }
    `}

  ${({ $variant, theme }) =>
    $variant === 'ghost' && css`
      background: transparent;
      color: ${theme.primary};
      &:hover { 
        background: ${theme.primaryLight}20;
        color: ${theme.primaryDark};
      }
    `}

  ${({ $variant, theme }) =>
    $variant === 'gradient' && css`
      background: linear-gradient(135deg, ${theme.primary}, ${theme.secondary});
      color: white;
      &:hover { 
        background: linear-gradient(135deg, ${theme.primaryDark}, ${theme.secondaryDark});
      }
    `}

  ${({ $variant, theme }) =>
    $variant === 'soft' && css`
      background: ${theme.primaryLight}30;
      color: ${theme.primaryDark};
      &:hover { 
        background: ${theme.primaryLight}50;
      }
    `}

  ${({ $size }) =>
    $size === 'small' && css`
      padding: 8px 16px;
      font-size: 14px;
    `}

  ${({ $size }) =>
    $size === 'medium' && css`
      padding: 12px 24px;
      font-size: 16px;
    `}

  ${({ $size }) =>
    $size === 'large' && css`
      padding: 16px 32px;
      font-size: 18px;
    `}

  ${({ $fullWidth }) =>
    $fullWidth && css`
      width: 100%;
    `}

  ${({ $loading }) =>
    $loading && css`
      opacity: 0.7;
      pointer-events: none;
    `}

  ${({ $disabled, theme }) =>
    $disabled && css`
      opacity: 0.5;
      cursor: not-allowed;
      background: ${theme.textLight || '#6c757d'};
      color: ${theme.text || '#212529'};
      &:hover {
        transform: none;
        background: ${theme.textLight || '#6c757d'};
      }
    `}
`;

const Spinner = styled.span`
  @keyframes spin {
    to { transform: rotate(360deg); }
  }
  width: 20px;
  height: 20px;
  border: 3px solid rgba(255,255,255,0.3);
  border-radius: 50%;
  border-top-color: white;
  animation: spin 1s ease-in-out infinite;
`;

const Button = ({
  children,
  variant = 'primary',
  size = 'medium',
  onClick,
  disabled = false,
  loading = false,
  icon,
  iconPosition = 'left',
  fullWidth = false,
  type = 'button',
  ...props
}) => {
  const { isMobile } = useResponsive();
  const responsiveSize = isMobile && size === 'medium' ? 'small' : size;

  const handleClick = (e) => {
    if (disabled || loading) {
      e.preventDefault();
      return;
    }
    onClick?.(e);
  };

  return (
    <ButtonBase
      type={type}
      onClick={handleClick}
      $variant={variant}
      $size={responsiveSize}
      $fullWidth={fullWidth || isMobile}
      $loading={loading}
      $disabled={disabled}
      {...props}
    >
      {loading && <Spinner />}
      {icon && iconPosition === 'left' && !loading && icon}
      {children}
      {icon && iconPosition === 'right' && !loading && icon}
    </ButtonBase>
  );
};

export default Button;