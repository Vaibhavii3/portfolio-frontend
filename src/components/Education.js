// components/Education.js
import React from 'react';

const Education = () => {
  const educationDetails = [
    { degree: 'B.Tech in Computer Science', institution: 'XYZ University', year: '2025' },
    { degree: 'High School', institution: 'ABC School', year: '2021' },
  ]; // Customize your education details here

  return (
    <div className="education">
      <h2>Education</h2>
      <ul>
        {educationDetails.map((edu, index) => (
          <li key={index}>
            <strong>{edu.degree}</strong> - {edu.institution} ({edu.year})
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Education;
