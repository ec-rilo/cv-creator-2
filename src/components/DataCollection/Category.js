import React, { Component } from 'react';
import '../../styles/DataCollection.css';

class Category extends Component {
  render() {
    const { name } = this.props;
    return (
      <div className="category-container">
        <p>{name}</p>
      </div>
    );
  }
}

export default Category;
