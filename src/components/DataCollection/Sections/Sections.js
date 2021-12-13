import React, { useEffect, useState } from 'react';
import {
  TextInput,
  ImgInput,
  TelInput,
  EmailInput,
  DescriptionInput,
} from '../Inputs/MainInputs';
import { AddRemoveBtn, DeleteBtn } from '../Buttons/AddRemoveBtn';
import uniqid from 'uniqid';

const PersonalInfoSection = (props) => {
  const { updateCategories } = props;
  const [data, setData] = useState({
    'first-name': '',
    'last-name': '',
    title: '',
    'image-file': '',
    city: '',
    state: '',
    phone: '',
    email: '',
    'linkedin-link': '',
    description: '',
  });

  const updateData = (inputName, value) => {
    const newObj = { ...data };

    const sectionNames = [
      'description',
      'title',
      'first-name',
      'last-name',
      'image-file',
      'city',
      'state',
      'phone',
      'email',
      'linkedin-link',
    ];

    sectionNames.forEach((sectionName) => {
      if (sectionName === inputName) {
        newObj[inputName] = value;
        setData(newObj);
      }
    });
  };
  useEffect(() => {
    updateCategories('Personal Info', data);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data]);

  return (
    <div>
      <TextInput
        inputInfo={{
          text: 'First Name',
          forProp: 'first-name',
          key: uniqid(),
        }}
        updateData={updateData}
      />
      <TextInput
        inputInfo={{
          text: 'Last Name',
          forProp: 'last-name',
          key: uniqid(),
        }}
        updateData={updateData}
      />
      <TextInput
        inputInfo={{
          text: 'Title',
          forProp: 'title',
          key: uniqid(),
        }}
        updateData={updateData}
      />
      <ImgInput
        inputInfo={{
          text: 'Image',
          forProp: 'image-file',
          key: uniqid(),
        }}
        updateData={updateData}
      />
      <TextInput
        inputInfo={{
          text: 'City',
          forProp: 'city',
          key: uniqid(),
        }}
        updateData={updateData}
      />
      <TextInput
        inputInfo={{
          text: 'State',
          forProp: 'state',
          key: uniqid(),
        }}
        updateData={updateData}
      />
      <TelInput
        inputInfo={{
          text: 'Phone number',
          forProp: 'phone',
          key: uniqid(),
        }}
        updateData={updateData}
      />
      <EmailInput
        inputInfo={{
          text: 'Email',
          forProp: 'email',
          key: uniqid(),
        }}
        updateData={updateData}
      />
      <TextInput
        inputInfo={{
          text: 'Linkedin link',
          forProp: 'linkedin-link',
          key: uniqid(),
        }}
        updateData={updateData}
      />
      <DescriptionInput
        inputInfo={{
          text: 'Description',
          forProp: 'description',
          key: uniqid(),
        }}
        updateData={updateData}
      />
    </div>
  );
};

const ExperienceSection = (props) => {
  const {
    sectionKey,
    updateSection,
    isMainSection,
    createSection,
    removeSection,
  } = props;
  const [data, setData] = useState({
    position: '',
    company: '',
    'job-location': '',
    'start-date': '',
    'end-date': '',
    description: '',
  });

  const updateData = (inputName, value) => {
    const newObj = { ...data };

    const sectionNames = [
      'position',
      'company',
      'job-location',
      'start-date',
      'end-date',
      'description',
    ];

    sectionNames.forEach((section) => {
      if (section === inputName) {
        newObj[inputName] = value;
        setData(newObj);
      }
    });
  };
  useEffect(() => {
    updateSection(data, sectionKey);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data]);

  let btn;
  if (isMainSection === true) {
    btn = (
      <AddRemoveBtn
        sectionKey={sectionKey}
        isMainSection={isMainSection}
        createSection={createSection}
        removeSection={removeSection}
      />
    );
  } else
    btn = <DeleteBtn removeSection={removeSection} sectionKey={sectionKey} />;

  return (
    <div title="This is an Experience Section">
      <TextInput
        inputInfo={{
          text: 'Position',
          forProp: 'position',
          key: uniqid(),
        }}
        updateData={updateData}
      />
      <TextInput
        inputInfo={{
          text: 'Company',
          forProp: 'company',
          key: uniqid(),
        }}
        updateData={updateData}
      />
      <TextInput
        inputInfo={{
          text: 'location',
          forProp: 'job-location',
          key: uniqid(),
        }}
        updateData={updateData}
      />
      <TextInput
        inputInfo={{
          text: 'From',
          forProp: 'start-date',
          key: uniqid(),
        }}
        updateData={updateData}
      />
      <TextInput
        inputInfo={{
          text: 'To',
          forProp: 'end-date',
          key: uniqid(),
        }}
        updateData={updateData}
      />
      <DescriptionInput
        inputInfo={{
          text: 'Description',
          forProp: 'description',
          key: uniqid(),
        }}
        updateData={updateData}
      />
      {btn}
    </div>
  );
};

