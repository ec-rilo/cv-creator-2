import React from 'react';

const TextInput = (props) => {
  const { inputInfo, updateData } = props;

  return (
    <div className="default-input-container">
      <label htmlFor={inputInfo.forProp}></label>
      <input
        type="text"
        id={inputInfo.forProp}
        placeholder={inputInfo.text}
        onChange={(e) => updateData(inputInfo.forProp, e.target.value)}
        required
      ></input>
    </div>
  );
};

const ImgInput = (props) => {
  const { inputInfo, updateData } = props;

  return (
    <div className="default-input-container img-input">
      <label htmlFor={inputInfo.forProp}></label>
      <input
        type="file"
        accept=".png, .jpg, .jpeg"
        id={inputInfo.forProp}
        placeholder={inputInfo.text}
        onChange={(e) => updateData(inputInfo.forProp, e.target.files[0])}
        required
      ></input>
      <p>Image</p>
    </div>
  );
};

const TelInput = (props) => {
  const { inputInfo, updateData } = props;

  return (
    <div className="default-input-container">
      <label htmlFor={inputInfo.forProp}></label>
      <input
        type="tel"
        id={inputInfo.forProp}
        placeholder={inputInfo.text}
        onChange={(e) => updateData(inputInfo.forProp, e.target.value)}
        required
      ></input>
    </div>
  );
};

const EmailInput = (props) => {
  const { inputInfo, updateData } = props;

  return (
    <div className="default-input-container">
      <label htmlFor={inputInfo.forProp}></label>
      <input
        type="email"
        id={inputInfo.forProp}
        placeholder={inputInfo.text}
        onChange={(e) => updateData(inputInfo.forProp, e.target.value)}
        required
      ></input>
    </div>
  );
};

const DescriptionInput = (props) => {
  const { inputInfo, updateData } = props;

  return (
    <div className="description-input-container">
      <label htmlFor={inputInfo.forProp}></label>
      <textarea
        id={inputInfo.forProp}
        placeholder={inputInfo.text}
        onChange={(e) => updateData(inputInfo.forProp, e.target.value)}
        required
      ></textarea>
    </div>
  );
};

export { TextInput, ImgInput, TelInput, EmailInput, DescriptionInput };
