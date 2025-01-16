// import React from 'react';
// import ProfileSection from './components/ProfileSection';
// import SocialHandles from './components/SocialHandles';
// import TechnicalSkills from './components/TechnicalSkills';
// import Education from './components/Education';
// import ProjectSection from './components/ProjectSection';
// import Experience from './components/Experience';
// import ContactSection from './components/ContactSection';
// import './App.css';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// function App() {
//   return (
//     <Router>
//       <div className="app">

//         <div className="grid-container">

//           <div className="grid-item skills">
//             <TechnicalSkills />
//           </div>

//           <div className="grid-item social">
//             <SocialHandles />
//           </div>

//           <div className="grid-item experience">
//             <Experience />
//           </div>

//           <div className="grid-item profile">
//             <ProfileSection />
//           </div>

//           <div className="grid-item projects">
//             <ProjectSection />
//           </div>

//           <div className="grid-item education">
//             <Education />
//           </div>

//           <div className="grid-item contact">
//             <ContactSection />
//           </div>

//         </div>

//         <Routes>
//           <Route path="/experience" element={<Experience />} />
//           <Route path="/socialhandles" element={<SocialHandles />} />
//           <Route path="/technicalSkills" element={<TechnicalSkills />} />
//           <Route path="/education" element={<Education />} />
//           <Route path="/projects" element={<ProjectSection />} />
//           <Route path="/contact" element={<ContactSection />} />
//           <Route path="/profilePage" element={<ProfileSection />} />
//         </Routes>
//       </div>
//     </Router>
//   );
// }

// export default App;


// App.js
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

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.8, y:50 },
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

  const profileVariants = {
    initial: { scale: 1, opacity: 1 },
    animate: { scale: 0.8, opacity: 1,
      transition: { 
        type: "spring",
        stiffness: 80,
        damping: 8,
        duration: 0.8 } },
  };

  return (
    <div className="app">
      <motion.div
        className="grid-container"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.div className="grid-item skills" variants={itemVariants}>
          <TechnicalSkills />
        </motion.div>
        <motion.div className="grid-item social" variants={itemVariants}>
          <SocialHandles />
        </motion.div>
        <motion.div className="grid-item experience" variants={itemVariants}>
          <Experience />
        </motion.div>
        <motion.div
          className="grid-item profile"
          variants={profileVariants}
          initial="initial"
          animate="animate"
        >
          <ProfileSection />
        </motion.div>
        <motion.div className="grid-item projects" variants={itemVariants}>
          <ProjectSection />
        </motion.div>
        <motion.div className="grid-item education" variants={itemVariants}>
          <Education />
        </motion.div>
        <motion.div className="grid-item contact" variants={itemVariants}>
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


