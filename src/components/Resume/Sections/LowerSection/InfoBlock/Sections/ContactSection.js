import React, { Component } from 'react';

class ContactSection extends Component {
  render() {
    const { imgIcon, textContent, altText } = this.props;
    return (
      <div className="contact-section">
        <p>{textContent}</p>
        <img className="contact-icon" src={imgIcon} alt={altText}></img>
      </div>
    );
  }
}

export default ContactSection;
