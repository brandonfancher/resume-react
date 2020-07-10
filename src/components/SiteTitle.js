import React from "react";
import PropTypes from "prop-types";

export const SiteTitleSize = {
  SMALL: "sm",
  LARGE: "lg",
};

export const SiteTitleLocation = {
  HEADER: "header",
  FOOTER: "footer",
};

const SiteTitle = ({ size, location }) => (
  <h1 className="c-brand__title  t-title">
    <span className={`c-brand__sizer  c-brand__sizer--${size}`}>
      <span
        className={`c-brand__first-word  t-title__first-word a-${location}`}
      >
        Brandon
      </span>
      <span
        className={`c-brand__second-word  t-title__second-word a-${location}`}
      >
        Fancher
      </span>
    </span>
  </h1>
);

SiteTitle.propTypes = {
  size: PropTypes.oneOf(Object.values(SiteTitleSize)).isRequired,
  location: PropTypes.oneOf(Object.values(SiteTitleLocation)).isRequired,
};

SiteTitle.defaultProps = {
  size: SiteTitleSize.LARGE,
};

export default SiteTitle;
