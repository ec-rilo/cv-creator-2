import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import DataCollection from '../DataCollection';

describe('Experience Section', () => {
  const addSections = (numOfSections) => {
    for (let i = 0; i < numOfSections; ++i) {
      const btns = screen.getAllByRole('button');
      const addBtn = btns.find((btn) => btn.innerHTML === 'Add');
      fireEvent.click(addBtn);
    }
  };

  test('can render 1 new section when "add" button is clicked', () => {
    render(<DataCollection />);
    const btns = screen.getAllByRole('button');
    const addBtn = btns.find((btn) => btn.innerHTML === 'Add');
    fireEvent.click(addBtn);
    const sections = screen.getAllByTitle('This is an Experience Section');
    expect(sections.length).toBe(2);
  });

  test('renders multiple(3) new sections when "add" button is clicked', () => {
    render(<DataCollection />);
    addSections(3);
    const sections = screen.getAllByTitle('This is an Experience Section');
    expect(sections.length).toBe(4);
  });

  test('renders "Add" btn on default load', () => {
    render(<DataCollection />);
    const btns = screen.getAllByRole('button');
    const addBtn = btns.find((btn) => btn.innerHTML === 'Add');
    expect(addBtn).toBeInTheDocument();
  });

  test('renders "Delete" btn on default load', () => {
    render(<DataCollection />);
    const btns = screen.getAllByRole('button');
    const deleteBtn = btns.find((btn) => btn.innerHTML === 'Delete');
    expect(deleteBtn).toBeInTheDocument();
  });

  test('when multiple sections are rendered, only the last section has an "Add" and "Delete" button', () => {
    render(<DataCollection />);
    addSections(4);
    const sections = screen.getAllByTitle('This is an Experience Section');
    const lastSection = sections.slice(-1)[0];
    const btnsContainer = lastSection.lastChild.children;
    expect(btnsContainer.length).toBe(2);
  });

  test('when multiple sections are rendered, all but the last section will only have the "Delete" button', () => {
    render(<DataCollection />);
    addSections(4);
    const sections = screen.getAllByTitle('This is an Experience Section');
    for (let i = 0; i < sections.length - 1; ++i) {
      expect(sections[i].lastChild.children.length).toBe(1);
    }
  });

  test('"Delete" button can delete the default experience section', () => {
    render(<DataCollection />);
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
});
