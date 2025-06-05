import React from 'react';
import styled, { useTheme } from 'styled-components';
import useResponsive from '../../hooks/useResponsive';
import SkillBadge from '../ui/SkillBadge';
import Button from '../ui/Button';
import { capitalize, truncate } from '../../utils/helpers';

const Card = styled.div`
  background: ${({ theme }) => theme.backgroundSecondary};
  color: ${({ theme }) => theme.text};
  border-radius: 1rem;
  box-shadow: ${({ theme }) => theme.shadows.medium};
  overflow: hidden;
  transition: all 0.3s ease;
  height: 100%;
  display: flex;
  flex-direction: column;
  &:hover {
    transform: translateY(-5px);
    box-shadow: ${({ theme }) => theme.shadows.large};
  }
`;

const ImageWrapper = styled.div`
  position: relative;
  height: 200px;
  overflow: hidden;
  background: ${({ theme }) => theme.backgroundTertiary};
`;

const ProjectImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.3s ease;
  display: block;
`;

const Overlay = styled.div`
  position: absolute;
  inset: 0;
  background-color: ${({ theme }) =>
    theme.background.includes('linear-gradient')
      ? 'rgba(255, 182, 193, 0.7)'
      : 'rgba(33, 28, 132, 0.6)'};
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  opacity: 0;
  transition: opacity 0.3s ease;
  ${ImageWrapper}:hover & {
    opacity: 1;
  }
`;

const Content = styled.div`
  padding: 1.5rem;
  flex-grow: 1;
  display: flex;
  flex-direction: column;
`;

const Title = styled.h3`
  margin: 0 0 0.5rem;
  font-family: ${({ theme }) => theme.fonts.primary};
  font-size: 1.25rem;
  color: ${({ theme }) => theme.textPrimary};
`;

const Description = styled.p`
  color: ${({ theme }) => theme.textLight};
  font-size: 0.95rem;
  margin: 0 0 1rem;
  line-height: 1.5;
`;

const TechList = styled.div`
  margin-top: auto;
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
`;

const ProjectCard = ({ project }) => {
  const { isMobile } = useResponsive();
  const theme = useTheme();

  // Función para normalizar los datos de tecnología
  const normalizeTech = (tech) => {
    if (typeof tech === 'string') {
      return { name: tech };
    }
    return tech || { name: '' };
  };

  return (
    <Card>
      <ImageWrapper>
        <ProjectImage 
          src={project.image}
          alt={`Captura del proyecto ${project.title}`}
          loading="lazy"
          onError={(e) => {
            e.target.style.display = 'none';
          }}
        />
        <Overlay>
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
            $variant="secondary"
          >
            GitHub
          </Button>
        </Overlay>
      </ImageWrapper>

      <Content>
        <Title>{capitalize(project.title)}</Title>
        <Description>
          {isMobile ? truncate(project.description, 100) : project.description}
        </Description>
        <TechList>
          {project.technologies
            .slice(0, isMobile ? 3 : project.technologies.length)
            .map((tech, index) => (
              <SkillBadge 
                key={index} 
                skill={normalizeTech(tech)} 
                $small={isMobile}
              />
            ))}
          {isMobile && project.technologies.length > 3 && (
            <SkillBadge 
              skill={{ name: "+ más" }} 
              $isMoreBadge 
              $small={isMobile} 
            />
          )}
        </TechList>
      </Content>
    </Card>
  );
};

export default ProjectCard;