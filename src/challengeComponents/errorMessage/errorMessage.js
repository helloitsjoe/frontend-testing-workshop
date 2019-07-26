import React from "react";
import PropTypes from "prop-types";

export const __ENZYME_IDS = {
  ERROR_TEXT: "ErrorMessage-Text"
};
export const ErrorMessage = props => {
  return <div data-enzyme-id={__ENZYME_IDS.ERROR_TEXT}>{props.errorText}</div>;
};

ErrorMessage.propTypes = {
  errorText: PropTypes.string.isRequired
};
