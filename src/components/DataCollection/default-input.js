import React, { Component } from 'react';
import '../../styles/DataCollection.css';

class DefaultInput extends Component {
  render() {
    const { inputInfo } = this.props;
    return (
      <div className="default-input">
        <label for={inputInfo.forProp}></label>
        <input
          type="text"
          id={inputInfo.forProp}
          placeholder={inputInfo.text}
        ></input>
      </div>
    );
  }
}

export default DefaultInput;
