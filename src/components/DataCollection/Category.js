import React from 'react';
import '../../styles/DataCollection.css';

const Category = (props) => {
  const { name } = props;
  return (
    <div className="category-container">
      <p>{name}</p>
    </div>
  );
};

export default Category;
