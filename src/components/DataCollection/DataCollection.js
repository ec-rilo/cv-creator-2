import React, { Component } from 'react';
import '../../styles/DataCollection.css';
import Category from './Category';
import {
  TextInput,
  ImgInput,
  TelInput,
  EmailInput,
  DescriptionInput,
} from './Inputs/MainInputs';
import uniqid from 'uniqid';
import AddRemoveBtn from './Buttons/AddRemoveBtn';
import ResetBtn from './Buttons/ResetBtn';
import Header from './Header/Header';
import {
  PersonalInfoSection,
  ExperienceSection,
  EducationSection,
} from './Sections/Sections';

class DataCollection extends Component {
  render() {
    return (
      <div className="data-collection-container">
        <Header />
        <form action="#" method="#">
          <div className="info-section">
            <Category name="Personal Information" />
            <PersonalInfoSection />
          </div>
          <div className="info-section">
            <Category name="Experience" />
            <ExperienceSection />
            <AddRemoveBtn />
          </div>
          <div className="info-section">
            <Category name="Education" />
            <EducationSection />
            <AddRemoveBtn />
          </div>
          <div className="info-section">
            <Category name="Skills" />
            <TextInput
              inputInfo={{
                text: 'Skill',
                forProp: 'skill-name',
                key: uniqid(),
              }}
            />
            <AddRemoveBtn />
          </div>
          <ResetBtn />
        </form>
      </div>
    );
  }
}

export default DataCollection;
