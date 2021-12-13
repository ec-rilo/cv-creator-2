import React, { useState } from 'react';
import '../../styles/DataCollection.css';
import Category from './Category';
import ResetBtn from './Buttons/ResetBtn';
import Header from './Header/Header';
import { PersonalInfoSection } from './Sections/Sections';
import Experience from './Sections/experience';
import Education from './Sections/Education';
import Skill from './Sections/Skill';

const DataCollection = (props) => {
  const { updateSectionData } = props;
  const [personalInfo, setPersonalInfo] = useState([]);
  const [experience, setExperience] = useState('');
  const [education, setEducation] = useState('');
  const [skills, setSkills] = useState('');

  const updateCategories = (sectionName, data) => {
    let section = [];

    switch (sectionName) {
      case 'Personal Info':
        section = [data];
        setPersonalInfo(section);
        updateSectionData(section, 'Personal Info');
        break;
      case 'Experience':
        section = data;
        setExperience(section);
        updateSectionData(section, 'Experience');
        break;
      case 'Education':
        section = [data];
        setEducation(section);
        updateSectionData(section, 'Education');
        break;
      case 'Skills':
        section = data;
        setSkills(section);
        updateSectionData(section, 'Skills');
        break;
      default:
        break;
    }
  };

  return (
    <div className="data-collection-container">
      <Header />
      <form action="#" method="#">
        <div className="info-section">
          <Category name="Personal Information" />
          <PersonalInfoSection
            updateSectionData={updateSectionData}
            updateCategories={updateCategories}
          />
        </div>
        <div className="info-section" title="This is a section of experiences">
          <Category name="Experience" />
          <Experience updateCategories={updateCategories} />
        </div>
        <div className="info-section" title="This is a section of education">
          <Category name="Education" />
          <Education updateCategories={updateCategories} />
        </div>
        <div className="info-section" title="This is a section of skills">
          <Category name="Skills" />
          <Skill updateCategories={updateCategories} />
        </div>
        <ResetBtn />
      </form>
    </div>
  );
};

export default DataCollection;
