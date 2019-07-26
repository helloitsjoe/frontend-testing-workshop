import React from "react";
import PropTypes from "prop-types";
import "./sideBar.css";

export const __ENZYME_IDS = {
  TITLE: "SideBar-Title"
};

export const SideBar = props => {
  const { title, children } = props;
  return (
    <aside className="SideBar">
      <h2 data-enzyme-id={__ENZYME_IDS.TITLE}>{title}</h2>
      {children}
    </aside>
  );
};

SideBar.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node
};

SideBar.defaultProps = {
  children: null
};
