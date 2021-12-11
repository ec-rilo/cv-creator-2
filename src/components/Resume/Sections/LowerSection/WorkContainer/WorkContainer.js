import React, { Component } from 'react';
import Experience from './Experience';

class WorkContainer extends Component {
  render() {
    const { data } = this.props;
    return (
      <div className="work-container">
        <Experience data={data} />
      </div>
    );
  }
}

export default WorkContainer;
