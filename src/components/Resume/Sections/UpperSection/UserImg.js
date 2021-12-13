import React from 'react';
import defaultUserImg from '../../../../images/resume/default-profile-img.jpeg';

const UserImg = (props) => {
  const { data } = props;
  const loadImg = (data) => {
    if (data[0][0]['image-file'] !== '') {
      const file = new Blob([data[0][0]['image-file']], {
        type: '.png, .jpeg, .jpg',
      });
      return URL.createObjectURL(file);
    } else {
      return defaultUserImg;
    }
  };

  return (
    <div className="user-img-container">
      <img
        src={data[0] === '' || undefined ? defaultUserImg : loadImg(data)}
        alt="default user profile img"
      />
    </div>
  );
};

export default UserImg;
