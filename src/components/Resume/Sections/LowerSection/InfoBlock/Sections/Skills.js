import React, { Component } from 'react';
import CategoryTitleRight from './CategoryTitleRight';
import uniqid from 'uniqid';
import SkillsSection from './SkillsSection';

class Skills extends Component {
  render() {
    const { data } = this.props;
    return (
      <div className="resume-section-container">
        <CategoryTitleRight text="Skills" />
        <div className="skills-section-container">
          {data[3].length === 0 ? (
            <SkillsSection />
          ) : (
            data[3].map((objData) => {
              console.log(objData);
              return <SkillsSection key={uniqid()} data={objData} />;
            })
          )}
        </div>
      </div>
    );
  }
}

export default Skills;
