import React from "react";
import PropTypes from "prop-types";

export const withTracking = Component => {
  const WithTracking = props => {
    const track = args => {
      console.log(args);
      return args;
    };
    return (
      <Component
        {...props}
        tracking={{
          track
        }}
      />
    );
  };

  WithTracking.propTypes = {
    wrappedComponentRef: PropTypes.func
  };
  WithTracking.defaultProps = {
    wrappedComponentRef: null
  };

  return WithTracking;
};
