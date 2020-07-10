import React from "react";
import PropTypes from "prop-types";

export const SiteTitleSize = {
  SMALL: "sm",
  LARGE: "lg",
};

const SiteTitle = ({ size }) => (
  <h1 className="c-brand__title  t-title">
    <span className={`c-brand__sizer  c-brand__sizer--${size}`}>
      <span className="c-brand__first-word  t-title__first-word">Brandon</span>
      <span className="c-brand__second-word  t-title__second-word">
        Fancher
      </span>
    </span>
  </h1>
);

SiteTitle.propTypes = {
  size: PropTypes.oneOf(Object.values(SiteTitleSize)).isRequired,
};

SiteTitle.defaultProps = {
  size: SiteTitleSize.LARGE,
};

export default SiteTitle;
