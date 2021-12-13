import React from 'react';

const CategoryTitleRight = (props) => {
  const { text } = props;
  return (
    <div className="category-title-right">
      <p>{text}</p>
    </div>
  );
};

export default CategoryTitleRight;
