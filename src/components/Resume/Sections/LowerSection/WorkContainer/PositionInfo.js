import React, { Component } from 'react';

class PositionInfo extends Component {
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
      <div className="position-container">
        <p>
          {this.isNotValidData('position')
            ? 'POSITION TITLE'
            : data.position.toUpperCase()}
        </p>
        <p>
          {this.isNotValidData('company') ? 'Company' : data.company}
          {' | '}{' '}
          {this.isNotValidData('job-location')
            ? 'Location'
            : data['job-location']}
          {' | '}{' '}
          {this.isNotValidData('start-date')
            ? 'Start Year'
            : data['start-date']}
          {' - '}
          {this.isNotValidData('end-date') ? 'End Year' : data['end-date']}
        </p>
      </div>
    );
  }
}

export default PositionInfo;
