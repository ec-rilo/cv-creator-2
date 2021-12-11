import React, { Component } from 'react';

class Description extends Component {
  isNotValidData = (propName) => {
    if (
      this.props.data === undefined ||
      this.props.data[propName] === '' ||
      this.props.data === ''
    ) {
      return true;
    }
    return false;
  };

  render() {
    const { data } = this.props;
    const placeholderText =
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.';

    return (
      <div>
        <textarea
          className="experience-text-container"
          value={
            this.isNotValidData('description')
              ? placeholderText
              : data['description']
          }
          readOnly
        ></textarea>
      </div>
    );
  }
}

export default Description;
