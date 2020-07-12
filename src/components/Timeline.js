import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";

const Timeline = ({ begins, ends, children }) => (
  <div
    className={classNames({
      "o-section__content": true,
      "t-section__content": true,
      "u-pt-0": !ends,
      "u-pb-0": !begins,
    })}
  >
    <div
      className={classNames({
        "o-section__container": true,
        "o-content": begins,
      })}
    >
      <div
        className={`c-timeline  t-border-color ${
          ends ? "" : "o-section__full-top-space"
        }`}
      >
        {begins && <div className="c-timeline__end  t-border-color"></div>}
        {children}
      </div>
    </div>
  </div>
);

Timeline.propTypes = {
  begins: PropTypes.bool.isRequired,
  ends: PropTypes.bool.isRequired,
  children: PropTypes.node.isRequired,
};

Timeline.defaultProps = {
  begins: true,
  ends: true,
};

export default Timeline;
