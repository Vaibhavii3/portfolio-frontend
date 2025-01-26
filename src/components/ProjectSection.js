import React from 'react';
import { useNavigate } from 'react-router-dom';

function ProjectSection() {

  const navigate = useNavigate();
  
  const handleClick = () => {
    navigate("/project");
  }
  
  return (
    <div className='main-project' onClick={handleClick}>
      <h2 className="heading"> Projects </h2>
    </div>
  );
}

export default ProjectSection;
