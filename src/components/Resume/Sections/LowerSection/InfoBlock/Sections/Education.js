import React, { Component } from 'react';
import CategoryTitleRight from './CategoryTitleRight';
import EducationSection from './EducationSection';
import uniqid from 'uniqid';

class Education extends Component {
  render() {
    const { data } = this.props;
    return (
      <div className="resume-section-container">
        <CategoryTitleRight text="Education" />
        <div className="education-sections-container">
          {data[2].length === 0 ? (
            <EducationSection />
          ) : (
            data[2][0].map((objData) => {
              return <EducationSection key={uniqid()} data={objData} />;
            })
          )}
        </div>
      </div>
    );
  }
}

export default Education;
