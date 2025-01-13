// components/ContactSection.js
import React from 'react';

const ContactSection = () => {
  const contactDetails = {
    email: 'youremail@example.com',
    phone: '+1234567890',
    address: '123 Main Street, City, Country',
  }; // Customize your contact details here

  return (
    <div className="contact-section">
      <h2>Contact</h2>
      <p><strong>Email:</strong> {contactDetails.email}</p>
      <p><strong>Phone:</strong> {contactDetails.phone}</p>
      <p><strong>Address:</strong> {contactDetails.address}</p>
    </div>
  );
};

export default ContactSection;
