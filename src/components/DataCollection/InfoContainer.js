import '../../styles/DataCollection.css';
import React, { Component } from 'react';
import DefaultInput from './default-input';

class InfoContainer extends Component {
  render() {
    const { inputArr } = this.props;

    return (
      <div className="info-container">
        {inputArr.map((input) => {
          return <DefaultInput key={input.key} inputInfo={input} />;
        })}
      </div>
    );
  }
}

export default InfoContainer;
