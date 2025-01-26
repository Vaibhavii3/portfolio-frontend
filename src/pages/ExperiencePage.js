import React from 'react';
import "../style/ExperiencePage.css";

const experiences = [
  {
    company: 'Business Web Solutions',
    role: 'Full-stack Developer Intern',
    period: 'May 2024 - Aug 2024',
    description: 'Developed responsive web applications using React and modern frontend technologies.',
    skills: ['React.js'],
    location: 'New Delhi (Remote)',
    x: 200,
    y: 150
  },
  {
    company: 'Toshal Infotech Pvt. Ltd.',
    role: 'Web Designer',
    period: 'Jan 2024 - Apr 2024',
    description: 'Designed and developed visually appealing and user-friendly web interfaces, focusing on creating seamless user experiences and implementing responsive design principles.',
    skills: ['HTML', 'CSS', 'Bootstrap', 'SASS', 'JavaScript', 'Responsive Web Design'],
    location: 'Surat, Gujarat, India.',
    x: 200,
    y: 150
  },
  {
    company: 'Edunet Foundation',
    role: 'Intern',
    period: 'Jul 2023 - Aug 2023',
    description: 'Engaged in hands-on project work exploring IoT technologies, data visualization, and cybersecurity techniques, developing practical skills in emerging tech domains.',
    skills: ['Internet of Things (IoT)', 'Kali Linux', 'SAP Analytics Cloud', 'Cybersecurity', 'Sensors', 'Data Visualisation', 'Microsoft Power BI'],
    location: 'Bardoli, Gujarat, India.',
    x: 300,
    y: 250
  },
  {
    company: 'Sparks To Ideas',
    role: 'Python Intern',
    period: 'Jun 2023 - jun 2023',
    description: 'Participated in a focused python programming internship, working on basic development projects and learning core programming concepts and problem-solving techniques.',
    skills: ['Python Programming', 'Basic Algorithms', 'Problem Solving', 'Code Logic'],
    location: 'Ahmedabad (Remote)',
    x: 250,
    y: 350
  }
];

const ExperiencePage = () => {
  return (
    <div className="experience-container">
      <svg className="experience-svg">

        {experiences.map((exp, i) => {
          const nextExp = experiences[i + 1];
          return nextExp ? (
            <line
              key={`connection-${exp.company}`}
              x1={exp.x}
              y1={exp.y}
              x2={nextExp.x}
              y2={nextExp.y}
              stroke="rgba(255, 255, 255, 0.2)"
              strokeWidth="1"
            />
          ) : null;
        })}
      </svg>

      <div className="experience-details">
        {experiences.map((exp) => (
          <div key={exp.company} className="experience-card">
            <h3>{exp.role}</h3>
            <h4>{exp.company}</h4>
            <p className="period">{exp.period}</p>
            <p className="description">{exp.description}</p>
            <div className="skills">
              {exp.skills.map((skill) => (
                <span key={skill} className="skill-tag">{skill}</span>
              ))}
            </div>
            <p className="location">{exp.location}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ExperiencePage;