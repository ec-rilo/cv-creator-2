import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import DataCollection from '../DataCollection';
import Experience from '../Sections/experience';
import Education from '../Sections/Education';
import Skill from '../Sections/Skill';

describe('Experience Section', () => {
  const addSections = (numOfSections) => {
    for (let i = 0; i < numOfSections; ++i) {
      const btns = screen.getAllByRole('button');
      const addBtn = btns.find((btn) => btn.innerHTML === 'Add');
      fireEvent.click(addBtn);
    }
  };

  test('can render 1 new section when "add" button is clicked', () => {
    render(<Experience />);
    const btns = screen.getAllByRole('button');
    const addBtn = btns.find((btn) => btn.innerHTML === 'Add');
    fireEvent.click(addBtn);
    const sections = screen.getAllByTitle('This is an Experience Section');
    expect(sections.length).toBe(2);
  });

  test('renders multiple(3) new sections when "add" button is clicked', () => {
    render(<Experience />);
    addSections(3);
    const sections = screen.getAllByTitle('This is an Experience Section');
    expect(sections.length).toBe(4);
  });

  test('renders "Add" btn on default load', () => {
    render(<Experience />);
    const btns = screen.getAllByRole('button');
    const addBtn = btns.find((btn) => btn.innerHTML === 'Add');
    expect(addBtn).toBeInTheDocument();
  });

  test('renders "Delete" btn on default load', () => {
    render(<Experience />);
    const btns = screen.getAllByRole('button');
    const deleteBtn = btns.find((btn) => btn.innerHTML === 'Delete');
    expect(deleteBtn).toBeInTheDocument();
  });

  test('when multiple sections are rendered, only the last section has an "Add" and "Delete" button', () => {
    render(<Experience />);
    addSections(4);
    const sections = screen.getAllByTitle('This is an Experience Section');
    const lastSection = sections.slice(-1)[0];
    const btnsContainer = lastSection.lastChild.children;
    expect(btnsContainer.length).toBe(2);
  });

  test('when multiple sections are rendered, all but the last section will only have the "Delete" button', () => {
    render(<Experience />);
    addSections(4);
    const sections = screen.getAllByTitle('This is an Experience Section');
    for (let i = 0; i < sections.length - 1; ++i) {
      expect(sections[i].lastChild.children.length).toBe(1);
    }
  });

  test('"Delete" button can delete the default experience section', () => {
    render(<Experience />);
    const defaultSection = screen.getByTitle('This is an Experience Section');
    const deleteBtn = defaultSection.lastChild.firstChild;
    fireEvent.click(deleteBtn);
    expect(defaultSection).not.toBeInTheDocument();
  });

  test('Only "AddBtn" appears when there are no sections', () => {
    render(<DataCollection />);
    const experienceContainer = screen.getByTitle(
      'This is a section of experiences'
    );
    const defaultSection = screen.getByTitle('This is an Experience Section');
    const deleteBtn = defaultSection.lastChild.firstChild;
    fireEvent.click(deleteBtn);
    const btnContainer = experienceContainer.firstChild.nextSibling;
    const numOfBtns = btnContainer.children.length;
    const addBtn = btnContainer.firstChild.firstChild;

    expect(addBtn.innerHTML).toBe('Add');
    expect(numOfBtns).toBe(1);
  });

  test('"Delete" button deletes specific sections', () => {
    render(<Experience />);
    addSections(4);
    const sections = screen.getAllByTitle('This is an Experience Section');
    const thirdSection = sections[2];
    const deleteBtn = thirdSection.lastChild.children[0];
    fireEvent.click(deleteBtn);
    expect(thirdSection).not.toBeInTheDocument();
  });

  test('the last section in an array of sections is only allowed to have "add" & "delete" btn', () => {
    render(<Experience />);
    addSections(4);
    let sections = screen.getAllByTitle('This is an Experience Section');
    let lastSection = sections[sections.length - 1];
    for (let i = 0; i < sections.length - 1; ++i) {
      const btnsContainer = sections[i].lastChild.children;
      expect(btnsContainer.length).toBe(1);
    }
    expect(lastSection.lastChild.children.length).toBe(2);

    const deleteBtn = lastSection.lastChild.children[0];
    fireEvent.click(deleteBtn);
    sections = screen.getAllByTitle('This is an Experience Section');
    lastSection = sections[sections.length - 1];
    for (let i = 0; i < sections.length - 1; ++i) {
      const btnsContainer = sections[i].lastChild.children;
      expect(btnsContainer.length).toBe(1);
    }
    expect(lastSection.lastChild.children.length).toBe(2);
  });
});

