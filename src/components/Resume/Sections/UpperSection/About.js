import React, { Component } from 'react';
import CategoryTitle from '../CategoryTitle';

class About extends Component {
  render() {
    return (
      <div className="resume-section-container">
        <CategoryTitle text="About Me" />
        <textarea className="about-text-container">{}</textarea>
      </div>
    );
  }
}

export default About;
