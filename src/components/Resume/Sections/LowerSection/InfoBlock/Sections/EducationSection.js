import React, { Component } from 'react';

class EducationSection extends Component {
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
      <div className="education-section">
        <p>{this.isNotValidData('degree') ? 'Degree' : data.degree}</p>
        <p>
          {this.isNotValidData('uni-name')
            ? 'University Name'
            : data['uni-name']}
        </p>
        <p>
          {this.isNotValidData('uni-start-date')
            ? 'Start Date'
            : data['uni-start-date']}
          {' - '}
          {this.isNotValidData('uni-end-date')
            ? 'End Date'
            : data['uni-end-date']}
        </p>
      </div>
    );
  }
}

export default EducationSection;
