import React, { useState } from 'react';
import ProjectCard from '../projects/ProjectCard';
import { projectsData } from '../../data/projectsData';
import Button from '../ui/Button';
import { unique, capitalize } from '../../utils/helpers';
import styled from 'styled-components';

const ProjectsContainer = styled.section`
  padding: 5rem 2rem;
  background: ${({ theme }) => theme.backgroundSecondary};
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`;

const SectionHeader = styled.div`
  text-align: center;
  margin-bottom: 3rem;
  h2 {
    font-size: 2.5rem;
    margin-bottom: 1rem;
  }
`;

const Filters = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  justify-content: center;
  margin-bottom: 2rem;
`;

const ProjectsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 2rem;
  margin-bottom: 3rem;
  
  @media (max-width: 600px) {
    grid-template-columns: 1fr;
    justify-items: center;
    align-items: center;
  }
`;

const LoadMore = styled.div`
  text-align: center;
`;

const ProjectsSection = () => {
  const [filter, setFilter] = useState('all');
  const [visibleProjects, setVisibleProjects] = useState(6);

  const categories = ['all', ...unique(projectsData.map(p => p.category || 'otros'))];

  const filteredProjects = filter === 'all' 
    ? projectsData 
    : projectsData.filter(project => 
        (project.category || 'otros').toLowerCase() === filter
      );

  return (
    <ProjectsContainer id="proyectos">
      <Container>
        <SectionHeader>
          <h2>Mis Proyectos</h2>
          <p>Soluciones reales con tecnologías modernas</p>
        </SectionHeader>

        <Filters>
          {categories.map(category => (
            <Button
              key={category}
              onClick={() => {
                setFilter(category);
                setVisibleProjects(6);
              }}
              variant={filter === category ? 'primary' : 'outline'}
              small
            >
              {category === 'all' ? 'Todos' : capitalize(category)}
            </Button>
          ))}
        </Filters>

        <ProjectsGrid>
          {filteredProjects.slice(0, visibleProjects).map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </ProjectsGrid>

        {visibleProjects < filteredProjects.length && (
          <LoadMore>
            <Button 
              onClick={() => setVisibleProjects(prev => prev + 3)}
              variant="outline"
            >
              Ver Más Proyectos
            </Button>
          </LoadMore>
        )}
      </Container>
    </ProjectsContainer>
  );
};

export default ProjectsSection;