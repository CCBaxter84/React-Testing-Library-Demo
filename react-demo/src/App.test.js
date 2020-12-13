import { render, screen, fireEvent }  from '@testing-library/react';
import '@testing-library/jest-dom';
import App from './App.js';

describe('App Integration Testing', () => {
  test('Submitting a form updates attendees', async () => {
    render(<App />);
    fireEvent.change(screen.getByLabelText('First Name:'), {
      target: { value: 'Han'}
    });
    fireEvent.change(screen.getByLabelText('Last Name:'), {
      target: { value: 'Solo'}
    });
    fireEvent.change(screen.getByLabelText('Email:'), {
      target: { value: 'hsolo@agffa.net'}
    });
    fireEvent.click(screen.getByText('Submit'));
    expect(await screen.findByText('Han Solo')).toBeInTheDocument();
  });
})