import React from 'react';
import { useResponsive } from '../hooks/useResponsive';
import HeroSection from '../sections/HeroSection';
import ProjectsSection from '../sections/ProjectsSection';
import SkillsSection from '../sections/SkillsSection';

const HomePage = () => {
  const { isMobile } = useResponsive();

  return (
    <div className={`home-page ${isMobile ? 'mobile-home' : ''}`}>
      <HeroSection />
      <ProjectsSection />
      <SkillsSection />
    </div>
  );
};

export default HomePage;