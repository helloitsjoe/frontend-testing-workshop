import React from "react";
import PropTypes from "prop-types";
import { usersShape } from "../utilities/propShapes";
import { Button } from "../button/button";
import "./savedUsersList.css";

export const __ENZYME_IDS = {
  SAVED_USER_ITEM: "SavedUsersList-Item"
};

const SavedUserItem = ({ firstName, lastName, onClick, id }) => (
  <li
    data-enzyme-id={__ENZYME_IDS.SAVED_USER_ITEM}
    className="SavedUsersList-item"
  >
    {firstName} {lastName}{" "}
    <Button type="text" onClick={() => onClick(id)}>
      X
    </Button>
  </li>
);

export const SavedUsersList = ({ savedUsers, onClick }) => {
  return savedUsers ? (
    <ul>
      {Object.keys(savedUsers).map(user => (
        <SavedUserItem
          firstName={savedUsers[user].firstName}
          lastName={savedUsers[user].lastName}
          id={savedUsers[user].uuid}
          onClick={onClick}
          key={user}
        />
      ))}
    </ul>
  ) : null;
};

SavedUserItem.propTypes = {
  firstName: PropTypes.string.isRequired,
  lastName: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  id: PropTypes.string.isRequired
};

SavedUsersList.propTypes = {
  savedUsers: usersShape,
  onClick: PropTypes.func
};

SavedUsersList.defaultProps = {
  onClick() {}
};
