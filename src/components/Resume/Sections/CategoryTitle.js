import React, { Component } from 'react';

class CategoryTitle extends Component {
  render() {
    const { text } = this.props;
    return (
      <div className="category-title">
        <p>{text}</p>
      </div>
    );
  }
}

export default CategoryTitle;