describe('Education Section', () => {
  const addSections = (numOfSections) => {
    for (let i = 0; i < numOfSections; ++i) {
      const btns = screen.getAllByRole('button');
      const addBtn = btns.find((btn) => btn.innerHTML === 'Add');
      fireEvent.click(addBtn);
    }
  };

  test('can render 1 new section when "add" button is clicked', () => {
    render(<Education />);
    const btns = screen.getAllByRole('button');
    const addBtn = btns.find((btn) => btn.innerHTML === 'Add');
    fireEvent.click(addBtn);
    const sections = screen.getAllByTitle('This is an Education Section');
    expect(sections.length).toBe(2);
  });

  test('renders multiple(3) new sections when "add" button is clicked', () => {
    render(<Education />);
    addSections(3);
    const sections = screen.getAllByTitle('This is an Education Section');
    expect(sections.length).toBe(4);
  });

  test('renders "Add" btn on default load', () => {
    render(<Education />);
    const btns = screen.getAllByRole('button');
    const addBtn = btns.find((btn) => btn.innerHTML === 'Add');
    expect(addBtn).toBeInTheDocument();
  });

  test('renders "Delete" btn on default load', () => {
    render(<Education />);
    const btns = screen.getAllByRole('button');
    const deleteBtn = btns.find((btn) => btn.innerHTML === 'Delete');
    expect(deleteBtn).toBeInTheDocument();
  });

  test('when multiple sections are rendered, only the last section has an "Add" and "Delete" button', () => {
    render(<Education />);
    addSections(4);
    const sections = screen.getAllByTitle('This is an Education Section');
    const lastSection = sections.slice(-1)[0];
    const btnsContainer = lastSection.lastChild.children;
    expect(btnsContainer.length).toBe(2);
  });

  test('when multiple sections are rendered, all but the last section will only have the "Delete" button', () => {
    render(<Education />);
    addSections(4);
    const sections = screen.getAllByTitle('This is an Education Section');
    for (let i = 0; i < sections.length - 1; ++i) {
      expect(sections[i].lastChild.children.length).toBe(1);
    }
  });

  test('"Delete" button can delete the default experience section', () => {
    render(<Education />);
    const defaultSection = screen.getByTitle('This is an Education Section');
    const deleteBtn = defaultSection.lastChild.firstChild;
    fireEvent.click(deleteBtn);
    expect(defaultSection).not.toBeInTheDocument();
  });

  test('Only "AddBtn" appears when there are no sections', () => {
    render(<DataCollection />);
    const experienceContainer = screen.getByTitle(
      'This is a section of education'
    );
    const defaultSection = screen.getByTitle('This is an Education Section');
    const deleteBtn = defaultSection.lastChild.firstChild;
    fireEvent.click(deleteBtn);
    const btnContainer = experienceContainer.firstChild.nextSibling;
    const numOfBtns = btnContainer.children.length;
    const addBtn = btnContainer.firstChild.firstChild;

    expect(addBtn.innerHTML).toBe('Add');
    expect(numOfBtns).toBe(1);
  });

  test('"Delete" button deletes specific sections', () => {
    render(<Education />);
    addSections(4);
    const sections = screen.getAllByTitle('This is an Education Section');
    const thirdSection = sections[2];
    const deleteBtn = thirdSection.lastChild.children[0];
    fireEvent.click(deleteBtn);
    expect(thirdSection).not.toBeInTheDocument();
  });

  test('the last section in an array of sections is only allowed to have "add" & "delete" btn', () => {
    render(<Education />);
    addSections(4);
    let sections = screen.getAllByTitle('This is an Education Section');
    let lastSection = sections[sections.length - 1];
    for (let i = 0; i < sections.length - 1; ++i) {
      const btnsContainer = sections[i].lastChild.children;
      expect(btnsContainer.length).toBe(1);
    }
    expect(lastSection.lastChild.children.length).toBe(2);

    const deleteBtn = lastSection.lastChild.children[0];
    fireEvent.click(deleteBtn);
    sections = screen.getAllByTitle('This is an Education Section');
    lastSection = sections[sections.length - 1];
    for (let i = 0; i < sections.length - 1; ++i) {
      const btnsContainer = sections[i].lastChild.children;
      expect(btnsContainer.length).toBe(1);
    }
    expect(lastSection.lastChild.children.length).toBe(2);
  });
});

