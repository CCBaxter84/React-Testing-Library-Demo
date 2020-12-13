import { Component } from 'react';
import './Form.css';

class Form extends Component {
  constructor(props) {
    super(props)
    this.state = {
      firstName: '',
      lastName: '',
      email: ''
    }
  }

  handleChange = event => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  }

  handleSubmit = event => {
    event.preventDefault();
    this.props.addAttendee({
      firstName: this.state.firstName,
      lastName: this.state.lastName,
      email: this.state.email
    });
    this.setState({
      firstName: '',
      lastName: '',
      email: ''
    });
  }

  render() {
    return (
      <main>
        <form onSubmit={this.handleSubmit}>
          <label>First Name:
            <input
              type='text'
              name='firstName'
              value={this.state.firstName}
              onChange={this.handleChange}
            />
          </label>
          <label>Email:
            <input
              type='text'
              name='email'
              value={this.state.email}
              onChange={this.handleChange}
            />
          </label>
          <input
            type='submit'
            value='Submit'
            className='submit-btn'
          />
        </form>
      </main>

    );
  }
}

export default Form;