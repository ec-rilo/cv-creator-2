import React, { Component } from 'react';
import '../../styles/DataCollection.css';
import Category from './Category';
import TextInput from './TextInput';
import TelInput from './TelInput';
import ImgInput from './ImgInput';
import EmailInput from './EmailInput';
import DescriptionInput from './DescriptionInput';
import uniqid from 'uniqid';

class DataCollection extends Component {
  render() {
    return (
      <div className="data-collection-container">
        <header>
          <h1>CV Creator</h1>
          <p>Thank you for visiting! Please fill out the information below</p>
        </header>
        <form action="#" method="#">
          <div className="info-section">
            <Category name="Personal Information" />
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
          <div className="info-section">
            <Category name="Experience" />
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
          </div>
        </form>
      </div>
    );
  }
}

export default DataCollection;
