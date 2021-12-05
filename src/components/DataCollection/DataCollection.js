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
        {
          key: uniqid(),
          sectionKey: this.key,
          sectionCreation: this.createSection,
        },
      ],
      section: {
        key: uniqid(),
        sectionKey: this.key,
        sectionCreation: this.createSection,
      },
    };
    this.createSection = this.createSection.bind(this);
  }

  createSection = (name) => {
    switch (name) {
      case 'experience':
        this.setState({
          experienceSections: this.state.experienceSections.concat(
            this.state.section
          ),
        });
        break;
      default:
        break;
    }

    this.setState({
      section: {
        key: uniqid(),
        sectionKey: this.key,
        sectionCreation: this.createSection,
      },
    });
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
              return (
                <ExperienceSection
                  key={section.key}
                  sectionCreation={this.createSection}
                />
              );
            })}
          </div>
          <ResetBtn />
        </form>
      </div>
    );
  }
}

export default DataCollection;
