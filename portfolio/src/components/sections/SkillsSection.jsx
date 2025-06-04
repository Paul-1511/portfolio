import React, { useState, useEffect } from 'react';
import './SkillsSection.css';
import { useResponsive } from '../hooks/useResponsive';

const SkillsSection = () => {
  const [animateProgress, setAnimateProgress] = useState(false);
  const { isMobile, isTablet } = useResponsive();

  const skillsData = [
    {
      category: "Frontend",
      skills: [
        { name: "HTML5", level: 95, icon: "fab fa-html5" },
        { name: "CSS3", level: 90, icon: "fab fa-css3-alt" },
        { name: "JavaScript", level: 88, icon: "fab fa-js-square" },
        { name: "React", level: 85, icon: "fab fa-react" },
        { name: "TypeScript", level: 75, icon: "fas fa-code" },
        { name: "Tailwind CSS", level: 80, icon: "fas fa-palette" }
      ]
    },
    {
      category: "Backend",
      skills: [
        { name: "Node.js", level: 80, icon: "fab fa-node-js" },
        { name: "Express", level: 75, icon: "fas fa-server" },
        { name: "MongoDB", level: 70, icon: "fas fa-database" },
        { name: "API REST", level: 85, icon: "fas fa-exchange-alt" },
        { name: "Firebase", level: 70, icon: "fas fa-fire" }
      ]
    },
    {
      category: "Herramientas",
      skills: [
        { name: "Git", level: 90, icon: "fab fa-git-alt" },
        { name: "GitHub", level: 85, icon: "fab fa-github" },
        { name: "VS Code", level: 95, icon: "fas fa-code" },
        { name: "Figma", level: 75, icon: "fab fa-figma" },
        { name: "Postman", level: 80, icon: "fas fa-paper-plane" }
      ]
    }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setAnimateProgress(true);
          }
        });
      },
      { threshold: 0.5 }
    );

    const section = document.getElementById('habilidades');
    if (section) {
      observer.observe(section);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section className="skills-section" id="habilidades">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Mis Habilidades</h2>
          <p className="section-description">
            Tecnologías y herramientas que domino para crear soluciones web modernas y eficientes.
          </p>
        </div>

        <div className="skills-content">
          {skillsData.map((category, categoryIndex) => (
            <div key={category.category} className="skills-category">
              <h3 className="category-title">{category.category}</h3>
              <div className={`skills-grid ${isMobile ? 'mobile-grid' : isTablet ? 'tablet-grid' : ''}`}>
                {category.skills.map((skill, skillIndex) => (
                  <div 
                    key={skill.name} 
                    className="skill-item"
                    style={{ 
                      animationDelay: `${(categoryIndex * category.skills.length + skillIndex) * 0.1}s` 
                    }}
                  >
                    <div className="skill-header">
                      <div className="skill-info">
                        <i className={skill.icon}></i>
                        <span className="skill-name">{skill.name}</span>
                      </div>
                      <span className="skill-percentage">{skill.level}%</span>
                    </div>
                    <div className="skill-progress">
                      <div 
                        className="skill-progress-bar"
                        style={{ 
                          width: animateProgress ? `${skill.level}%` : '0%',
                          transition: 'width 1s ease-in-out'
                        }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Certificaciones - Ocultar en móvil si es necesario */}
        {!isMobile && (
          <div className="certifications">
            <h3 className="certifications-title">Certificaciones</h3>
            <div className="certifications-grid">
              <div className="certification-item">
                <div className="cert-icon">
                  <i className="fab fa-react"></i>
                </div>
                <div className="cert-info">
                  <h4>React Developer</h4>
                  <p>FreeCodeCamp - 2024</p>
                </div>
              </div>
              <div className="certification-item">
                <div className="cert-icon">
                  <i className="fab fa-js-square"></i>
                </div>
                <div className="cert-info">
                  <h4>JavaScript Algorithms</h4>
                  <p>FreeCodeCamp - 2024</p>
                </div>
              </div>
              <div className="certification-item">
                <div className="cert-icon">
                  <i className="fas fa-mobile-alt"></i>
                </div>
                <div className="cert-info">
                  <h4>Responsive Web Design</h4>
                  <p>FreeCodeCamp - 2023</p>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Call to Action */}
        <div className="skills-cta">
          <h3>¿Interesado en trabajar juntos?</h3>
          <p>Estoy disponible para proyectos freelance y oportunidades laborales.</p>
          <button className="btn btn-primary">Contáctame</button>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;