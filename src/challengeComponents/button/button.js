import React from "react";
import PropTypes from "prop-types";
import classNames from "../utilities/classNames";
import "./button.css";

export const Button = props => {
  const classes = classNames({
    Button: true,
    "Button--disabled": props.isDisabled,
    "Button--fullWidth": props.isFullWidth,
    "Button--text": props.type === "text"
  });
  return (
    <button
      onClick={props.isDisabled ? null : props.onClick}
      className={classes}
    >
      {props.children}
    </button>
  );
};

Button.defaultProps = {
  onClick: () => {},
  isDisabled: false,
  isFullWidth: false,
  type: "button"
};

Button.propTypes = {
  isFullWidth: PropTypes.bool,
  isDisabled: PropTypes.bool,
  onClick: PropTypes.func,
  children: PropTypes.node,
  type: PropTypes.oneOf(["button", "text"])
};

export default Button;
