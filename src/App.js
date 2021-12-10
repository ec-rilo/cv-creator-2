import './styles/reset.css';
import './styles/App.css';
import React, { Component } from 'react';
import DataCollection from './components/DataCollection/DataCollection';
import Resume from './components/Resume/Resume';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dataCategories: ['', '', '', ''],
    };

    this.updateSectionData = this.updateSectionData.bind(this);
    this.resumeData = this.resumeData.bind(this);
  }

  updateSectionData = (data, sectionName) => {
    let categories = [...this.state.dataCategories];
    switch (sectionName) {
      case 'Personal Info':
        categories[0] = data;
        this.setState({
          dataCategories: categories,
        });
        break;
      case 'Experience':
        categories[1] = data;
        this.setState({
          dataCategories: categories,
        });
        break;
      case 'Education':
        categories[2] = data;
        this.setState({
          dataCategories: categories,
        });
        break;
      case 'Skills':
        categories[3] = data;
        this.setState({
          dataCategories: categories,
        });
        break;
      default:
        console.log('Error in updateSectionData() - App.js');
    }
  };

  resumeData = () => {
    return this.state.dataCategories;
  };

  render() {
    return (
      <div className="main-container">
        <DataCollection updateSectionData={this.updateSectionData} />
        <Resume data={this.resumeData()} />
      </div>
    );
  }
}

export default App;
