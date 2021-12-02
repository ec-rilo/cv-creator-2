import React, { Component } from 'react';
import '../../styles/DataCollection.css';
import InfoContainer from './InfoContainer';
import Category from './Category';
import TextInput from './TextInput';
import TelInput from './TelInput';
import ImgInput from './ImgInput';
import EmailInput from './EmailInput';
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
                text: 'Linkedin Link',
                forProp: 'linkedin-link',
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
