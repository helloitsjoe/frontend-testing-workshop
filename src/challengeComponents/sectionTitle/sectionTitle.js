import React from "react";
import PropTypes from "prop-types";
import "./sectionTitle.css";

export const SectionTitle = props => {
  const RenderedElement = `h${props.headingLevel}`;
  return (
    <RenderedElement className="SectionTitle">
      {props.titleText}
    </RenderedElement>
  );
};

SectionTitle.propTypes = {
  headingLevel: PropTypes.number
};

SectionTitle.defaultProps = {
  headingLevel: 2
};
