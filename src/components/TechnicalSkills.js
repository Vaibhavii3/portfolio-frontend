// components/TechnicalSkills.js
import React from 'react';

const TechnicalSkills = () => {
  const skills = ['HTML', 'CSS', 'JavaScript', 'React', 'Node.js']; // Add your skills here

  return (
    <div className="technical-skills">
      <h2>Technical Skills</h2>
      <ul>
        {skills.map((skill, index) => (
          <li key={index}>{skill}</li>
        ))}
      </ul>
    </div>
  );
};

export default TechnicalSkills;
