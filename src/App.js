import './styles/reset.css';
import './styles/App.css';
import React, { Component } from 'react';
import DataCollection from './components/DataCollection/DataCollection';
import Resume from './components/Resume/Resume';

class App extends Component {
  render() {
    return (
      <div className="main-container">
        <DataCollection />
        <Resume />
      </div>
    );
  }
}

export default App;
