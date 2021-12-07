import React, { Component } from 'react';
import UserImg from './UserImg';
import About from './About';

class UpperSection extends Component {
  render() {
    return (
      <div className="upper-section-container">
        <UserImg />
        <About />
      </div>
    );
  }
}

export default UpperSection;
