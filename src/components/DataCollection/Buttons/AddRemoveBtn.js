import React, { Component } from 'react';

class AddRemoveBtn extends Component {
  render() {
    const { section, createSection } = this.props;
    return (
      <div className="add-delete-btn-container">
        <button className="add-delete-btn" type="button">
          Delete
        </button>
        <button
          onClick={() => createSection(section)}
          className="add-delete-btn"
          type="button"
        >
          Add
        </button>
      </div>
    );
  }
}

export default AddRemoveBtn;
