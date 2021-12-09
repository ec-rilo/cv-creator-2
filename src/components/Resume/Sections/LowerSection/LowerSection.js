import React, { Component } from 'react';
import InfoBlock from './InfoBlock/InfoBlock';
import WorkContainer from './WorkContainer';

class LowerSection extends Component {
  render() {
    return (
      <div className="lower-section">
        <InfoBlock />
        <div className="separation-line"></div>
        <WorkContainer />
      </div>
    );
  }
}

export default LowerSection;
