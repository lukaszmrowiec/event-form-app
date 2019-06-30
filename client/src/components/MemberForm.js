import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addMember } from '../actions/itemActions';

export class MemberForm extends Component {
  state = {
    modal: false,
    firstName: '',
    lastName: '',
    email: '',
    eventDate: '',
    items: ''
  };

  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  onSubmit = e => {
    e.preventDefault();

    const newItem = {
      firstName: this.state.firstName,
      lastName: this.state.lastName,
      email: this.state.email,
      eventDate: this.state.eventDate
    };

    if (this.state.firstName === "") {
      window.alert("Please enter your Frst name.");
      return false;
    } else if (this.state.lastName === "") {
      window.alert("Please enter your Last name.");
      return false;
    } else if (this.state.email === "") {
      window.alert("Please enter your email.");
      return false;
    } else if (this.state.eventDate === "") {
      window.alert("Please enter date.");
      return false;
    } else if (this.state.email.indexOf("@", 0) < 0) {
      window.alert("Please enter a valid e-mail address.");
      return false;
    } else if (this.state.email.indexOf(".", 0) < 0) {
      window.alert("Please enter a valid e-mail address.");
      return false;
    } 

    this.props.addMember(newItem);
    this.setState({
      firstName: '',
      lastName: '',
      email: '',
      eventDate: '',
    })
  };

  render() {
    return (
      <div>
          <form onSubmit={this.onSubmit}>
            <div>
              <label>First Name: </label>
              <br />
              <input
                type="text"
                name="firstName"
                onChange={this.onChange}
                value={this.state.firstName}
              />
            </div>
            <br />
            <div>
              <label>Last name: </label><br />
              <input
                name="lastName"
                onChange={this.onChange}
                required
                value={this.state.lastName}
              />
            </div>
            <br />
            <div>
              <label>Email: </label><br />
              <input
                name="email"
                onChange={this.onChange}
                type="email"
                required
                value={this.state.email}
              />
            </div>
            <br />
            <div>
              <label>Event date: </label><br />
              <input
                name="eventDate"
                onChange={this.onChange}
                type="date"
                required
                value={this.state.eventDate}
              />
            </div>
            <br />
            <button type="submit" id='submit' onClick={this.onSubmit}>Submit</button>
            <br />
          </form>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  item: state.item
});

export default connect(
  mapStateToProps,
  { addMember }
)(MemberForm);
