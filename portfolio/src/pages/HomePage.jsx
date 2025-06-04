import React from 'react';
import useResponsive from '../hooks/useResponsive';
import HeroSection from '../components/sections/HeroSection';
import ProjectsSection from '../components/sections/ProjectsSection';
import SkillsSection from '../components/sections/SkillsSection';

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