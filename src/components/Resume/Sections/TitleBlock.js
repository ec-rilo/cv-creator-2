import React, { Component } from 'react';

class TitleBlock extends Component {
  isNotValidData = (propName) => {
    if (this.props.data[0] === '' || this.props.data[0][0][propName] === '') {
      return true;
    }
    return false;
  };

  render() {
    const { data } = this.props;
    return (
      <div className="title-block">
        <div>
          <p>{this.isNotValidData('title') ? 'Job Title' : data[0][0].title}</p>
        </div>
        <div>
          <p>
            {this.isNotValidData('first-name')
              ? 'John'
              : data[0][0]['first-name']}{' '}
            {this.isNotValidData('last-name') ? 'Doe' : data[0][0]['last-name']}
          </p>
        </div>
      </div>
    );
  }
}

export default TitleBlock;
