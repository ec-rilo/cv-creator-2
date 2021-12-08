import React, { Component } from 'react';
import '../../styles/DataCollection.css';
import Category from './Category';
import ResetBtn from './Buttons/ResetBtn';
import Header from './Header/Header';
import { PersonalInfoSection } from './Sections/Sections';
import Experience from './Sections/experience';
import Education from './Sections/Education';
import Skill from './Sections/Skill';
import uniqid from 'uniqid';

class DataCollection extends Component {
  constructor(props) {
    super(props);

    this.state = {
      personalInfo: [],
    };

    this.updateCategories = this.updateCategories.bind(this);
  }

  updateCategories = (sectionName, data) => {
    let section = [];
    switch (sectionName) {
      case 'Personal Info':
        section = [data];
        this.setState(
          {
            personalInfo: section,
          },
          () =>
            this.props.updateSectionData(
              this.state.personalInfo,
              'Personal Info'
            )
        );
        break;
      default:
        break;
    }
  };

  render() {
    const { updateSectionData } = this.props;
    return (
      <div className="data-collection-container">
        <Header />
        <form action="#" method="#">
          <div className="info-section">
            <Category name="Personal Information" />
            <PersonalInfoSection
              updateSectionData={updateSectionData}
              updateCategories={this.updateCategories}
            />
          </div>
          <div
            className="info-section"
            title="This is a section of experiences"
          >
            <Category name="Experience" />
            <Experience />
          </div>
          <div className="info-section" title="This is a section of education">
            <Category name="Education" />
            <Education />
          </div>
          <div className="info-section" title="This is a section of skills">
            <Category name="Skills" />
            <Skill />
          </div>
          <ResetBtn />
        </form>
      </div>
    );
  }
}

export default DataCollection;
