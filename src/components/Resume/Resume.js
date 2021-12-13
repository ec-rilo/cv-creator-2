import React from 'react';
import '../../styles/Resume.css';
import UpperSection from './Sections/UpperSection/UpperSection';
import TitleBlock from './Sections/TitleBlock';
import LowerSection from './Sections/LowerSection/LowerSection';

const Resume = (props) => {
  const { data } = props;
  return (
    <div className="resume-container">
      <UpperSection data={data} />
      <TitleBlock data={data} />
      <LowerSection data={data} />
    </div>
  );
};

export default Resume;
