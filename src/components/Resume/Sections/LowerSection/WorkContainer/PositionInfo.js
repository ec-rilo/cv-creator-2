import React from 'react';

const PositionInfo = (props) => {
  const { data } = props;
  const isNotValidData = (propName) => {
    if (data === undefined || data[propName] === '' || data === '') {
      return true;
    }
    return false;
  };

  return (
    <div className="position-container">
      <p>
        {isNotValidData('position')
          ? 'POSITION TITLE'
          : data.position.toUpperCase()}
      </p>
      <p>
        {isNotValidData('company') ? 'Company' : data.company}
        {' | '}{' '}
        {isNotValidData('job-location') ? 'Location' : data['job-location']}
        {' | '}{' '}
        {isNotValidData('start-date') ? 'Start Year' : data['start-date']}
        {' - '}
        {isNotValidData('end-date') ? 'End Year' : data['end-date']}
      </p>
    </div>
  );
};

export default PositionInfo;
