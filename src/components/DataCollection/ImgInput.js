import React, { Component } from 'react';
import '../../styles/DataCollection.css';

class ImgInput extends Component {
  render() {
    const { inputInfo } = this.props;

    return (
      <div className="default-input img-input">
        <label for={inputInfo.forProp}></label>
        <input
          type="file"
          accept="image/png, image/jpeg"
          id={inputInfo.forProp}
          placeholder={inputInfo.text}
        ></input>
        <p>Image</p>
      </div>
    );
  }
}

export default ImgInput;
