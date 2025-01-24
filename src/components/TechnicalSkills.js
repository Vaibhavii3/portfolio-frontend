import React from 'react';
import { useNavigate } from "react-router-dom";


// import '../style/TechnicalSkills.css';

const TechnicalSkills = () => {
  
  const navigate = useNavigate();
  
    const handleClick = () => {
      navigate("/skillPage");
    }

  return (
    <div className="technical-skills" onClick={handleClick}>
      <h2 className='heading'>Technical Skills</h2>
      
    </div>
  );
};

export default TechnicalSkills;
