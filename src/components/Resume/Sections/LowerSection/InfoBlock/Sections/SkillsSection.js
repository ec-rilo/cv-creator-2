import React from 'react';

const SkillsSection = (props) => {
  const { data } = props;
  const isNotValidData = (propName) => {
    if (data === undefined || data[propName] === '' || data === '') {
      return true;
    }
    return false;
  };

  return (
    <div className="skill-section">
      <p>{isNotValidData('skill-name') ? 'Skill Name' : data['skill-name']}</p>
    </div>
  );
};

export default SkillsSection;
