import React from 'react';
import InfoBlock from './InfoBlock/InfoBlock';
import WorkContainer from './WorkContainer/WorkContainer';

const LowerSection = (props) => {
  const { data } = props;
  return (
    <div className="lower-section">
      <InfoBlock data={data} />
      <div className="separation-line"></div>
      <WorkContainer data={data} />
    </div>
  );
};

export default LowerSection;
