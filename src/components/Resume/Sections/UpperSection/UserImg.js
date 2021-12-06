import React, { Component } from 'react';
import defaultUserImg from '../../../../images/resume/default-profile-img.jpeg';

class UserImg extends Component {
  render() {
    return (
      <div className="user-img-container">
        <img src={defaultUserImg} alt="default user profile img" />
      </div>
    );
  }
}

export default UserImg;
