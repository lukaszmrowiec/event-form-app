import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getMembers } from '../actions/itemActions';
import PropTypes from 'prop-types';

import './Members.css';

export class Members extends Component {
  static propTypes = {
    getMembers: PropTypes.func.isRequired
  };

  componentDidMount() {
    this.props.getMembers();
  }


  render() {
    const { items } = this.props.item;

    return (
        <table>
          <thead>
            <tr>
              <th>First name</th>
              <th>Last Name</th>
              <th>Email</th>
              <th>Event date</th>
            </tr>
          </thead>
          <tbody>
            {items.map(({ _id, firstName, lastName, email, eventDate }) => (
              <tr key={_id}>
                <td>{firstName}</td>
                <td>{lastName}</td>
                <td>{email}</td>
                <td>{eventDate}</td>
              </tr>
            ))}
          </tbody>
        </table>
    );
  }
}

const mapStateToProps = state => ({
  item: state.item
});

export default connect(
  mapStateToProps,
  { getMembers }
)(Members);
