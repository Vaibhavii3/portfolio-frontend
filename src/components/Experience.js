import React from 'react';
import { useNavigate } from 'react-router-dom';

function Experience() {

  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/experience");
  }
  return (
    <div className="experience" onClick={handleClick}>
      <h2 className='heading'>Experience</h2>
      
    </div>
  );
};

export default Experience;
