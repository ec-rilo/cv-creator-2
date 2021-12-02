import React, { Component } from 'react';
import '../../styles/DataCollection.css';

class TextInput extends Component {
  render() {
    const { inputInfo } = this.props;
    return (
      <div className="default-input-container">
        <label htmlFor={inputInfo.forProp}></label>
        <input
          type="text"
          id={inputInfo.forProp}
          placeholder={inputInfo.text}
          required
        ></input>
      </div>
    );
  }
}

export default TextInput;
