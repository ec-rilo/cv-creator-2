import React from 'react';
import uniqid from 'uniqid';
import ExperienceSections from './ExperienceSections';
import CategoryTitle from '../../CategoryTitle';

const Experience = (props) => {
  const { data } = props;
  return (
    <div className="resume-section-container">
      <CategoryTitle text={'Experience'} />
      <div className="experience-section-container">
        {data[1].length === 0 ? (
          <ExperienceSections />
        ) : (
          data[1].map((objData) => {
            return <ExperienceSections key={uniqid()} data={objData} />;
          })
        )}
      </div>
    </div>
  );
};

export default Experience;
