import React, { Component } from 'react';

class EmailInput extends Component {
  render() {
    const { inputInfo } = this.props;
    return (
      <div className="default-input-container">
        <label htmlFor={inputInfo.forProp}></label>
        <input
          type="email"
          id={inputInfo.forProp}
          placeholder={inputInfo.text}
          required
        ></input>
      </div>
    );
  }
}

export default EmailInput;
