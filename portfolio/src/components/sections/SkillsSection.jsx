import React, { useEffect, useState } from 'react';
import useResponsive from '../../hooks/useResponsive';
import { skillsData } from '../../data/skillsData';
import SkillBadge from '../ui/SkillBadge';
import Button from '../ui/Button';
import { capitalize } from '../../utils/helpers';
import styled from 'styled-components';

const SkillsContainer = styled.section`
  padding: 5rem 2rem;
  background: ${({ theme }) => theme.background};
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
  const [animate, setAnimate] = useState(false);
  const { isMobile } = useResponsive();

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => entry.isIntersecting && setAnimate(true),
      { threshold: 0.1 }
    );
    observer.observe(document.getElementById('habilidades'));
    return () => observer.disconnect();
  }, []);

  return (
    <SkillsContainer id="habilidades">
      <Container>
        <SectionHeader>
          <h2>Mis Habilidades</h2>
          <p>Tecnologías que domino y uso diariamente</p>
        </SectionHeader>

        <SkillsGrid>
          {Array.isArray(skillsData) && skillsData.map((category) => (
            <SkillCategory key={category.category}>
              <h3>{capitalize(category.category)}</h3>
              {Array.isArray(category.skills) && category.skills.map((skill) => (
                <SkillBadge
                  key={skill.name}
                  skill={skill}
                  showProgress
                  animate={animate}
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
              <CertCard>
                <i className="fab fa-react"></i>
                <h4>React Avanzado</h4>
                <p>FreeCodeCamp · 2024</p>
              </CertCard>
              {/* Agrega más certificaciones aquí */}
            </CertsGrid>
          </Certifications>
        )}

        <CTA>
          <Button as="a" href="#contacto" variant="primary">
            ¿Trabajamos juntos?
          </Button>
        </CTA>
      </Container>
    </SkillsContainer>
  );
};

export default SkillsSection;