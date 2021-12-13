import './styles/reset.css';
import './styles/App.css';
import React, { useState } from 'react';
import DataCollection from './components/DataCollection/DataCollection';
import Resume from './components/Resume/Resume';

const App = () => {
  const [dataCategories, setDataCategories] = useState(['', '', '', '']);

  const updateSectionData = (data, sectionName) => {
    let categories = [...dataCategories];
    switch (sectionName) {
      case 'Personal Info':
        categories[0] = data;
        setDataCategories(categories);
        break;
      case 'Experience':
        categories[1] = data;
        setDataCategories(categories);
        break;
      case 'Education':
        categories[2] = data;
        setDataCategories(categories);
        break;
      case 'Skills':
        categories[3] = data;
        setDataCategories(categories);
        break;
      default:
        console.log('Error in updateSectionData() - App.js');
    }
  };

  const resumeData = () => {
    return dataCategories;
  };

  return (
    <div className="main-container">
      <DataCollection updateSectionData={updateSectionData} />
      <Resume data={resumeData()} />
    </div>
  );
};

export default App;
