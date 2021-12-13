import React, { useState, useEffect } from 'react';
import { ExperienceSection } from './Sections';
import { AddBtn } from '../Buttons/AddRemoveBtn';
import uniqid from 'uniqid';

const Experience = (props) => {
  const { updateCategories } = props;
  const key1 = uniqid();
  const key2 = uniqid();
  const [experienceSections, setExperienceSections] = useState([
    {
      key: key1,
      sectionKey: key1,
      isMainSection: true,
      data: '',
    },
  ]);
  const [section, setSection] = useState({
    key: key2,
    sectionKey: key2,
    isMainSection: true,
  });

  const createSection = () => {
    setExperienceSections(
      experienceSections.concat(section).map((section, index, array) => {
        if (index === array.length - 1) {
          section.isMainSection = true;
          return section;
        } else {
          section.isMainSection = false;
          return section;
        }
      })
    );

    const newKey = uniqid();
    setSection({ key: newKey, sectionKey: newKey, isMainSection: true });
  };

  const updateSection = (section, key) => {
    let tempArr = [...experienceSections];
    tempArr.forEach((obj) => {
      if (obj.key === key) {
        obj.data = section;
      }
    });

    setExperienceSections(tempArr);
  };
  useEffect(() => {
    let newArr = [];
    experienceSections.forEach((section) => {
      newArr.push(section.data);
    });
    updateCategories('Experience', newArr);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [experienceSections]);

  const removeSection = (sectionId) => {
    setExperienceSections(
      experienceSections
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

  if (experienceSections.length === 0) {
    return (
      <div>
        <AddBtn sectionKey={uniqid()} createSection={createSection} />
      </div>
    );
  } else {
    return (
      <div>
        {experienceSections.map((section) => {
          return (
            <ExperienceSection
              key={section.key}
              sectionKey={section.sectionKey}
              isMainSection={section.isMainSection}
              createSection={createSection}
              removeSection={removeSection}
              updateSection={updateSection}
            />
          );
        })}
      </div>
    );
  }
};

export default Experience;
