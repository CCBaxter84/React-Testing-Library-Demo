import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Form from './Form.js';

describe('Form Unit Testing', () => {
  test('Renders form to the screen', () => {
    render(<Form/>);
    expect(screen.getByText('First Name:')).toBeInTheDocument();
    expect(screen.getByText('Last Name:')).toBeInTheDocument();
    expect(screen.getByText('Email:')).toBeInTheDocument();
  })
});