import React from 'react';

const EducationSection = (props) => {
  const { data } = props;

  const isNotValidData = (propName) => {
    if (data === undefined || data[propName] === '' || data === '') {
      return true;
    }
    return false;
  };

  return (
    <div className="education-section">
      <p>{isNotValidData('degree') ? 'Degree' : data.degree}</p>
      <p>{isNotValidData('uni-name') ? 'University Name' : data['uni-name']}</p>
      <p>
        {isNotValidData('uni-start-date')
          ? 'Start Date'
          : data['uni-start-date']}
        {' - '}
        {isNotValidData('uni-end-date') ? 'End Date' : data['uni-end-date']}
      </p>
    </div>
  );
};

export default EducationSection;
