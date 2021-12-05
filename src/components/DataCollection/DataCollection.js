import React, { Component } from 'react';
import '../../styles/DataCollection.css';
import Category from './Category';
import ResetBtn from './Buttons/ResetBtn';
import Header from './Header/Header';
import { PersonalInfoSection } from './Sections/Sections';
import Experience from './Sections/experience';

class DataCollection extends Component {
  render() {
    return (
      <div className="data-collection-container">
        <Header />
        <form action="#" method="#">
          <div className="info-section">
            <Category name="Personal Information" />
            <PersonalInfoSection />
          </div>
          <div
            className="info-section"
            title="This is a section of experiences"
          >
            <Category name="Experience" />
            <Experience createSection={this.createSection} />
          </div>
          <ResetBtn />
        </form>
      </div>
    );
  }
}

export default DataCollection;
