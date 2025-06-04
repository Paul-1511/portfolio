import React from 'react';
import useResponsive from '../../hooks/useResponsive';
import SkillBadge from '../ui/SkillBadge'; // Componente para mostrar tecnologías
import Button from '../ui/Button'; // para los botones de enlace
import { capitalize, truncate } from '../../utils/helpers';

const ProjectCard = ({ project }) => {
  const { isMobile } = useResponsive();

  return (
    <div className={`project-card ${isMobile ? 'mobile-card' : ''}`}>
      <div className="project-image">
        {/* <img 
          src={project.image} 
          alt={project.title} 
          loading="lazy" // Mejora performance
        /> */}
        <div className="project-overlay">
          <div className="project-links">
            {project.demoUrl && (
              <Button
                as="a"
                href={project.demoUrl}
                target="_blank"
                rel="noopener noreferrer"
                $small={isMobile}
              >
                Demo
              </Button>
            )}
            <Button
              as="a"
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              $small={isMobile}
              variant="secondary"
            >
              GitHub
            </Button>
          </div>
        </div>
      </div>

      <div className="project-content">
        <h3>{capitalize(project.title)}</h3>
        <p className="project-description">
          {isMobile ? truncate(project.description, 100) : project.description}
        </p>
        
        <div className="project-technologies">
          {project.technologies.slice(0, isMobile ? 3 : project.technologies.length).map((tech, index) => (
            <SkillBadge key={index} skill={{ name: tech }} $small={isMobile} />
          ))}
          {isMobile && project.technologies.length > 3 && (
            <SkillBadge skill={{ name: `+${project.technologies.length - 3}` }} isMoreBadge $small={isMobile} />
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;