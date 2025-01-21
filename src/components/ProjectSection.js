import React from 'react';
import { useNavigate } from 'react-router-dom';
// import "../style/ProjectSection.css";






function ProjectSection() {

  const navigate = useNavigate();
  
  const handleClick = () => {
    navigate("/project");
  }
  
  return (
    <div className='main-project' onClick={handleClick}>
      <h2 className="heading"> Project Section</h2>
      {/* <p>Title: Interactive Weather Map</p>
      <p>Category: Tech</p>
      <p>Tech Stack: React, Leaflet.js</p>
      <a href="project-link">Live Project</a> */}
    </div>
  );
}

export default ProjectSection;
