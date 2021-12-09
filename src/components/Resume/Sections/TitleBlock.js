import React, { Component } from 'react';

class TitleBlock extends Component {
  render() {
    const { data } = this.props;
    return (
      <div className="title-block">
        <div>
          <p>{data[0] === '' ? '' : data[0][0].title}</p>
        </div>
        <div>
          <p>
            {data[0] === '' ? '' : data[0][0]['first-name']}{' '}
            {data[0] === '' ? '' : data[0][0]['last-name']}
          </p>
        </div>
      </div>
    );
  }
}

export default TitleBlock;
