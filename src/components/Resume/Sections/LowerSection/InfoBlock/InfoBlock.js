import React, { Component } from 'react';
import Contact from './Sections/Contact';

class InfoBlock extends Component {
  render() {
    const { data } = this.props;
    return (
      <div className="info-block">
        <Contact data={data} />
      </div>
    );
  }
}

export default InfoBlock;
