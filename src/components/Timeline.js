import React from "react";
import PropTypes from "prop-types";
import SectionHeader from "./SectionHeader";

const Timeline = ({ heading, description, begins, ends, children }) => (
  <section className="o-section  t-section  ">
    <div className="o-section__header-bg  t-section__header"></div>
    <div className="o-section__content-bg  t-section__content"></div>

    <div className="o-container">
      <div className="o-section__container">
        <SectionHeader heading={heading} description={description} />

        <div
          className={`o-section__content  t-section__content  ${
            ends ? "" : "u-pt-0"
          } ${begins ? "" : "u-pb-0"}`}
        >
          <div className={`o-section__container ${begins ? "o-content" : ""}`}>
            <div
              className={`c-timeline  t-border-color ${
                ends ? "" : "o-section__full-top-space"
              }`}
            >
              {begins && (
                <div className="c-timeline__end  t-border-color"></div>
              )}
              {children}
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

Timeline.propTypes = {
  heading: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  begins: PropTypes.bool.isRequired,
  ends: PropTypes.bool.isRequired,
  children: PropTypes.node.isRequired,
};

Timeline.defaultProps = {
  begins: true,
  ends: true,
};

export default Timeline;
