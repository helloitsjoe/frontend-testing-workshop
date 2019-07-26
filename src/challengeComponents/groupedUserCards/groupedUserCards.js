import React from "react";
import { UserCard } from "../userCard/userCard";
import PropTypes from "prop-types";
import { usersShape } from "../utilities/propShapes";
import "./groupedUserCards.css";

export const GroupedUserCards = ({ users, onClick, savedUserIds }) => {
  return users ? (
    <div className="GroupedUserCards">
      {Object.keys(users).map((item, index) => (
        <UserCard
          key={item}
          onClick={onClick}
          isSelected={savedUserIds.includes(item)}
          {...users[item]}
        />
      ))}
    </div>
  ) : (
    <p>No Users!</p>
  );
};

GroupedUserCards.propTypes = {
  onClick: PropTypes.func,
  savedUserIds: PropTypes.arrayOf(PropTypes.string),
  users: usersShape
};

GroupedUserCards.defaultProps = {
  savedUserIds: [],
  onClick() {}
};
