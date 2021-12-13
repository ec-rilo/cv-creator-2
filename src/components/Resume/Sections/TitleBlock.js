import React from 'react';

const TitleBlock = (props) => {
  const { data } = props;
  const isNotValidData = (propName) => {
    if (data[0] === '' || data[0][0][propName] === '') {
      return true;
    }
    return false;
  };

  return (
    <div className="title-block">
      <div>
        <p>{isNotValidData('title') ? 'Job Title' : data[0][0].title}</p>
      </div>
      <div>
        <p>
          {isNotValidData('first-name') ? 'John' : data[0][0]['first-name']}{' '}
          {isNotValidData('last-name') ? 'Doe' : data[0][0]['last-name']}
        </p>
      </div>
    </div>
  );
};

export default TitleBlock;
