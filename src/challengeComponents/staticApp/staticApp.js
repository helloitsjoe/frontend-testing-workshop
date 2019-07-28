import React, { Component } from "react";
import PropTypes from 'prop-types';
import { SaveUsersAppLayout } from "../saveUsersAppLayout/saveUsersAppLayout";

export class StaticApp extends Component {

  static propTypes = {
    data: PropTypes.object
  }

  static defaultProps = {
    data: {}
  }

  state = {
    savedUsers: null
  };

  saveUser = id => {
    this.setState(prevState => ({
      savedUsers: { ...prevState.savedUsers, [id]: this.props.data[id] }
    }));
  };

  removeUser = id => {
    if (!this.state.savedUsers.hasOwnProperty(id)) {
      return;
    }
    this.setState(prevState => {
      const newSavedUsers = {
        ...prevState.savedUsers
      };
      delete newSavedUsers[id];
      return {
        savedUsers: newSavedUsers
      };
    });
  };

  getSavedUserIds = () => {
    if (!this.state.savedUsers) {
      return [];
    }
    return Object.keys(this.state.savedUsers);
  };

  render() {
    return (
      <SaveUsersAppLayout
        headerText="Static User Interaction"
        saveUser={this.saveUser}
        removeUser={this.removeUser}
        savedUserIds={this.getSavedUserIds()}
        savedUsers={this.state.savedUsers}
        data={this.props.data}
      />
    );
  }
}
