import React, { Component } from 'react';
import '../../styles/Resume.css';
import UpperSection from './Sections/UpperSection/UpperSection';

class Resume extends Component {
  render() {
    return (
      <div className="resume-container">
        <UpperSection />
      </div>
    );
  }
}

export default Resume;
