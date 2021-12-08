import React, { Component } from 'react';
import UserImg from './UserImg';
import About from './About';

class UpperSection extends Component {
  render() {
    const { data } = this.props;
    return (
      <div className="upper-section-container">
        <UserImg data={data} />
        <About data={data} />
      </div>
    );
  }
}

export default UpperSection;
