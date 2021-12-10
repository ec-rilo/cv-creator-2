import React, { Component } from 'react';
import Description from './Description';
import PositionInfo from './PositionInfo';

class ExperienceSections extends Component {
  isNotValidData = (propName) => {
    if (
      this.props.data === undefined ||
      this.props.data[propName] === '' ||
      this.props.data === ''
    ) {
      return true;
    }
    return false;
  };

  render() {
    const { data } = this.props;

    return (
      <div className="experience-section">
        <PositionInfo data={data} />
        <Description data={data} />
      </div>
    );
  }
}

export default ExperienceSections;
