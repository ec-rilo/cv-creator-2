import React, { Component } from 'react';

class AddRemoveBtn extends Component {
  render() {
    const { section, createSection, updateBtn } = this.props;
    return (
      <div className="add-delete-btn-container">
        <button className="add-delete-btn" type="button">
          Delete
        </button>
        <button
          onClick={() => {
            createSection(section);
            updateBtn();
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
    const { section, createSection } = this.props;
    return (
      <div className="add-delete-btn-container">
        <button className="add-delete-btn" type="button">
          Delete
        </button>
      </div>
    );
  }
}

export { AddRemoveBtn, DeleteBtn };
