import React from 'react';
import '../style/EducationPage.css';

const resumeData = {
  personalInfo: {
    name: 'Your Name',
    title: 'Full Stack Developer',
    contact: {
      email: 'your.email@example.com',
      phone: '+91 1234567890',
      location: 'Gujarat, India'
    }
  },
  education: [
    {
      degree: 'Bachelor of Engineering in Computer Science',
      institution: 'XYZ Engineering College',
      period: '2020 - 2024',
      details: ['CGPA: 8.5/10', 'Major Projects: Web Development, IoT Systems']
    }
  ],
  skills: {
    technical: [
      'React.js', 'Node.js', 'JavaScript', 'Python', 
      'MongoDB', 'HTML/CSS', 'Git', 'Responsive Design'
    ],
    soft: [
      'Problem Solving', 'Team Collaboration', 
      'Quick Learning', 'Communication'
    ]
  },
  experience: [
    {
      company: 'Business Web Solutions',
      role: 'Full-stack Developer Intern',
      period: 'May 2024 - Aug 2024',
      responsibilities: [
        'Developed responsive web applications',
        'Collaborated with cross-functional teams',
        'Implemented frontend and backend features'
      ]
    }
  ],
  certifications: [
    'React Developer Certification',
    'Python Programming Advanced',
    'Web Development Bootcamp'
  ]
};

const EducationPage = () => {
  return (
    <div className="resume-container">
      <div className="resume-header">
        <h1>{resumeData.personalInfo.name}</h1>
        <h2>{resumeData.personalInfo.title}</h2>
        <div className="contact-info">
          <span>{resumeData.personalInfo.contact.email}</span>
          <span>{resumeData.personalInfo.contact.phone}</span>
          <span>{resumeData.personalInfo.contact.location}</span>
        </div>
      </div>

      <div className="resume-sections">
        <section className="education">
          <h3>Education</h3>
          {resumeData.education.map((edu, index) => (
            <div key={index} className="education-item">
              <h4>{edu.degree}</h4>
              <p>{edu.institution} | {edu.period}</p>
              <ul>
                {edu.details.map((detail, detailIndex) => (
                  <li key={detailIndex}>{detail}</li>
                ))}
              </ul>
            </div>
          ))}
        </section>

        <section className="skills">
          <h3>Skills</h3>
          <div className="skill-categories">
            <div className="technical-skills">
              <h4>Technical Skills</h4>
              <div className="skill-tags">
                {resumeData.skills.technical.map((skill, index) => (
                  <span key={index} className="skill-tag">{skill}</span>
                ))}
              </div>
            </div>
            <div className="soft-skills">
              <h4>Soft Skills</h4>
              <div className="skill-tags">
                {resumeData.skills.soft.map((skill, index) => (
                  <span key={index} className="skill-tag">{skill}</span>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="experience">
          <h3>Experience</h3>
          {resumeData.experience.map((exp, index) => (
            <div key={index} className="experience-item">
              <h4>{exp.role} | {exp.company}</h4>
              <p className="period">{exp.period}</p>
              <ul>
                {exp.responsibilities.map((resp, respIndex) => (
                  <li key={respIndex}>{resp}</li>
                ))}
              </ul>
            </div>
          ))}
        </section>

        <section className="certifications">
          <h3>Certifications</h3>
          <div className="certification-tags">
            {resumeData.certifications.map((cert, index) => (
              <span key={index} className="certification-tag">{cert}</span>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default EducationPage;