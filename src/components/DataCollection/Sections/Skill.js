import React, { Component } from 'react';
import { SkillSection } from './Sections';
import { AddBtn } from '../Buttons/AddRemoveBtn';
import uniqid from 'uniqid';

class Skill extends Component {
  constructor(props) {
    super(props);

    const key1 = uniqid();
    const key2 = uniqid();
    this.state = {
      skillSections: [
        {
          key: key1,
          sectionKey: key1,
          isMainSection: true,
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
    this.setState({
      skillSections: this.state.skillSections
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

    const newKey = uniqid();
    this.setState({
      section: {
        key: newKey,
        sectionKey: newKey,
        isMainSection: true,
      },
    });
  };

  removeSection = (sectionId) => {
    this.setState({
      skillSections: this.state.skillSections
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
    const { skillSections } = this.state;
    if (skillSections.length === 0) {
      return (
        <div>
          <AddBtn sectionKey={uniqid()} createSection={this.createSection} />
        </div>
      );
    } else {
      return (
        <div>
          {skillSections.map((section) => {
            return (
              <SkillSection
                key={section.key}
                sectionKey={section.sectionKey}
                isMainSection={section.isMainSection}
                createSection={this.createSection}
                removeSection={this.removeSection}
              />
            );
          })}
        </div>
      );
    }
  }
}

export default Skill;
