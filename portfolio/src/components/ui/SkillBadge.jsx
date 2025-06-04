import React, { useState, useEffect } from 'react';
import './SkillBadge.css';
import { useResponsive } from '../hooks/useResponsive';

const SkillBadge = ({ 
  skill, 
  showProgress = false, 
  variant = 'default',
  size = 'medium',
  animated = true,
  onClick,
  className = '' 
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const [currentProgress, setCurrentProgress] = useState(0);
  const { isMobile } = useResponsive();

  // Ajustar tamaño automáticamente en móvil
  const responsiveSize = isMobile ? 'small' : size;

  useEffect(() => {
    if (showProgress && animated && isVisible) {
      const timer = setTimeout(() => {
        setCurrentProgress(skill.level || 0);
      }, 200);
      return () => clearTimeout(timer);
    }
  }, [isVisible, skill.level, showProgress, animated]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const element = document.querySelector(`[data-skill="${skill.name}"]`);
    if (element) {
      observer.observe(element);
    }

    return () => observer.disconnect();
  }, [skill.name]);

  const baseClasses = 'skill-badge';
  const variantClass = `skill-badge-${variant}`;
  const clickableClass = onClick ? 'skill-badge-clickable' : '';

  const handleClick = () => {
    if (onClick) {
      onClick(skill);
    }
  };

  return (
    <div 
      className={`${baseClasses} ${variantClass} skill-badge-${responsiveSize} ${clickableClass} ${className}`}
      onClick={handleClick}
      data-skill={skill.name}
    >
      <div className="skill-badge-header">
        <div className="skill-badge-icon-wrapper">
          {skill.icon && <i className={skill.icon}></i>}
        </div>
        <div className="skill-badge-info">
          <span className="skill-badge-name">{skill.name}</span>
          {skill.category && !isMobile && (
            <span className="skill-badge-category">{skill.category}</span>
          )}
        </div>
        {showProgress && (
          <span className="skill-badge-level">{skill.level}%</span>
        )}
      </div>
      
      {showProgress && (
        <div className="skill-badge-progress">
          <div 
            className="skill-badge-progress-bar"
            style={{ 
              width: animated ? `${currentProgress}%` : `${skill.level}%`,
              transition: animated ? 'width 1.5s ease-out' : 'none'
            }}
          ></div>
        </div>
      )}

      {skill.description && !isMobile && (
        <div className="skill-badge-description">
          <p>{skill.description}</p>
        </div>
      )}

      {skill.projects && skill.projects.length > 0 && (
        <div className="skill-badge-projects">
          <span className="skill-badge-projects-count">
            {skill.projects.length} proyecto{skill.projects.length !== 1 ? 's' : ''}
          </span>
        </div>
      )}
    </div>
  );
};

export default SkillBadge;