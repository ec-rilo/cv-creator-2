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
  constructor(props) {
    super(props);

    this.state = {
      data: {
        'first-name': '',
        'last-name': '',
        title: '',
        'image-file': '',
        city: '',
        state: '',
        tel: '',
        email: '',
        linkedin: '',
        description: '',
      },
    };

    this.updateData = this.updateData.bind(this);
  }

  updateData = (inputName, value) => {
    const newObj = { ...this.state.data };

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
        this.setState({ data: newObj }, () => {
          this.props.updateCategories('Personal Info', this.state.data);
        });
      }
    });
  };

  render() {
    return (
      <div>
        <TextInput
          inputInfo={{
            text: 'First Name',
            forProp: 'first-name',
            key: uniqid(),
          }}
          updateData={this.updateData}
        />
        <TextInput
          inputInfo={{
            text: 'Last Name',
            forProp: 'last-name',
            key: uniqid(),
          }}
          updateData={this.updateData}
        />
        <TextInput
          inputInfo={{
            text: 'Title',
            forProp: 'title',
            key: uniqid(),
          }}
          updateData={this.updateData}
        />
        <ImgInput
          inputInfo={{
            text: 'Image',
            forProp: 'image-file',
            key: uniqid(),
          }}
          updateData={this.updateData}
        />
        <TextInput
          inputInfo={{
            text: 'City',
            forProp: 'city',
            key: uniqid(),
          }}
          updateData={this.updateData}
        />
        <TextInput
          inputInfo={{
            text: 'State',
            forProp: 'state',
            key: uniqid(),
          }}
          updateData={this.updateData}
        />
        <TelInput
          inputInfo={{
            text: 'Phone number',
            forProp: 'phone',
            key: uniqid(),
          }}
          updateData={this.updateData}
        />
        <EmailInput
          inputInfo={{
            text: 'Email',
            forProp: 'email',
            key: uniqid(),
          }}
          updateData={this.updateData}
        />
        <TextInput
          inputInfo={{
            text: 'Linkedin link',
            forProp: 'linkedin-link',
            key: uniqid(),
          }}
          updateData={this.updateData}
        />
        <DescriptionInput
          inputInfo={{
            text: 'Description',
            forProp: 'description',
            key: uniqid(),
          }}
          updateData={this.updateData}
        />
      </div>
    );
  }
}

class ExperienceSection extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: {
        position: '',
        company: '',
        'job-location': '',
        'start-date': '',
        'end-date': '',
      },
    };

    this.updateData = this.updateData.bind(this);
  }

  updateData = (inputName, value) => {
    const newObj = { ...this.state.data };

    const sectionNames = [
      'position',
      'company',
      'job-location',
      'start-date',
      'end-date',
    ];

    sectionNames.forEach((section) => {
      if (section === inputName) {
        newObj[inputName] = value;
        this.setState({ data: newObj }, () => {
          this.props.updateSection(this.state.data, this.props.sectionKey);
        });
      }
    });
  };

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
          updateData={this.updateData}
        />
        <TextInput
          inputInfo={{
            text: 'Company',
            forProp: 'company',
            key: uniqid(),
          }}
          updateData={this.updateData}
        />
        <TextInput
          inputInfo={{
            text: 'location',
            forProp: 'job-location',
            key: uniqid(),
          }}
          updateData={this.updateData}
        />
        <TextInput
          inputInfo={{
            text: 'From',
            forProp: 'start-date',
            key: uniqid(),
          }}
          updateData={this.updateData}
        />
        <TextInput
          inputInfo={{
            text: 'To',
            forProp: 'end-date',
            key: uniqid(),
          }}
          updateData={this.updateData}
        />
        {btn}
      </div>
    );
  }
}

class EducationSection extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: {
        'uni-name': '',
        degree: '',
        'uni-start-date': '',
        'uni-end-date': '',
      },
    };

    this.updateData = this.updateData.bind(this);
  }

  updateData = (inputName, value) => {
    const newObj = { ...this.state.data };

    const sectionNames = [
      'uni-name',
      'degree',
      'uni-start-date',
      'uni-end-date',
    ];

    sectionNames.forEach((section) => {
      if (section === inputName) {
        newObj[inputName] = value;
        this.setState({ data: newObj }, () => {
          this.props.updateEducationSections(
            this.state.data,
            this.props.sectionKey
          );
        });
      }
    });
  };

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
      <div title="This is an Education Section">
        <TextInput
          inputInfo={{
            text: 'University Name',
            forProp: 'uni-name',
            key: uniqid(),
          }}
          updateData={this.updateData}
        />
        <TextInput
          inputInfo={{
            text: 'Degree',
            forProp: 'degree',
            key: uniqid(),
          }}
          updateData={this.updateData}
        />
        <TextInput
          inputInfo={{
            text: 'From',
            forProp: 'uni-start-date',
            key: uniqid(),
          }}
          updateData={this.updateData}
        />
        <TextInput
          inputInfo={{
            text: 'To',
            forProp: 'uni-end-date',
            key: uniqid(),
          }}
          updateData={this.updateData}
        />
        {btn}
      </div>
    );
  }
}

class SkillSection extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: {
        'skill-name': '',
      },
    };

    this.updateData = this.updateData.bind(this);
  }

  updateData = (inputName, value) => {
    const newObj = { ...this.state.data };

    const sectionNames = ['skill-name'];

    sectionNames.forEach((section) => {
      if (section === inputName) {
        newObj[inputName] = value;
        this.setState({ data: newObj }, () => {
          this.props.updateSkillsSection(
            this.state.data,
            this.props.sectionKey
          );
        });
      }
    });
  };

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
      <div title="This is a Skills Section">
        <TextInput
          inputInfo={{
            text: 'Skill',
            forProp: 'skill-name',
            key: uniqid(),
          }}
          updateData={this.updateData}
        />
        {btn}
      </div>
    );
  }
}

export {
  PersonalInfoSection,
  ExperienceSection,
  EducationSection,
  SkillSection,
};
