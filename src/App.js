import './styles/reset.css';
import './styles/App.css';
import React, { Component } from 'react';
import DataCollection from './components/DataCollection/DataCollection';

class App extends Component {
  render() {
    return (
      <div className="main-container">
        <DataCollection />
        <div className="resume-container"></div>
      </div>
    );
  }
}

export default App;
