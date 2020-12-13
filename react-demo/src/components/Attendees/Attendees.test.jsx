import { render, screen } from '@testing-library/react';
import Attendees from './Attendees.js';

describe('Attendees Unit Testing', () => {
  test('Renders Attendees Title', () => {
    const attendees = [
      { firstName: 'Bob', lastName: 'Smith', email: 'bsmith@gmail.com' },
      { firstName: 'Chrissy', lastName: 'James', email: 'cjames@gmail.com' }
    ]
    render(<Attendees attendees={attendees}/>);
    expect(screen.getByText('Bob Smith')).toBeInTheDocument();
  })
});