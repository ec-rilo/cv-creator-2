import React, { useState, useEffect } from 'react';
import { EducationSection } from './Sections';
import { AddBtn } from '../Buttons/AddRemoveBtn';
import uniqid from 'uniqid';

const Education = (props) => {
  const { updateCategories } = props;
  const key1 = uniqid();
  const key2 = uniqid();
  const [educationSections, setEducationSections] = useState([
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
    setEducationSections(
      educationSections.concat(section).map((section, index, array) => {
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
    setSection({
      key: newKey,
      sectionKey: newKey,
      isMainSection: true,
    });
  };

  const updateEducationSections = (section, key) => {
    let tempArr = [...educationSections];
    tempArr.forEach((obj) => {
      if (obj.key === key) {
        obj.data = section;
      }
    });

    setEducationSections(tempArr);
  };
  useEffect(() => {
    let newArr = [];
    educationSections.forEach((section) => {
      newArr.push(section.data);
    });
    updateCategories('Education', newArr);
  }, [educationSections]);

  const removeSection = (sectionId) => {
    setEducationSections(
      educationSections
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

  if (educationSections.length === 0) {
    return (
      <div>
        <AddBtn sectionKey={uniqid()} createSection={createSection} />
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
              createSection={createSection}
              removeSection={removeSection}
              updateEducationSections={updateEducationSections}
            />
          );
        })}
      </div>
    );
  }
};

export default Education;
