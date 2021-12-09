import React, { Component } from 'react';

class CategoryTitleRight extends Component {
  render() {
    const { text } = this.props;
    return (
      <div className="category-title-right">
        <p>{text}</p>
      </div>
    );
  }
}

export default CategoryTitleRight;
