import React, { Component } from 'react';
import UserImg from './UserImg';

class UpperSection extends Component {
  render() {
    return (
      <div className="upper-section-container">
        <UserImg />
        <div className="about-container"></div>
      </div>
    );
  }
}

export default UpperSection;
