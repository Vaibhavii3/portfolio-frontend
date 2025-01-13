import React from 'react';
import ProfileSection from './components/ProfileSection';
import SocialHandles from './components/SocialHandles';
import TechnicalSkills from './components/TechnicalSkills';
import Education from './components/Education';
import ProjectSection from './components/ProjectSection';
import Experience from './components/Experience';
import Certification from './components/Certification';
import ContactSection from './components/ContactSection';
import './App.css';

function App() {
  return (
    <div className="app">
      <div className="profile-section">
        <ProfileSection />
      </div>
      <div className="details-section">
        <SocialHandles />
        <TechnicalSkills />
        <Education />
        <ProjectSection />
        <Experience />
        <Certification />
        <ContactSection />
      </div>
    </div>
  );
}

export default App;