const EducationSection = (props) => {
  const {
    isMainSection,
    createSection,
    removeSection,
    sectionKey,
    updateEducationSections,
  } = props;
  const [data, setData] = useState({
    'uni-name': '',
    degree: '',
    'uni-start-date': '',
    'uni-end-date': '',
  });

  const updateData = (inputName, value) => {
    const newObj = { ...data };

    const sectionNames = [
      'uni-name',
      'degree',
      'uni-start-date',
      'uni-end-date',
    ];

    sectionNames.forEach((section) => {
      if (section === inputName) {
        newObj[inputName] = value;
        setData(newObj);
      }
    });
  };
  useEffect(() => {
    updateEducationSections(data, sectionKey);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data]);

  let btn;
  if (isMainSection === true) {
    btn = (
      <AddRemoveBtn
        sectionKey={sectionKey}
        isMainSection={isMainSection}
        createSection={createSection}
        removeSection={removeSection}
      />
    );
  } else
    btn = <DeleteBtn removeSection={removeSection} sectionKey={sectionKey} />;

  return (
    <div title="This is an Education Section">
      <TextInput
        inputInfo={{
          text: 'University Name',
          forProp: 'uni-name',
          key: uniqid(),
        }}
        updateData={updateData}
      />
      <TextInput
        inputInfo={{
          text: 'Degree',
          forProp: 'degree',
          key: uniqid(),
        }}
        updateData={updateData}
      />
      <TextInput
        inputInfo={{
          text: 'From',
          forProp: 'uni-start-date',
          key: uniqid(),
        }}
        updateData={updateData}
      />
      <TextInput
        inputInfo={{
          text: 'To',
          forProp: 'uni-end-date',
          key: uniqid(),
        }}
        updateData={updateData}
      />
      {btn}
    </div>
  );
};

const SkillSection = (props) => {
  const {
    isMainSection,
    createSection,
    removeSection,
    sectionKey,
    updateSkillsSection,
  } = props;
  const [data, setData] = useState({ 'skill-name': '' });

  const updateData = (inputName, value) => {
    const newObj = { ...data };

    const sectionNames = ['skill-name'];

    sectionNames.forEach((section) => {
      if (section === inputName) {
        newObj[inputName] = value;

        setData(newObj);
      }
    });
  };
  useEffect(() => {
    updateSkillsSection(data, sectionKey);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data]);

  let btn;
  if (isMainSection === true) {
    btn = (
      <AddRemoveBtn
        sectionKey={sectionKey}
        isMainSection={isMainSection}
        createSection={createSection}
        removeSection={removeSection}
      />
    );
  } else
    btn = <DeleteBtn removeSection={removeSection} sectionKey={sectionKey} />;

  return (
    <div title="This is a Skills Section">
      <TextInput
        inputInfo={{
          text: 'Skill',
          forProp: 'skill-name',
          key: uniqid(),
        }}
        updateData={updateData}
      />
      {btn}
    </div>
  );
};

export {
  PersonalInfoSection,
  ExperienceSection,
  EducationSection,
  SkillSection,
};
