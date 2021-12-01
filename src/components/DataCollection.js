import React, { Component } from 'react';
import '../styles/DataCollection.css';

class DataCollection extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="data-collection-container">
        <header>
          <h1>CV Creator</h1>
          <p>Thank you for visiting! Please fill out the information below</p>
        </header>
      </div>
    );
  }
}

export default DataCollection;
