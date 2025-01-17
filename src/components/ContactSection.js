import React from 'react';
import { useNavigate } from "react-router-dom";

// import "../style/Contact.css";

const ContactSection = () => {
  
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/contactPage");
  }

  return (
    <div className="contact-section" onClick={handleClick}>
      <h2 className='heading'>Contact</h2>
    </div>
  );
};

export default ContactSection;
