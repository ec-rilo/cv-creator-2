import React, { Component } from 'react';
import '../../styles/DataCollection.css';
import InfoContainer from './InfoContainer';

class DataCollection extends Component {
  render() {
    return (
      <div className="data-collection-container">
        <header>
          <h1>CV Creator</h1>
          <p>Thank you for visiting! Please fill out the information below</p>
        </header>
        <form action="#" method="#">
          <InfoContainer
            categoryName="Personal Information"
            inputArr={[
              { text: 'First Name', forProp: 'first-name' },
              { text: 'Last Name', forProp: 'last-name' },
              { text: 'Title', forProp: 'title' },
            ]}
          />
        </form>
      </div>
    );
  }
}

export default DataCollection;
