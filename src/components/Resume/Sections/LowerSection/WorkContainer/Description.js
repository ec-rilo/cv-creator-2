import React, { Component } from 'react';

class Description extends Component {
  render() {
    return (
      <div>
        <textarea
          className="experience-text-container"
          value="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat."
          readOnly
        ></textarea>
      </div>
    );
  }
}

export default Description;
