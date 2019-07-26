import React from "react";
import PropTypes from "prop-types";
import { SideBar } from "../sideBar/sideBar";
import { Layout } from "../layout/layout";
import { SavedUsersList } from "../savedUsersList/savedUsersList";
import { GroupedUserCards } from "../groupedUserCards/groupedUserCards";
import { usersShape } from "../utilities/propShapes";

export const __ENZYME_IDS = {
  HEADER: "SaveUsersAppLayout-Header"
};

export const SaveUsersAppLayout = props => {
  return (
    <Layout
      header={<h1 data-enzyme-id={__ENZYME_IDS.HEADER}>{props.headerText}</h1>}
      rightRail={
        <SideBar title="Saved Users">
          <SavedUsersList
            savedUsers={props.savedUsers}
            onClick={props.removeUser}
          />
        </SideBar>
      }
      leftRail={
        <GroupedUserCards
          users={props.data}
          onClick={props.saveUser}
          savedUserIds={props.savedUserIds}
        />
      }
    />
  );
};

SaveUsersAppLayout.propTypes = {
  headerText: PropTypes.string.isRequired,
  savedUsers: usersShape,
  data: usersShape,
  saveUser: PropTypes.func.isRequired,
  removeUser: PropTypes.func.isRequired,
  savedUserIds: PropTypes.arrayOf(PropTypes.string)
};

SaveUsersAppLayout.defaultProps = {
  savedUserIds: []
};
