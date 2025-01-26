
import React, { useState } from 'react';
import '../style/Project.css';

const projects = {
  'Full Stack': [
    {
      title: 'ThinkSpace',
      description: 'Responsive personal portfolio showcasing skills and projects.',
      technologies: ['React.js', 'CSS', 'Node.js', 'Express.js', 'MongoDB', 'OpenAI', 'Responsive Design'],
      github: 'https://github.com/yourusername/portfolio',
      live: 'https://yourportfolio.com',
      image: '/images/portfolio-preview.png'
    },
  ],
  'JavaScript - Game': [
    {
      title: 'Slot - Machine Game',
      description: 'Responsive personal portfolio showcasing skills and projects.',
      technologies: ['React.js', 'Tailwind CSS', 'Responsive Design'],
      github: 'https://github.com/Vaibhavii3/Slot-Machine-Game.git',
      live: 'https://yourportfolio.com',
      image: '/images/portfolio-preview.png'
    },
    {
      title: 'Hangman',
      description: 'Comprehensive admin dashboard for product management.',
      technologies: ['React.js', 'Redux', 'Node.js', 'MongoDB'],
      github: 'https://github.com/yourusername/ecommerce-dashboard',
      live: 'https://your-ecommerce-dashboard.com',
      image: '/images/ecommerce-dashboard.png'
    },
    {
      title: 'Number Game',
      description: 'Comprehensive admin dashboard for product management.',
      technologies: ['React.js', 'Redux', 'Node.js', 'MongoDB'],
      github: 'https://github.com/yourusername/ecommerce-dashboard',
      live: 'https://your-ecommerce-dashboard.com',
      image: '/images/ecommerce-dashboard.png'
    }
  ],
  'ReactJs': [
    {
      title: 'TODO App',
      description: 'Home automation system with sensor integration.',
      technologies: ['React.js'],
      github: 'https://github.com/yourusername/smart-home-iot',
      live: null,
      image: '/images/iot-project.png'
    },
    {
      title: 'Weather Map',
      description: 'Home automation system with sensor integration.',
      technologies: ['React.js'],
      github: 'https://github.com/Vaibhavii3/weather-map.git',
      live: null,
      image: '/images/iot-project.png'
    },
    {
      title: 'Blog Website',
      description: 'Home automation system with sensor integration.',
      technologies: ['React.js', 'Sanity.js'],
      github: 'https://github.com/Vaibhavii3/My-Blog-Website.git',
      live: null,
      image: '/images/iot-project.png'
    },
  ],
  'Python' :[
    {
      title: 'Personal-Intelligence Voice Assistance',
      description: 'Personal-Intelligence Voice Assistance.',
      technologies: ['JavaScript', 'OpenWeatherMap API', 'Geolocation'],
      github: 'https://github.com/Vaibhavii3/Personal-Intelligence-voice-assistance.git',
      live: null,
      image: '/images/ai.png'
    },
    {
      title: 'Customer churm Analysis and classification',
      description: 'Personal-Intelligence Voice Assistance.',
      technologies: ['JavaScript', 'OpenWeatherMap API', 'Geolocation'],
      github: 'https://github.com/Vaibhavii3/Customer-Churn-Analysis-and-Classification.git',
      live: null,
      image: '/images/ai.png'
    },
  ],
  'Data Visualition' : [
    {
      title: 'HR',
      description: '',
      technologies: ['Power BI'],
      github: '',
      live: null,
      image: '/'
    },
    {
      title: 'Netflix',
      description: '',
      technologies: ['Power BI'],
      github: '',
      live: null,
      image: '/'
    },
    {
      title: 'Space Mission',
      description: '',
      technologies: ['Power BI'],
      github: '',
      live: null,
      image: '/'
    },
    {
      title: 'Parental leave',
      description: '',
      technologies: ['Power BI'],
      github: '',
      live: null,
      image: '/'
    },
  ],
  'Animation' : [
    {
      title: '3D Solar System',
      description: '',
      technologies: ['React-Three-Fiber'],
      github: '',
      live: null,
      image: '/'
    },
  ]
};

const ProjectPage = () => {
    const [activeCategory, setActiveCategory] = useState(Object.keys(projects)[0]);

  return (
    <div className="projects-container">
      <div className="category-toggle">
        {Object.keys(projects).map((category) => (
          <button
            key={category}
            className={`category-btn ${activeCategory === category ? 'active' : ''}`}
            onClick={() => setActiveCategory(category)}
          >
            {category}
          </button>
        ))}
      </div>

      <div className="projects-grid">
        {projects[activeCategory].map((project) => (
          <div key={project.title} className="project-card">
            {project.image && (
              <div className="project-image-container">
                <img 
                  src={project.image} 
                  alt={`${project.title} preview`} 
                  className="project-image"
                />
              </div>
            )}
            <h3>{project.title}</h3>
            <p className="description">{project.description}</p>
            <div className="technologies">
              {project.technologies.map((tech) => (
                <span key={tech} className="tech-tag">{tech}</span>
              ))}
            </div>
            <div className="project-links">
              <a 
                href={project.github} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="github-link"
              >
                GitHub
              </a>
              {project.live && (
                <a 
                  href={project.live} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="live-link"
                >
                  Live Demo
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProjectPage;