// src/data/skillsData.js
export const skillsData = [
  {
    category: "Frontend",
    skills: [
      { 
        name: "HTML5", 
        level: 95, 
        icon: "fab fa-html5",
        description: "Estructura semántica y accesibilidad web",
        projects: ["Portfolio", "E-commerce", "Landing Pages"]
      },
      { 
        name: "CSS3", 
        level: 90, 
        icon: "fab fa-css3-alt",
        description: "Diseño responsive, Flexbox, Grid, animaciones",
        projects: ["Portfolio", "UI Components", "Slot Machine"]
      },
      { 
        name: "JavaScript", 
        level: 88, 
        icon: "fab fa-js-square",
        description: "ES6+, DOM, eventos, programación funcional",
        projects: ["Interactive Apps", "API Integration"]
      },
      { 
        name: "React", 
        level: 85, 
        icon: "fab fa-react",
        description: "Hooks, Context, componentes funcionales, estado",
        projects: ["useRef Demo", "useCallback Demo", "useContext Demo", "useMemo Demo"]
      },
      { 
        name: "TypeScript", 
        level: 75, 
        icon: "fas fa-code",
        description: "Tipado estático, interfaces, tipos avanzados",
        projects: ["Type-safe Applications", "React with TypeScript"]
      },
      { 
        name: "Tailwind CSS", 
        level: 80, 
        icon: "fas fa-palette",
        description: "Utility-first CSS, diseño rápido y consistente",
        projects: ["Modern UI", "Component Library", "Responsive Design"]
      }
    ]
  },
  {
    category: "Backend",
    skills: [
      { 
        name: "Node.js", 
        level: 80, 
        icon: "fab fa-node-js",
        description: "Servidor JavaScript, módulos, NPM",
        projects: ["API REST", "Server Applications", "Real-time Apps"]
      },
      { 
        name: "Express.js", 
        level: 75, 
        icon: "fas fa-server",
        description: "Framework web, middleware, routing",
        projects: ["REST APIs", "Web Applications", "Authentication"]
      },
      { 
        name: "MongoDB", 
        level: 70, 
        icon: "fas fa-database",
        description: "Base de datos NoSQL, Mongoose, agregaciones",
        projects: ["E-commerce Backend", "User Management", "Data Storage"]
      },
      { 
        name: "API REST", 
        level: 85, 
        icon: "fas fa-exchange-alt",
        description: "Diseño de APIs, HTTP methods, autenticación",
        projects: ["E-commerce API", "User Authentication", "Data Services"]
      },
      { 
        name: "Firebase", 
        level: 70, 
        icon: "fas fa-fire",
        description: "Authentication, Firestore, hosting, real-time",
        projects: ["Real-time Chat", "User Auth", "Cloud Functions"]
      }
    ]
  },
  {
    category: "Herramientas & Desarrollo",
    skills: [
      { 
        name: "Git", 
        level: 90, 
        icon: "fab fa-git-alt",
        description: "Control de versiones, branching, merge, rebase",
        projects: ["Todos los proyectos", "Colaboración", "Workflow"]
      },
      { 
        name: "GitHub", 
        level: 85, 
        icon: "fab fa-github",
        description: "Repositorios, colaboración, GitHub Actions, Pages",
        projects: ["Portfolio Deployment", "Open Source", "CI/CD"]
      },
      { 
        name: "VS Code", 
        level: 95, 
        icon: "fas fa-code",
        description: "Editor, extensiones, debugging, snippets",
        projects: ["Desarrollo diario", "Configuración", "Productividad"]
      },
      { 
        name: "Figma", 
        level: 75, 
        icon: "fab fa-figma",
        description: "Diseño UI/UX, prototipos, colaboración",
        projects: ["Design Systems", "Mockups", "User Interface"]
      },
      { 
        name: "Postman", 
        level: 80, 
        icon: "fas fa-paper-plane",
        description: "Testing APIs, documentación, automatización",
        projects: ["API Testing", "Documentation", "Integration Tests"]
      }
    ]
  },
  {
    category: "Tecnologías Adicionales",
    skills: [
      { 
        name: "Vercel", 
        level: 85, 
        icon: "fas fa-cloud",
        description: "Deployment, CI/CD, serverless functions",
        projects: ["Portfolio", "React Apps", "Static Sites"]
      },
      { 
        name: "Netlify", 
        level: 80, 
        icon: "fas fa-globe",
        description: "Hosting, forms, edge functions, CDN",
        projects: ["Static Sites", "JAMstack", "Form Handling"]
      },
      { 
        name: "Responsive Design", 
        level: 90, 
        icon: "fas fa-mobile-alt",
        description: "Mobile-first, breakpoints, adaptabilidad",
        projects: ["Todos los proyectos", "Mobile Apps", "Cross-platform"]
      },
      { 
        name: "Web Performance", 
        level: 75, 
        icon: "fas fa-tachometer-alt",
        description: "Optimización, lazy loading, Core Web Vitals",
        projects: ["Performance Audit", "Speed Optimization", "SEO"]
      },
      { 
        name: "SEO", 
        level: 70, 
        icon: "fas fa-search",
        description: "Meta tags, structured data, accesibilidad",
        projects: ["Portfolio SEO", "Content Optimization", "Analytics"]
      }
    ]
  }
];

// Certificaciones y logros
export const certificationsData = [
  {
    id: 1,
    title: "React Developer",
    issuer: "FreeCodeCamp",
    date: "2025",
    icon: "fab fa-react",
    credentialUrl: "#",
    skills: ["React", "JavaScript", "Frontend"]
  },
  {
    id: 2,
    title: "JavaScript Algorithms and Data Structures",
    issuer: "FreeCodeCamp",
    date: "2024",
    icon: "fab fa-js-square",
    credentialUrl: "#",
    skills: ["JavaScript", "Algorithms", "Problem Solving"]
  },
  {
    id: 3,
    title: "Responsive Web Design",
    issuer: "FreeCodeCamp",
    date: "2023",
    icon: "fas fa-mobile-alt",
    credentialUrl: "#",
    skills: ["HTML", "CSS", "Responsive Design"]
  },
  {
    id: 4,
    title: "Frontend Development Libraries",
    issuer: "FreeCodeCamp",
    date: "2024",
    icon: "fas fa-code",
    credentialUrl: "#",
    skills: ["React", "Redux", "Sass", "Bootstrap"]
  }
];

// Estadísticas de desarrollo
export const developmentStats = {
  totalProjects: 45,
  completedHours: 500,
  technologiesUsed: 20,
  clientSatisfaction: 100,
  currentStreak: 45, // días programando consecutivos
  githubCommits: 280,
  linesOfCode: 75000
};