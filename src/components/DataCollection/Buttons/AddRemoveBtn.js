import React, { Component } from 'react';

class AddRemoveBtn extends Component {
  render() {
    const { section, createSection, removeSection, sectionKey } = this.props;
    return (
      <div className="add-delete-btn-container">
        <button
          onClick={() => removeSection(sectionKey)}
          className="add-delete-btn"
          type="button"
        >
          Delete
        </button>
        <button
          onClick={() => {
            createSection(section);
          }}
          className="add-delete-btn"
          type="button"
        >
          Add
        </button>
      </div>
    );
  }
}

class DeleteBtn extends Component {
  render() {
    const { removeSection, sectionKey } = this.props;
    return (
      <div className="add-delete-btn-container">
        <button
          onClick={() => removeSection(sectionKey)}
          className="add-delete-btn"
          type="button"
        >
          Delete
        </button>
      </div>
    );
  }
}

class AddBtn extends Component {
  render() {
    const { section, createSection } = this.props;
    return (
      <div className="add-delete-btn-container">
        <button
          onClick={() => {
            createSection(section);
          }}
          className="add-delete-btn"
          type="button"
        >
          Add
        </button>
      </div>
    );
  }
}

export { AddRemoveBtn, DeleteBtn, AddBtn };
