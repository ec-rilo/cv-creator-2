import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { PersonalInfoSection } from '../Sections';

describe('Personal Information Section', () => {
  test('renders 9 text inputs on default load', () => {
    render(<PersonalInfoSection />);
    const inputElems = screen.getAllByRole('textbox');
    expect(inputElems.length).toBe(9);
  });

  test('renders 1 img input on default load', () => {
    render(<PersonalInfoSection />);
    const inputElems = screen.getAllByText('Image');
    expect(inputElems.length).toBe(1);
  });
});
