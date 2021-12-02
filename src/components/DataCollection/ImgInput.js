import React, { Component } from 'react';
import '../../styles/DataCollection.css';

class ImgInput extends Component {
  render() {
    const { inputInfo } = this.props;

    return (
      <div className="default-input-container img-input">
        <label htmlFor={inputInfo.forProp}></label>
        <input
          type="file"
          accept="image/png, image/jpeg"
          id={inputInfo.forProp}
          placeholder={inputInfo.text}
          required
        ></input>
        <p>Image</p>
      </div>
    );
  }
}

export default ImgInput;
