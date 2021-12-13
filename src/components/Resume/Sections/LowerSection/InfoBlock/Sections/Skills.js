import React from 'react';
import CategoryTitleRight from './CategoryTitleRight';
import uniqid from 'uniqid';
import SkillsSection from './SkillsSection';

const Skills = (props) => {
  const { data } = props;
  return (
    <div className="resume-section-container">
      <CategoryTitleRight text="Skills" />
      <div className="skills-section-container">
        {data[3].length === 0 ? (
          <SkillsSection />
        ) : (
          data[3].map((objData) => {
            return <SkillsSection key={uniqid()} data={objData} />;
          })
        )}
      </div>
    </div>
  );
};

export default Skills;
