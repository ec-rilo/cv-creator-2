import React, { Component } from 'react';
import {
  TextInput,
  ImgInput,
  TelInput,
  EmailInput,
  DescriptionInput,
} from '../Inputs/MainInputs';
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

export { PersonalInfoSection };
