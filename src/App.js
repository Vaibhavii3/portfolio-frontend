import React from 'react';
import { Routes, Route } from 'react-router-dom';
import ProfileSection from './components/ProfileSection';
import SocialHandles from './components/SocialHandles';
import TechnicalSkills from './components/TechnicalSkills';
import Education from './components/Education';
import ProjectSection from './components/ProjectSection';
import Experience from './components/Experience';
import ContactSection from './components/ContactSection';
import './App.css';
import { motion } from 'framer-motion';

function App() {

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { 
        staggerChildren: 0.2,
        when: "beforeChildren",
      },
    },
  };

  const hoverEffect = {
    scale: 1.02,
    boxShadow: "0 8px 20px rgba(0, 0, 0, 0.3)", // Enhanced shadow
    backgroundColor: "rgba(255, 255, 255, 0.3)", // Change background color on hover
    transition: {
      type: "spring",
      stiffness: 150,
      damping: 20,
    },
  };

  const profileVariants = {
    initial: { scale: 1, opacity: 1, x: 0, y: 0 },
    animate: { scale: 0.8, opacity: 1,
      transition: { 
        type: "spring",
        stiffness: 80,
        damping: 12,
        duration: 0.5 } },
  };

  // Specific directional variants for each section
  const skillsVariants = {
    hidden: { opacity: 0, scale: 0.8, y:100, x:100 }, // Skills coming from the left
    visible: { 
      opacity: 1, 
      scale: 1,
      y: 0,
      x: 0,
      transition: { 
        type: "spring",
        stiffness: 80,
        damping: 8,
      },
    },
  };

  const socialVariants = {
    hidden: { opacity: 0, scale: 0.8, y: 100 }, // Social coming from the bottom
    visible: { 
      opacity: 1, 
      scale: 1,
      y: 0,
      transition: { 
        type: "spring",
        stiffness: 80,
        damping: 8,
      },
    },
  };

  const experienceVariants = {
    hidden: { opacity: 0, scale: 0.8, x: 100 }, // Experience coming from the right
    visible: { 
      opacity: 1, 
      scale: 1,
      x: 0,
      transition: { 
        type: "spring",
        stiffness: 80,
        damping: 8,
      },
    },
  };

  const projectVariants = {
    hidden: { opacity: 0, scale: 0.8, x: -100 }, // project coming from the left
    visible: { 
      opacity: 1, 
      scale: 1,
      x: 0,
      transition: { 
        type: "spring",
        stiffness: 80,
        damping: 8,
      },
    },
  };

  const educationVariants = {
    hidden: { opacity: 0, scale: 0.8, x: -100 }, // education coming from the left
    visible: { 
      opacity: 1, 
      scale: 1,
      x: 0,
      transition: { 
        type: "spring",
        stiffness: 80,
        damping: 8,
      },
    },
  };

  const contactVariants = {
    hidden: { opacity: 0, scale: 0.8, y: -100 }, // Social coming from the bottom
    visible: { 
      opacity: 1, 
      scale: 1,
      y: 0,
      transition: { 
        type: "spring",
        stiffness: 80,
        damping: 8,
      },
    },
  };

  return (
    <div className="app">
      <motion.div
        className="grid-container"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.div className="grid-item skills" variants={skillsVariants} whileHover={hoverEffect}>
          <TechnicalSkills />
        </motion.div>

        <motion.div className="grid-item social" variants={socialVariants} whileHover={hoverEffect}>
          <SocialHandles />
        </motion.div>

        <motion.div className="grid-item experience" variants={experienceVariants} whileHover={hoverEffect}>
          <Experience />
        </motion.div>

        <motion.div
          className="grid-item profile"
          variants={profileVariants}
          initial="initial"
          animate="animate"
          whileHover={hoverEffect}
        >
          <ProfileSection />
        </motion.div>

        <motion.div className="grid-item projects" variants={projectVariants} whileHover={hoverEffect}>
          <ProjectSection />
        </motion.div>

        <motion.div className="grid-item education" variants={educationVariants} whileHover={hoverEffect}>
          <Education />
        </motion.div>

        <motion.div className="grid-item contact" variants={contactVariants} whileHover={hoverEffect}>
          <ContactSection />
        </motion.div>

      </motion.div>

      <Routes>
        <Route path="/experience" element={<Experience />} />
        <Route path="/socialhandles" element={<SocialHandles />} />
        <Route path="/technicalSkills" element={<TechnicalSkills />} />
        <Route path="/education" element={<Education />} />
        <Route path="/projects" element={<ProjectSection />} />
        <Route path="/contact" element={<ContactSection />} />
        <Route path="/profilePage" element={<ProfileSection />} />
      </Routes>
    </div>
  );
}

export default App;


