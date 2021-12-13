import React from 'react';

const Description = (props) => {
  const { data } = props;
  const isNotValidData = (propName) => {
    if (data === undefined || data[propName] === '' || data === '') {
      return true;
    }
    return false;
  };

  const placeholderText =
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.';

  return (
    <div>
      <textarea
        className="experience-text-container"
        value={
          isNotValidData('description') ? placeholderText : data['description']
        }
        readOnly
      ></textarea>
    </div>
  );
};

export default Description;
