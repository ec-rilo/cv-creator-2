// This will provide a container that will hold and dynamically grow sections of experience.
import React, { Component } from 'react';
import { ExperienceSection } from './Sections';
import uniqid from 'uniqid';

class Experience extends Component {
  constructor(props) {
    super(props);

    this.state = {
      experienceSections: [
        {
          key: uniqid(),
          sectionKey: this.key,
          isMainSection: true,
        },
      ],
      section: {
        key: uniqid(),
        sectionKey: this.key,
        isMainSection: true,
      },
    };

    this.createSection = this.createSection.bind(this);
  }

  createSection = (name) => {
    switch (name) {
      case 'experience':
        this.setState({
          experienceSections: this.state.experienceSections
            .concat(this.state.section)
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
        break;
      default:
        break;
    }

    this.setState({
      section: {
        key: uniqid(),
        sectionKey: this.key,
        isMainSection: true,
      },
    });
  };

  render() {
    const { experienceSections } = this.state;
    return (
      <div>
        {experienceSections.map((section) => {
          return (
            <ExperienceSection
              key={section.key}
              isMainSection={section.isMainSection}
              sectionCreation={this.createSection}
            />
          );
        })}
      </div>
    );
  }
}

export default Experience;
