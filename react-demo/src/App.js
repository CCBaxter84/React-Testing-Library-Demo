import './App.css';
import { Component } from 'react';
import Header from './components/Header/Header.js';
import Form from './components/Form/Form.js';
import Attendees from './components/Attendees/Attendees.js';

class App extends Component {
  state = {
    attendees: []
  }

  addAttendee = attendee => {
    console.log(attendee);
    this.setState(prevState => {
      const updatedAttendees = [...prevState.attendees, attendee];
      return {
        attendees: updatedAttendees
      }
    });
  }

  render() {
    return (
      <>
        <Header />
        <Form addAttendee={this.addAttendee}/>
        <Attendees attendees={this.state.attendees}/>
      </>
    )
  }
}

export default App;
