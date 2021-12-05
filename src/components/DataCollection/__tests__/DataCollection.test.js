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
});
