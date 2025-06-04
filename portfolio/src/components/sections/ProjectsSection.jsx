// src/sections/ProjectsSection.jsx
import React, { useState } from 'react';
import ProjectCard from '../components/ProjectCard';
import { projectsData } from '../data/projectsData';
import './ProjectsSection.css';

const ProjectsSection = () => {
  const [filter, setFilter] = useState('all');
  const [visibleProjects, setVisibleProjects] = useState(6);

  // Filtrar proyectos por categoría
  const filteredProjects = filter === 'all' 
    ? projectsData 
    : projectsData.filter(project => 
        project.category && project.category.toLowerCase() === filter
      );

  // Obtener categorías únicas
  const categories = ['all', ...new Set(projectsData.map(p => p.category).filter(Boolean))];

  const loadMore = () => {
    setVisibleProjects(prev => prev + 3);
  };

  return (
    <section className="projects-section" id="proyectos">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Mis Proyectos</h2>
          <p className="section-description">
            Aquí puedes ver algunos de los proyectos que he desarrollado, 
            demostrando mis habilidades en React, JavaScript y desarrollo web moderno.
          </p>
        </div>

        {/* Filtros */}
        <div className="projects-filters">
          {categories.map(category => (
            <button
              key={category}
              className={`filter-btn ${filter === category ? 'active' : ''}`}
              onClick={() => setFilter(category)}
            >
              {category === 'all' ? 'Todos' : category}
            </button>
          ))}
        </div>

        {/* Grid de proyectos */}
        <div className="projects-grid">
          {filteredProjects.slice(0, visibleProjects).map((project, index) => (
            <div 
              key={project.id} 
              className="project-item"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <ProjectCard project={project} />
            </div>
          ))}
        </div>

        {/* Botón cargar más */}
        {visibleProjects < filteredProjects.length && (
          <div className="projects-load-more">
            <button className="btn btn-outline" onClick={loadMore}>
              Ver Más Proyectos
            </button>
          </div>
        )}


      </div>
    </section>
  );
};

export default ProjectsSection;