import React from 'react';
import CategoryTitle from '../CategoryTitle';

const About = (props) => {
  const { data } = props;
  const isNotValidData = (propName) => {
    if (data[0] === '' || data[0][0][propName] === '') {
      return true;
    }
    return false;
  };

  const placeholderText =
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.';
  return (
    <div className="resume-section-container">
      <CategoryTitle text="About Me" />
      <textarea
        className="about-text-container"
        value={
          isNotValidData('description')
            ? placeholderText
            : data[0][0].description
        }
        readOnly
      ></textarea>
    </div>
  );
};

export default About;
