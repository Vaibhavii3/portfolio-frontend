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
//         <Routes>

//           <Route path='/' 
//                   element={
//                     <div className='profile'>
//                       <ProfileSection />
//                     </div>
//                     } 
//           />

//           <Route path='/experience' element={<Experience />} />

//           <Route path='/socialhandles'
//                   element={
//                     <div className='social'>
//                       <SocialHandles />
//                     </div>
//                     } 
//           />
//           <Route path='/technicalSkills' element={<TechnicalSkills />} />
//           <Route path='/education' element={<Education />} />
//           <Route path='/projects' element={<ProjectSection />} />
//           <Route path='/contact' element={<ContactSection />} />
//           <Route path='/profilePage' element={<profilePage />} />
//         </Routes>
//       </div>
//     </Router>
//   );
// }

// export default App;

import React from 'react';
import ProfileSection from './components/ProfileSection';
import SocialHandles from './components/SocialHandles';
import TechnicalSkills from './components/TechnicalSkills';
import Education from './components/Education';
import ProjectSection from './components/ProjectSection';
import Experience from './components/Experience';
import ContactSection from './components/ContactSection';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="app">

        <div className="grid-container">

          <div className="grid-item profile">
            <ProfileSection />
          </div>

          <div className="grid-item social">
            <SocialHandles />
          </div>

          <div className="grid-item skills">
            <TechnicalSkills />
          </div>

          <div className="grid-item experience">
            <Experience />
          </div>

          <div className="grid-item projects">
            <ProjectSection />
          </div>

          <div className="grid-item education">
            <Education />
          </div>

          <div className="grid-item contact">
            <ContactSection />
          </div>

        </div>

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
    </Router>
  );
}

export default App;

