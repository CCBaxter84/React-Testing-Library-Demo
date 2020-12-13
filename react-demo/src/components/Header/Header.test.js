import { render, screen } from '@testing-library/react';
import Header from './Header.js';

describe('Header Unit Testing', () => {
  test('Renders Please Sign Up to Screen', () => {
    render(<Header />);
    expect(screen.getByText('Please Sign Up')).toBeInTheDocument();
  });
});