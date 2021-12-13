import React from 'react';
import Description from './Description';
import PositionInfo from './PositionInfo';

const ExperienceSections = (props) => {
  const { data } = props;

  return (
    <div className="experience-section">
      <PositionInfo data={data} />
      <Description data={data} />
    </div>
  );
};

export default ExperienceSections;
