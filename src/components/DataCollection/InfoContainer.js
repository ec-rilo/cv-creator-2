import '../../styles/DataCollection.css';
import React, { Component } from 'react';
import Category from './Category';
import DefaultInput from './default-input';

class InfoContainer extends Component {
  render() {
    const { categoryName, inputArr } = this.props;

    return (
      <div className="info-container">
        <Category name={categoryName} />
        {inputArr.map((input) => {
          return <DefaultInput inputInfo={input} />;
        })}
      </div>
    );
  }
}

export default InfoContainer;
