// components/Certification.js
import React from 'react';

const Certification = () => {
  const certifications = [
    { name: 'React Certification', provider: 'Coursera', year: '2023' },
    { name: 'JavaScript Advanced', provider: 'Udemy', year: '2022' },
  ]; // Customize your certifications here

  return (
    <div className="certification">
      <h2>Certifications</h2>
      <ul>
        {certifications.map((cert, index) => (
          <li key={index}>
            <strong>{cert.name}</strong> - {cert.provider} ({cert.year})
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Certification;
