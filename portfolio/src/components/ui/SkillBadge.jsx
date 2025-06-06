import React, { useState, useEffect } from 'react';
import styled, { css } from 'styled-components';
import useResponsive from '../../hooks/useResponsive';
import { capitalize, truncate } from '../../utils/helpers';

const BadgeContainer = styled.div`
  background: ${({ theme }) => theme.cardBackground};
  border-radius: 12px;
  padding: 16px;
  box-shadow: 0 4px 6px rgba(0,0,0,0.25);
  transition: transform 0.3s ease;
  
  ${({ $clickable }) => 
    $clickable && css`
      cursor: pointer;
      &:hover {
        transform: translateY(-3px);
        box-shadow: 0 6px 12px rgba(0,0,0,0.15);
      }
    `}

  ${({ $size }) => 
    $size === 'small' && css`
      padding: 12px;
    `}
`;

const BadgeHeader = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  margin-bottom: 12px;
`;

const IconWrapper = styled.div`
  font-size: 24px;
  color: ${({ theme }) => theme.primary};
`;

const BadgeInfo = styled.div`
  flex: 1;
`;

const SkillName = styled.span`
  font-weight: 600;
  display: block;
  color: ${({ theme }) => theme.skillText?. primary || theme.text};
`;

const SkillCategory = styled.span`
  font-size: 0.8em;
  color: ${({ theme }) => theme.skillText?.secondary || theme.textLight};
`;

const SkillLevel = styled.span`
  font-weight: bold;
  color: ${({ theme }) => theme.scrolltheme?.accent || theme.scrolltheme};
`;

const ProgressBar = styled.div`
  height: 6px;
  background: ${({ theme }) => theme.progressBar?.background || '#e0e0e0'};
  border-radius: 3px;
  overflow: hidden;
  margin-top: 8px;
`;

const ProgressFill = styled.div`
  height: 100%;
  background: ${({ theme }) => theme.scrolltheme};
  border-radius: 3px;
  transition: width 1.5s ease-out;
`;

const SkillBadge = ({ 
  skill, 
  showProgress = false, 
  size = 'medium',
  onClick,
  $small
}) => {
  // Defensive: handle undefined or string skill
  if (!skill || typeof skill !== 'object') {
    return (
      <BadgeContainer $size={$small ? 'small' : size}>
        <BadgeHeader>
          <BadgeInfo>
            <SkillName>{typeof skill === 'string' ? skill : ''}</SkillName>
          </BadgeInfo>
        </BadgeHeader>
      </BadgeContainer>
    );
  }

  const [currentProgress, setCurrentProgress] = useState(0);
  const { isMobile } = useResponsive();
  const responsiveSize = $small || isMobile ? 'small' : size;

  useEffect(() => {
    if (showProgress && skill.level !== undefined) {
      const timer = setTimeout(() => {
        setCurrentProgress(skill.level || 0);
      }, 200);
      return () => clearTimeout(timer);
    }
  }, [skill.level, showProgress]);

  return (
    <BadgeContainer 
      $clickable={!!onClick} 
      $size={responsiveSize}
      onClick={() => onClick?.(skill)}
    >
      <BadgeHeader>
        {skill.icon && <IconWrapper><i className={skill.icon} /></IconWrapper>}
        <BadgeInfo>
          <SkillName>{capitalize(skill.name)}</SkillName>
          {skill.category && !isMobile && <SkillCategory>{capitalize(skill.category)}</SkillCategory>}
        </BadgeInfo>
        {showProgress && skill.level !== undefined && <SkillLevel>{skill.level}%</SkillLevel>}
      </BadgeHeader>
      
      {showProgress && skill.level !== undefined && (
        <ProgressBar>
          <ProgressFill style={{ width: `${currentProgress}%` }} />
        </ProgressBar>
      )}
    </BadgeContainer>
  );
};

export default SkillBadge;