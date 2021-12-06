import React, { Component } from 'react';
import {
  TextInput,
  ImgInput,
  TelInput,
  EmailInput,
  DescriptionInput,
} from '../Inputs/MainInputs';
import { AddRemoveBtn, DeleteBtn } from '../Buttons/AddRemoveBtn';
import uniqid from 'uniqid';

class PersonalInfoSection extends Component {
  render() {
    return (
      <div>
        <TextInput
          inputInfo={{
            text: 'First Name',
            forProp: 'first-name',
            key: uniqid(),
          }}
        />
        <TextInput
          inputInfo={{
            text: 'Last Name',
            forProp: 'last-name',
            key: uniqid(),
          }}
        />
        <TextInput
          inputInfo={{
            text: 'Title',
            forProp: 'title',
            key: uniqid(),
          }}
        />
        <ImgInput
          inputInfo={{
            text: 'Image',
            forProp: 'image-file',
            key: uniqid(),
          }}
        />
        <TextInput
          inputInfo={{
            text: 'City',
            forProp: 'city',
            key: uniqid(),
          }}
        />
        <TextInput
          inputInfo={{
            text: 'State',
            forProp: 'state',
            key: uniqid(),
          }}
        />
        <TelInput
          inputInfo={{
            text: 'Phone number',
            forProp: 'phone',
            key: uniqid(),
          }}
        />
        <EmailInput
          inputInfo={{
            text: 'Email',
            forProp: 'email',
            key: uniqid(),
          }}
        />
        <TextInput
          inputInfo={{
            text: 'Linkedin link',
            forProp: 'linkedin-link',
            key: uniqid(),
          }}
        />
        <DescriptionInput
          inputInfo={{
            text: 'Description',
            forProp: 'description',
            key: uniqid(),
          }}
        />
      </div>
    );
  }
}

class ExperienceSection extends Component {
  render() {
    const { isMainSection, createSection, removeSection, sectionKey } =
      this.props;

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
        />
        <TextInput
          inputInfo={{
            text: 'Company',
            forProp: 'company',
            key: uniqid(),
          }}
        />
        <TextInput
          inputInfo={{
            text: 'location',
            forProp: 'job-location',
            key: uniqid(),
          }}
        />
        <TextInput
          inputInfo={{
            text: 'From',
            forProp: 'start-date',
            key: uniqid(),
          }}
        />
        <TextInput
          inputInfo={{
            text: 'To',
            forProp: 'end-date',
            key: uniqid(),
          }}
        />
        {btn}
      </div>
    );
  }
}

class EducationSection extends Component {
  render() {
    return (
      <div>
        <TextInput
          inputInfo={{
            text: 'University Name',
            forProp: 'uni-name',
            key: uniqid(),
          }}
        />
        <TextInput
          inputInfo={{
            text: 'City',
            forProp: 'uni-city',
            key: uniqid(),
          }}
        />
        <TextInput
          inputInfo={{
            text: 'Degree',
            forProp: 'degree',
            key: uniqid(),
          }}
        />
        <TextInput
          inputInfo={{
            text: 'From',
            forProp: 'uni-start-date',
            key: uniqid(),
          }}
        />
        <TextInput
          inputInfo={{
            text: 'To',
            forProp: 'uni-end-date',
            key: uniqid(),
          }}
        />
      </div>
    );
  }
}

export { PersonalInfoSection, ExperienceSection, EducationSection };
