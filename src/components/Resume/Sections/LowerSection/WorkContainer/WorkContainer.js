import React from 'react';
import Experience from './Experience';

const WorkContainer = (props) => {
  const { data } = props;
  return (
    <div className="work-container">
      <Experience data={data} />
    </div>
  );
};

export default WorkContainer;
