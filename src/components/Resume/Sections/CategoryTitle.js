import React from 'react';

const CategoryTitle = (props) => {
  const { text } = props;
  return (
    <div className="category-title">
      <p>{text}</p>
    </div>
  );
};

export default CategoryTitle;
