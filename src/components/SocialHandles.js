import React from 'react';
import '../style/SocialHandles.css';
import { FaGithub, FaLinkedin, FaInstagram, FaYoutube } from 'react-icons/fa';

function SocialHandles() {
  return (
    <div className="main-social">
      <h3 className='heading'> Connect with Me </h3>

      <div className="social-links">

        <a href="https://github.com/Vaibhavii3" target="_blank" rel="noopener noreferrer" className="social-link github">
          <FaGithub />
        </a>

        <a href="https://linkedin.com/in/vaibhavi-chaudhari-1b003120b" target="_blank" rel="noopener noreferrer" className="social-link linkedin">
          <FaLinkedin />
        </a>

        <a href="https://instagram.com/vaibhavii.3" target="_blank" rel="noopener noreferrer" className="social-link instagram">
          <FaInstagram />
        </a>

        <a href="https://youtube.com/" target="_blank" rel="noopener noreferrer" className="social-link youtube">
          <FaYoutube />
        </a>

      </div>
    </div>
  );
}

export default SocialHandles;
