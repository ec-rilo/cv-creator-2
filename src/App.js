import './styles/reset.css';
import './styles/App.css';
import React, { useState } from 'react';
import DataCollection from './components/DataCollection/DataCollection';
import Resume from './components/Resume/Resume';

const App = () => {
  const [dataCategories, setDataCategories] = useState(['', '', '', '']);

  const updateSectionData = (data, sectionName) => {
    let categories = [...dataCategories];

    const cases = ['Personal Info', 'Experience', 'Education', 'Skills'];

    cases.forEach((section, index) => {
      if (section === sectionName) {
        categories[index] = data;
        setDataCategories(categories);
      }
    });
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
