import React from 'react';
import Contact from './Sections/Contact';
import Education from './Sections/Education';
import Skills from './Sections/Skills';

const InfoBlock = (props) => {
  const { data } = props;
  return (
    <div className="info-block">
      <Contact data={data} />
      <Education data={data} />
      <Skills data={data} />
    </div>
  );
};

export default InfoBlock;
