import React from 'react';
import useResponsive from '../../hooks/useResponsive';
import useInView from '../../hooks/useInView';
import { skillsData, certificationsData, developmentStats } from '../../data/skillsData';
import SkillBadge from '../ui/SkillBadge';
import Button from '../ui/Button';
import { capitalize } from '../../utils/helpers';
import styled from 'styled-components';

const SkillsContainer = styled.section`
  padding: 5rem 2rem;
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

const SkillsGrid = styled.div`
  display: grid;
  gap: 2rem;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  
  @media (max-width: 600px) {
    grid-template-columns: 1fr;
    justify-items: center;
    align-items: center;
  }
`;

const SkillCategory = styled.div`
  h3 {
    margin-bottom: 1.5rem;
    color: ${({ theme }) => theme.primary};
  }
`;

const CTA = styled.div`
  text-align: center;
  margin-top: 4rem;
`;

const Certifications = styled.div`
  margin-top: 4rem;
  h3 {
    text-align: center;
    margin-bottom: 2rem;
  }
`;

const CertsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1.5rem;
`;

const CertCard = styled.div`
  padding: 1.5rem;
  background: ${({ theme }) => theme.cardBackground};
  border-radius: 10px;
  text-align: center;
  i {
    font-size: 2rem;
    color: ${({ theme }) => theme.primary};
    margin-bottom: 1rem;
  }
  h4 {
    margin-bottom: 0.5rem;
  }
`;

const SkillsSection = () => {
  const { isMobile } = useResponsive();
  const [ref, inView] = useInView({ threshold: 0.1 });

  return (
    <SkillsContainer id="habilidades" ref={ref} className={inView ? 'fade-in-section' : 'fade-out-section'}>
      <Container>
        <SectionHeader>
          <h2><i className="fas fa-tools" style={{ marginRight: '0.5rem', color: '#007bff' }}></i>Mis Habilidades</h2>
          <p>Tecnologías que domino y uso diariamente</p>
        </SectionHeader>

        <SkillsGrid>
          {Array.isArray(skillsData) && skillsData.map((category) => (
            <SkillCategory key={category.category}>
              <h3><i className="fas fa-star" style={{ marginRight: '0.5rem' }}></i>{capitalize(category.category)}</h3>
              {Array.isArray(category.skills) && category.skills.map((skill) => (
                <SkillBadge
                  key={skill.name}
                  skill={skill}
                  showProgress
                  animate={inView}
                  $small={isMobile}
                />
              ))}
            </SkillCategory>
          ))}
        </SkillsGrid>

        {!isMobile && (
          <Certifications>
            <h3>Certificaciones</h3>
            <CertsGrid>
              {certificationsData.map(cert => (
                <CertCard key={cert.id}>
                  <i className={cert.icon}></i>
                  <h4>{cert.title}</h4>
                  <p>{cert.issuer} · {cert.date}</p>
                </CertCard>
              ))}
            </CertsGrid>
          </Certifications>
        )}

        <div className="dev-stats" style={{ margin: '3rem 0' }}>
          <h3>Estadísticas de Desarrollo</h3>
          <ul className='no-bullets'>
            <li><i className="fas fa-project-diagram" style={{ marginRight: '0.5rem', color: '#ff5da3' }}></i>Proyectos totales: {developmentStats.totalProjects}</li>
            <li><i className="fas fa-clock" style={{ marginRight: '0.5rem', color: '#ff5da3' }}></i>Horas completadas: {developmentStats.completedHours}</li>
            <li><i className="fas fa-code" style={{ marginRight: '0.5rem', color: '#ff5da3' }}></i>Tecnologías usadas: {developmentStats.technologiesUsed}</li>
                        <li><i className="fas fa-fire" style={{ marginRight: '0.5rem', color: '#ff5da3' }}></i>Racha actual: {developmentStats.currentStreak} días</li>
            <li><i className="fab fa-github" style={{ marginRight: '0.5rem', color: '#ff5da3' }}></i>Commits en GitHub: {developmentStats.githubCommits}</li>
            <li><i className="fas fa-align-left" style={{ marginRight: '0.5rem', color: '#ff5da3' }}></i>Líneas de código: {developmentStats.linesOfCode}</li>
          </ul>
        </div>
              </Container>
    </SkillsContainer>
  );
};

export default SkillsSection;