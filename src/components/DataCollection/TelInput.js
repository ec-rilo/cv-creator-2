import React, { Component } from 'react';

class TelInput extends Component {
  render() {
    const { inputInfo } = this.props;

    return (
      <div className="default-input-container">
        <label htmlFor={inputInfo.forProp}></label>
        <input
          type="tel"
          id={inputInfo.forProp}
          placeholder={inputInfo.text}
          required
        ></input>
      </div>
    );
  }
}

export default TelInput;
