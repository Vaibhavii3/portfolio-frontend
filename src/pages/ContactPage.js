import React from 'react';
import { FaPhoneAlt, FaEnvelope, FaLinkedin, FaGlobe } from 'react-icons/fa';
import { motion } from 'framer-motion';
import '../style/Contact.css';

const FloatingIcons = () => {
  const iconStyle = {
    position: 'absolute',
    fontSize: '40px',
    animation: 'float 6s ease-in-out infinite',
  };

  return (
    <>
      <motion.div
        style={{ ...iconStyle, top: '10%', left: '20%' }}
        animate={{ x: 'random', y: 'random' }}
        transition={{ duration: 6, repeat: Infinity, repeatType: 'loop' }}
      >
        <FaPhoneAlt />
      </motion.div>
      <motion.div
        style={{ ...iconStyle, top: '30%', right: '10%' }}
        animate={{ x: 'random', y: 'random' }}
        transition={{ duration: 6, repeat: Infinity, repeatType: 'loop' }}
      >
        <FaEnvelope />
      </motion.div>
      <motion.div
        style={{ ...iconStyle, top: '50%', left: '50%' }}
        animate={{ x: 'random', y: 'random' }}
        transition={{ duration: 6, repeat: Infinity, repeatType: 'loop' }}
      >
        <FaLinkedin />
      </motion.div>
      <motion.div
        style={{ ...iconStyle, top: '70%', right: '20%' }}
        animate={{ x: 'random', y: 'random' }}
        transition={{ duration: 6, repeat: Infinity, repeatType: 'loop' }}
      >
        <FaGlobe />
      </motion.div>
    </>
  );
};

const ContactUsPage = () => {
  return (
    <div className="contact-us-page">
      <h1>Contact Us</h1>
      <FloatingIcons />
      <form className="contact-form">
        <label>Name:</label>
        <input type="text" placeholder="Your Name" />
        <label>Email:</label>
        <input type="email" placeholder="Your Email" />
        <label>Message:</label>
        <textarea placeholder="Your Message" />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default ContactUsPage;
