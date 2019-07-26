import React from "react";
import PropTypes from "prop-types";
import "./layout.css";

export const Layout = props => {
  return (
    <div className="Layout">
      <div className="Layout-header">{props.header}</div>
      <div className="Layout-gridWrapper">
        <div className="Layout-leftRail">{props.leftRail}</div>
        <div className="Layout-rightRail">{props.rightRail}</div>
      </div>
    </div>
  );
};

Layout.propTypes = {
  header: PropTypes.node.isRequired,
  leftRail: PropTypes.node.isRequired,
  rightRail: PropTypes.node.isRequired
};
