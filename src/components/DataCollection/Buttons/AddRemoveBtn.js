import React, { Component } from 'react';

const AddRemoveBtn = (props) => {
  const { createSection, removeSection, sectionKey } = props;
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
          createSection();
        }}
        className="add-delete-btn"
        type="button"
      >
        Add
      </button>
    </div>
  );
};

const DeleteBtn = (props) => {
  const { removeSection, sectionKey } = props;
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
};

const AddBtn = (props) => {
  const { createSection } = props;
  return (
    <div className="add-delete-btn-container">
      <button
        onClick={() => {
          createSection();
        }}
        className="add-delete-btn"
        type="button"
      >
        Add
      </button>
    </div>
  );
};

export { AddRemoveBtn, DeleteBtn, AddBtn };
