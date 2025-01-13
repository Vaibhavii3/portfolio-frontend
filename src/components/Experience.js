// components/Experience.js
import React from 'react';

const Experience = () => {
  const experienceDetails = [
    {
      company: 'ABC Corp',
      role: 'Frontend Developer',
      timeline: '2023 - Present',
      description: 'Developed responsive user interfaces using React.',
    },
    {
      company: 'XYZ Ltd.',
      role: 'Intern',
      timeline: '2022 - 2023',
      description: 'Worked on web development projects and contributed to frontend designs.',
    },
  ]; // Customize your experience details here

  return (
    <div className="experience">
      <h2>Experience</h2>
      <ul>
        {experienceDetails.map((exp, index) => (
          <li key={index}>
            <h3>{exp.role} at {exp.company}</h3>
            <p>{exp.timeline}</p>
            <p>{exp.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Experience;
