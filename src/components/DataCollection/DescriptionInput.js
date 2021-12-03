import React, { Component } from 'react';

class DescriptionInput extends Component {
  render() {
    const { inputInfo } = this.props;

    return (
      <div className="description-input-container">
        <label htmlFor={inputInfo.forProp}></label>
        <textarea
          id={inputInfo.forProp}
          placeholder={inputInfo.text}
          required
        ></textarea>
      </div>
    );
  }
}

export default DescriptionInput;
