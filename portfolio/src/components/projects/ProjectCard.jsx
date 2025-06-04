import React from 'react';

import { useResponsive } from '../hooks/useResponsive';

const ProjectCard = ({ project }) => {
  const { isMobile } = useResponsive();

  return (
    <div className={`project-card ${isMobile ? 'mobile-card' : ''}`}>
      <div className="project-image">
        <img src={project.image} alt={project.title} />
        <div className="project-overlay">
          <div className="project-links">
            <a href={project.demoUrl} target="_blank" rel="noopener noreferrer">
              Demo
            </a>
            <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
              GitHub
            </a>
          </div>
        </div>
      </div>

      <div className="project-content">
        <h3>{project.title}</h3>
        <p className="project-description">
          {isMobile ? project.description.slice(0, 100) + '...' : project.description}
        </p>
        
        <div className="project-technologies">
          {project.technologies.slice(0, isMobile ? 3 : project.technologies.length).map((tech, index) => (
            <span key={index} className="tech-tag">
              {tech}
            </span>
          ))}
          {isMobile && project.technologies.length > 3 && (
            <span className="tech-tag more">+{project.technologies.length - 3}</span>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;