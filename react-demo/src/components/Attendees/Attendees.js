/* eslint-disable no-useless-constructor */
import { Component } from 'react';
import './Attendees.css';

class Attendees extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    const hasAttendees = this.props.attendees.length > 0;
    return (
      <section className='attendees-container'>
        <h1>Attendees</h1>
        <ul>
          {hasAttendees && this.props.attendees.map(attendee => <li key={attendee}>{`${attendee.firstName} ${attendee.lastName}`}</li>)}
        </ul>

      </section>
    )
  }
}

export default Attendees;