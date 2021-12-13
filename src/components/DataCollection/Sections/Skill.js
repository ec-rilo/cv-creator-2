import React, { useState, useEffect } from 'react';
import { SkillSection } from './Sections';
import { AddBtn } from '../Buttons/AddRemoveBtn';
import uniqid from 'uniqid';

const Skill = (props) => {
  const { updateCategories } = props;
  const key1 = uniqid();
  const key2 = uniqid();
  const [skillSections, setSkillSections] = useState([
    {
      key: key1,
      sectionKey: key1,
      isMainSection: true,
    },
  ]);
  const [section, setSection] = useState({
    key: key2,
    sectionKey: key2,
    isMainSection: true,
  });

  const createSection = () => {
    setSkillSections(
      skillSections.concat(section).map((section, index, array) => {
        if (index === array.length - 1) {
          section.isMainSection = true;
          return section;
        } else {
          section.isMainSection = false;
          return section;
        }
      })
    );
  };

  const updateSkillsSection = (section, key) => {
    let tempArr = [...skillSections];
    tempArr.forEach((obj) => {
      if (obj.key === key) {
        obj.data = section;
      }
    });

    setSkillSections(tempArr);
  };
  useEffect(() => {
    let newArr = [];
    skillSections.forEach((section) => {
      newArr.push(section.data);
    });

    updateCategories('Skills', newArr);
  }, [skillSections]);

  const removeSection = (sectionId) => {
    setSkillSections(
      skillSections
        .filter((section) => section.sectionKey !== sectionId)
        .map((section, index, array) => {
          if (index === array.length - 1) {
            section.isMainSection = true;
            return section;
          } else {
            section.isMainSection = false;
            return section;
          }
        })
    );
  };

  if (skillSections.length === 0) {
    return (
      <div>
        <AddBtn sectionKey={uniqid()} createSection={createSection} />
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
              createSection={createSection}
              removeSection={removeSection}
              updateSkillsSection={updateSkillsSection}
            />
          );
        })}
      </div>
    );
  }
};

export default Skill;
