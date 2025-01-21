import React from 'react';
import { useNavigate } from "react-router-dom";
// import "../style/Education.css";

const Education = () => {
  
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/education");
  }

  return (
    <div className="education" onClick={handleClick}>
      <h2 className='heading'>Education</h2>
      
    </div>
  );
};

export default Education;
