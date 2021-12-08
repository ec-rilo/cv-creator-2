import React, { Component } from 'react';
import CategoryTitle from '../CategoryTitle';

class About extends Component {
  render() {
    const { data } = this.props;
    return (
      <div className="resume-section-container">
        <CategoryTitle text="About Me" />
        <textarea
          className="about-text-container"
          value={data[0] === '' ? '' : data[0][0].description}
          readOnly
        ></textarea>
      </div>
    );
  }
}

export default About;
