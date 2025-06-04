import React, { useState, useEffect } from 'react';
import { useResponsive } from '../hooks/useResponsive';
import { projectsData } from '../data/projectsData';
import Button from '../ui/Button';

const ProjectDetailsPage = ({ projectId }) => {
  const [project, setProject] = useState(null);
  const { isMobile, isTablet } = useResponsive();

  useEffect(() => {
    const foundProject = projectsData.find(p => p.id === projectId);
    setProject(foundProject);
  }, [projectId]);

  if (!project) {
    return <div className="loading">Cargando proyecto...</div>;
  }

  return (
    <div className={`project-details-page ${isMobile ? 'mobile-details' : ''}`}>
      <div className="container">
        <div className="project-hero">
          <img src={project.image} alt={project.title} className="project-main-image" />
          <div className="project-info">
            <h1 className="project-title">{project.title}</h1>
            <p className="project-description">{project.description}</p>
            <div className="project-actions">
              <Button variant="primary">
                <a href={project.demoUrl} target="_blank" rel="noopener noreferrer">
                  Ver Demo
                </a>
              </Button>
              <Button variant="secondary">
                <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                  Ver Código
                </a>
              </Button>
            </div>
          </div>
        </div>

        <div className="project-technologies">
          <h3>Tecnologías Utilizadas</h3>
          <div className="tech-grid">
            {project.technologies.map((tech, index) => (
              <span key={index} className="tech-badge">{tech}</span>
            ))}
          </div>
        </div>

        {project.features && (
          <div className="project-features">
            <h3>Características</h3>
            <ul>
              {project.features.map((feature, index) => (
                <li key={index}>{feature}</li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProjectDetailsPage;