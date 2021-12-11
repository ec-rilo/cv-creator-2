import React, { Component } from 'react';
import { EducationSection } from './Sections';
import { AddBtn } from '../Buttons/AddRemoveBtn';
import uniqid from 'uniqid';

class Education extends Component {
  constructor(props) {
    super(props);

    const key1 = uniqid();
    const key2 = uniqid();
    this.state = {
      educationSections: [
        {
          key: key1,
          sectionKey: key1,
          isMainSection: true,
          data: '',
        },
      ],
      section: {
        key: key2,
        sectionKey: key2,
        isMainSection: true,
      },
    };

    this.createSection = this.createSection.bind(this);
    this.removeSection = this.removeSection.bind(this);
  }

  createSection = () => {
    this.setState(
      {
        educationSections: this.state.educationSections.concat(
          this.state.section
        ),
      },
      () => {
        this.updateMainSection(this.state.educationSections);
      }
    );

    const newKey = uniqid();
    this.setState({
      section: {
        key: newKey,
        sectionKey: newKey,
        isMainSection: true,
      },
    });
  };

  updateMainSection = (section) => {
    this.setState({
      educationSections: section.map((section, index, array) => {
        if (index === array.length - 1) {
          section.isMainSection = true;
          return section;
        } else {
          section.isMainSection = false;
          return section;
        }
      }),
    });
  };

  updateEducationSections = (section, key) => {
    let tempArr = [...this.state.educationSections];
    tempArr.forEach((obj) => {
      if (obj.key === key) {
        obj.data = section;
      }
    });

    this.setState(
      {
        educationSections: tempArr,
      },
      () => {
        let newArr = [];
        this.state.educationSections.forEach((section) => {
          newArr.push(section.data);
        });
        this.props.updateCategories('Education', newArr);
      }
    );
  };

  removeSection = (sectionId) => {
    this.setState({
      educationSections: this.state.educationSections
        .filter((section) => section.sectionKey !== sectionId)
        .map((section, index, array) => {
          if (index === array.length - 1) {
            section.isMainSection = true;
            return section;
          } else {
            section.isMainSection = false;
            return section;
          }
        }),
    });
  };

  render() {
    const { educationSections } = this.state;
    if (educationSections.length === 0) {
      return (
        <div>
          <AddBtn sectionKey={uniqid()} createSection={this.createSection} />
        </div>
      );
    } else {
      return (
        <div>
          {educationSections.map((section) => {
            return (
              <EducationSection
                key={section.key}
                sectionKey={section.sectionKey}
                isMainSection={section.isMainSection}
                createSection={this.createSection}
                removeSection={this.removeSection}
                updateEducationSections={this.updateEducationSections}
              />
            );
          })}
        </div>
      );
    }
  }
}

export default Education;
