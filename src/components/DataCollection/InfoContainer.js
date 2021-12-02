import '../../styles/DataCollection.css';
import React, { Component } from 'react';
import TextInput from './TextInput';

class InfoContainer extends Component {
  render() {
    const { inputArr } = this.props;

    return (
      <div className="info-container">
        {inputArr.map((input) => {
          return <TextInput key={input.key} inputInfo={input} />;
        })}
      </div>
    );
  }
}

export default InfoContainer;
