import React, { Component } from "react";
import { SaveUsersAppLayout } from "../saveUsersAppLayout/saveUsersAppLayout";
import { formatUserData } from "../utilities/formatUserData";
import { withTracking } from "../../sharedComponents/withTracking/withTracking";
import { ErrorMessage } from "../errorMessage/errorMessage";

export class AsyncApp extends Component {
  state = {
    data: {},
    savedUsers: null,
    fetchError: false
  };

  componentDidMount() {
    return this.props
      .fetchUsers()
      .then(response => {
        const data = response.data.results;
        const formattedData = formatUserData(data);
        this.setState({ data: formattedData });
      })
      .catch(error => {
        this.setState({ fetchError: true });
      });
  }

  saveUser = id => {
    this.props.tracking.track({
      eventName: "saveUser",
      data: {
        userId: id
      }
    });
    this.setState(prevState => ({
      savedUsers: { ...prevState.savedUsers, [id]: prevState.data[id] }
    }));
  };

  removeUser = id => {
    if (!this.state.savedUsers.hasOwnProperty(id)) {
      return;
    }
    this.props.tracking.track({
      eventName: "removeUser",
      data: {
        userId: id
      }
    });
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
      <React.Fragment>
        <SaveUsersAppLayout
          headerText="Async Data Fetching and Tracking"
          saveUser={this.saveUser}
          removeUser={this.removeUser}
          savedUserIds={this.getSavedUserIds()}
          savedUsers={this.state.savedUsers}
          data={this.state.data}
        />
        {this.state.fetchError && (
          <ErrorMessage errorText="There was a problem retreiving users" />
        )}
      </React.Fragment>
    );
  }
}

const AsyncAppWithTracking = withTracking(AsyncApp);

export default AsyncAppWithTracking;
