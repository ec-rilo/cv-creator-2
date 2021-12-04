import React, { Component } from 'react';
import '../../styles/DataCollection.css';
import Category from './Category';
import uniqid from 'uniqid';
import ResetBtn from './Buttons/ResetBtn';
import Header from './Header/Header';
import { PersonalInfoSection, ExperienceSection } from './Sections/Sections';

class DataCollection extends Component {
  constructor(props) {
    super(props);

    this.state = {
      experienceSections: [
        <ExperienceSection
          key={uniqid()}
          sectionCreation={this.createSection}
        />,
      ],
    };
  }

  createSection = (name) => {
    switch (name) {
      case 'experience':
        const section = (
          <ExperienceSection
            key={uniqid()}
            sectionCreation={this.createSection}
          />
        );

        this.setState({
          experienceSections: this.state.experienceSections.concat(section),
        });
        break;
      default:
        break;
    }
  };

  render() {
    const { experienceSections } = this.state;
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
            {experienceSections.map((section) => {
              return section;
            })}
          </div>
          <ResetBtn />
        </form>
      </div>
    );
  }
}

export default DataCollection;
