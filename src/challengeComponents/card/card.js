import React from "react";
import PropTypes from "prop-types";
import "./card.css";

export const Card = ({ children, isSelected }) => {
  const className = isSelected ? `Card Card--selected` : `Card`;
  return <div className={className}>{children}</div>;
};

Card.propTypes = {
  isSelected: PropTypes.bool,
  children: PropTypes.node.isRequired
};

Card.defaultProps = {
  isSelected: false
};
