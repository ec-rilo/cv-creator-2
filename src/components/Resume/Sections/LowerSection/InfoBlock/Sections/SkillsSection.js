import React, { Component } from 'react';

class SkillsSection extends Component {
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
      <div className="skill-section">
        <p>
          {this.isNotValidData('skill-name')
            ? 'Skill Name'
            : data['skill-name']}
        </p>
      </div>
    );
  }
}

export default SkillsSection;
