import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import SectionHeader from "./SectionHeader";

const Section = ({ heading, description, wrapperClasses, children }) => (
  <section className="o-section  t-section  ">
    <div className="o-section__header-bg  t-section__header"></div>
    <div className="o-section__content-bg  t-section__content"></div>

    <div className="o-container">
      <div className="o-section__container">
        <SectionHeader heading={heading} description={description} />
        <div
          className={classNames(
            "o-section__content",
            "t-section__content",
            wrapperClasses
          )}
        >
          {children}
        </div>
      </div>
    </div>
  </section>
);

Section.propTypes = {
  heading: PropTypes.string.isRequired,
  description: PropTypes.string,
  wrapperClasses: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  children: PropTypes.node.isRequired,
};

Section.defaultProps = {
  wrapperClasses: {},
};

export default Section;
