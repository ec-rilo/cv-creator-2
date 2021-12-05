import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import DataCollection from '../DataCollection';

describe('Experience Section', () => {
  test('can render 1 new section when "add" button is clicked', () => {
    render(<DataCollection />);
    const btns = screen.getAllByRole('button');
    const addBtn = btns.find((btn) => btn.innerHTML === 'Add');
    fireEvent.click(addBtn);
    const sections = screen.getAllByTitle('This is an Experience Section');
    expect(sections.length).toBe(2);
  });
});
