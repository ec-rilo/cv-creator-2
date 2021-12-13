import React from 'react';
import UserImg from './UserImg';
import About from './About';

const UpperSection = (props) => {
  const { data } = props;
  return (
    <div className="upper-section-container">
      <UserImg data={data} />
      <About data={data} />
    </div>
  );
};

export default UpperSection;
