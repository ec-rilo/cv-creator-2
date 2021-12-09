import React, { Component } from 'react';
import defaultUserImg from '../../../../images/resume/default-profile-img.jpeg';

class UserImg extends Component {
  loadImg = (data) => {
    if (data[0][0]['image-file'] !== '') {
      const file = new Blob([data[0][0]['image-file']], {
        type: '.png, .jpeg, .jpg',
      });
      return URL.createObjectURL(file);
    } else {
      return defaultUserImg;
    }
  };

  render() {
    const { data } = this.props;
    return (
      <div className="user-img-container">
        <img
          src={
            data[0] === '' || undefined ? defaultUserImg : this.loadImg(data)
          }
          alt="default user profile img"
        />
      </div>
    );
  }
}

export default UserImg;
