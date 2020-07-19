import React from "react";
import PropTypes from "prop-types";

const SectionHeader = ({ heading, description }) => (
  <header className="o-section__header  t-section__header">
    <div className="o-content">
      <h2 className="o-section__heading">{heading}</h2>
      {description && (
        <div className="o-content__body  o-section__description">
          {description}
        </div>
      )}
    </div>
  </header>
);

SectionHeader.propTypes = {
  heading: PropTypes.string.isRequired,
  description: PropTypes.node,
};

export default SectionHeader;
