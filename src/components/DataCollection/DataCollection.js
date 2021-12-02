import React, { Component } from 'react';
import '../../styles/DataCollection.css';
import InfoContainer from './InfoContainer';
import Category from './Category';
import TextInput from './TextInput';
import ImgInput from './ImgInput';
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
          </div>
        </form>
      </div>
    );
  }
}

export default DataCollection;
