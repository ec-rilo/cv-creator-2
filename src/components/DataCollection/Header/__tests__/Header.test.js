import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Header from '../Header';

test('renders header text', () => {
  render(<Header />);
  const headingText = screen.getByText(/cv creator/i);
  expect(headingText).toBeInTheDocument();
});

test('renders heading as a header element', () => {
  render(<Header />);
  const headingText = screen.getByRole('heading', { name: 'CV Creator' });
  expect(headingText).toBeInTheDocument();
});