describe('Skills Section', () => {
  const addSections = (numOfSections) => {
    for (let i = 0; i < numOfSections; ++i) {
      const btns = screen.getAllByRole('button');
      const addBtn = btns.find((btn) => btn.innerHTML === 'Add');
      fireEvent.click(addBtn);
    }
  };

  test('can render 1 new section when "add" button is clicked', () => {
    render(<Skill />);
    const btns = screen.getAllByRole('button');
    const addBtn = btns.find((btn) => btn.innerHTML === 'Add');
    fireEvent.click(addBtn);
    const sections = screen.getAllByTitle('This is a Skills Section');
    expect(sections.length).toBe(2);
  });

  test('renders multiple(3) new sections when "add" button is clicked', () => {
    render(<Skill />);
    addSections(3);
    const sections = screen.getAllByTitle('This is a Skills Section');
    expect(sections.length).toBe(4);
  });

  test('renders "Add" btn on default load', () => {
    render(<Skill />);
    const btns = screen.getAllByRole('button');
    const addBtn = btns.find((btn) => btn.innerHTML === 'Add');
    expect(addBtn).toBeInTheDocument();
  });

  test('renders "Delete" btn on default load', () => {
    render(<Skill />);
    const btns = screen.getAllByRole('button');
    const deleteBtn = btns.find((btn) => btn.innerHTML === 'Delete');
    expect(deleteBtn).toBeInTheDocument();
  });

  test('when multiple sections are rendered, only the last section has an "Add" and "Delete" button', () => {
    render(<Skill />);
    addSections(4);
    const sections = screen.getAllByTitle('This is a Skills Section');
    const lastSection = sections.slice(-1)[0];
    const btnsContainer = lastSection.lastChild.children;
    expect(btnsContainer.length).toBe(2);
  });

  test('when multiple sections are rendered, all but the last section will only have the "Delete" button', () => {
    render(<Skill />);
    addSections(4);
    const sections = screen.getAllByTitle('This is a Skills Section');
    for (let i = 0; i < sections.length - 1; ++i) {
      expect(sections[i].lastChild.children.length).toBe(1);
    }
  });

  test('"Delete" button can delete the default experience section', () => {
    render(<Skill />);
    const defaultSection = screen.getByTitle('This is a Skills Section');
    const deleteBtn = defaultSection.lastChild.firstChild;
    fireEvent.click(deleteBtn);
    expect(defaultSection).not.toBeInTheDocument();
  });

  test('Only "AddBtn" appears when there are no sections', () => {
    render(<DataCollection />);
    const sectionContainer = screen.getByTitle('This is a section of skills');
    const defaultSection = screen.getByTitle('This is a Skills Section');
    const deleteBtn = defaultSection.lastChild.firstChild;
    fireEvent.click(deleteBtn);
    const btnContainer = sectionContainer.firstChild.nextSibling;
    const numOfBtns = btnContainer.children.length;
    const addBtn = btnContainer.firstChild.firstChild;

    expect(addBtn.innerHTML).toBe('Add');
    expect(numOfBtns).toBe(1);
  });

  test('"Delete" button deletes specific sections', () => {
    render(<Skill />);
    addSections(4);
    const sections = screen.getAllByTitle('This is a Skills Section');
    const thirdSection = sections[2];
    const deleteBtn = thirdSection.lastChild.children[0];
    fireEvent.click(deleteBtn);
    expect(thirdSection).not.toBeInTheDocument();
  });

  test('the last section in an array of sections is only allowed to have "add" & "delete" btn', () => {
    render(<Skill />);
    addSections(4);
    let sections = screen.getAllByTitle('This is a Skills Section');
    let lastSection = sections[sections.length - 1];
    for (let i = 0; i < sections.length - 1; ++i) {
      const btnsContainer = sections[i].lastChild.children;
      expect(btnsContainer.length).toBe(1);
    }
    expect(lastSection.lastChild.children.length).toBe(2);

    const deleteBtn = lastSection.lastChild.children[0];
    fireEvent.click(deleteBtn);
    sections = screen.getAllByTitle('This is a Skills Section');
    lastSection = sections[sections.length - 1];
    for (let i = 0; i < sections.length - 1; ++i) {
      const btnsContainer = sections[i].lastChild.children;
      expect(btnsContainer.length).toBe(1);
    }
    expect(lastSection.lastChild.children.length).toBe(2);
  });
});
