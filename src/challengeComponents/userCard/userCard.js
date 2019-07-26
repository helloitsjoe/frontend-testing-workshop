import React from "react";
import PropTypes from "prop-types";
import { Card } from "../card/card";
import { Button } from "../button/button";
import "./userCard.css";

export const __ENZYME_IDS = {
  NAMES: "UserCard-Names",
  AGE: "UserCard-Age",
  EMAIL: "UserCard-email"
};

export const UserCard = props => {
  const { email, firstName, lastName, age, onClick, isSelected, uuid } = props;
  const onClickWithUser = () => {
    onClick(uuid);
  };
  return (
    <Card isSelected={isSelected}>
      <p className="UserCard-names" data-enzyme-id={__ENZYME_IDS.NAMES}>
        <span className="UserCard-property">name : </span> {firstName}{" "}
        {lastName}
      </p>
      <p data-enzyme-id={__ENZYME_IDS.AGE}>
        <span className="UserCard-property">age : </span> {age}
      </p>
      <p data-enzyme-id={__ENZYME_IDS.EMAIL}>
        <span className="UserCard-property">email : </span> {email}
      </p>
      <Button onClick={onClickWithUser} isFullWidth>
        Add User
      </Button>
    </Card>
  );
};

UserCard.propTypes = {
  isSelected: PropTypes.bool,
  email: PropTypes.string.isRequired,
  firstName: PropTypes.string.isRequired,
  lastName: PropTypes.string.isRequired,
  age: PropTypes.number.isRequired
};

UserCard.defaultProps = {
  isSelected: false
};
