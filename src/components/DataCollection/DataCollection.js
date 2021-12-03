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
import { PersonalInfoSection } from './Sections/Sections';

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
            <TextInput
              inputInfo={{
                text: 'Position',
                forProp: 'position',
                key: uniqid(),
              }}
            />
            <TextInput
              inputInfo={{
                text: 'Company',
                forProp: 'company',
                key: uniqid(),
              }}
            />
            <TextInput
              inputInfo={{
                text: 'location',
                forProp: 'job-location',
                key: uniqid(),
              }}
            />
            <TextInput
              inputInfo={{
                text: 'From',
                forProp: 'start-date',
                key: uniqid(),
              }}
            />
            <TextInput
              inputInfo={{
                text: 'To',
                forProp: 'end-date',
                key: uniqid(),
              }}
            />
            <AddRemoveBtn />
          </div>
          <div className="info-section">
            <Category name="Education" />
            <TextInput
              inputInfo={{
                text: 'University Name',
                forProp: 'uni-name',
                key: uniqid(),
              }}
            />
            <TextInput
              inputInfo={{
                text: 'City',
                forProp: 'uni-city',
                key: uniqid(),
              }}
            />
            <TextInput
              inputInfo={{
                text: 'Degree',
                forProp: 'degree',
                key: uniqid(),
              }}
            />
            <TextInput
              inputInfo={{
                text: 'From',
                forProp: 'uni-start-date',
                key: uniqid(),
              }}
            />
            <TextInput
              inputInfo={{
                text: 'To',
                forProp: 'uni-end-date',
                key: uniqid(),
              }}
            />
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
