import React from 'react';

const ContactSection = (props) => {
  const { imgIcon, textContent, altText } = props;
  return (
    <div className="contact-section">
      <p>{textContent}</p>
      <img className="contact-icon" src={imgIcon} alt={altText}></img>
    </div>
  );
};

export default ContactSection;
