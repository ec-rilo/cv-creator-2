import React, { Component } from 'react';
import InfoBlock from './InfoBlock/InfoBlock';
import WorkContainer from './WorkContainer';

class LowerSection extends Component {
  render() {
    const { data } = this.props;
    return (
      <div className="lower-section">
        <InfoBlock data={data} />
        <div className="separation-line"></div>
        <WorkContainer />
      </div>
    );
  }
}

export default LowerSection;
