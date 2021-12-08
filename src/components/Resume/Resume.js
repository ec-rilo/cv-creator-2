import React, { Component } from 'react';
import '../../styles/Resume.css';
import UpperSection from './Sections/UpperSection/UpperSection';
import TitleBlock from './Sections/TitleBlock';

class Resume extends Component {
  render() {
    const { data } = this.props;
    return (
      <div className="resume-container">
        <UpperSection data={data} />
        <TitleBlock data={data} />
      </div>
    );
  }
}

export default Resume;
