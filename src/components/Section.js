import React from "react";
import PropTypes from "prop-types";
import SectionHeader from "./SectionHeader";

const Section = ({ heading, description, begins, ends, children }) => (
  <section className="o-section  t-section  ">
    <div className="o-section__header-bg  t-section__header"></div>
    <div className="o-section__content-bg  t-section__content"></div>

    <div className="o-container">
      <div className="o-section__container">
        <SectionHeader heading={heading} description={description} />
        {children}
      </div>
    </div>
  </section>
);

Section.propTypes = {
  heading: PropTypes.string.isRequired,
  description: PropTypes.string,
  children: PropTypes.node.isRequired,
};

export default Section;
