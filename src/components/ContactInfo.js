import React from "react";
import PropTypes from "prop-types";

export const ContactInfoLocation = {
  HEADER: "header",
  FOOTER: "footer",
  NONE: "none",
};

const ContactInfoItem = ({ children, location }) => (
  <div className="o-grid__col-md-4">
    <div className={`o-content a-${location}`}>
      <div className="o-content__body">{children}</div>
    </div>
  </div>
);

const ContactInfo = ({ location }) => (
  <div className="o-grid">
    <ContactInfoItem location={location}>
      <h4>Location</h4>
      <address>Blacksburg, VA USA</address>
    </ContactInfoItem>

    <ContactInfoItem location={location}>
      <h4>Phone</h4>
      <p>+1 (704) 778-1945</p>
    </ContactInfoItem>

    <ContactInfoItem location={location}>
      <a
        href="mailto:brandonfancher@gmail.com"
        target="_blank"
        rel="noopener noreferrer"
        className="t-link-container"
      >
        <h4>Email</h4>
        <p>
          <span className="t-link-container__item--blended">
            brandonfancher@gmail.com
          </span>
        </p>
      </a>
    </ContactInfoItem>
  </div>
);

ContactInfo.propTypes = {
  location: PropTypes.oneOf(Object.values(ContactInfoLocation)).isRequired,
};

ContactInfo.defaultProps = {
  location: ContactInfoLocation.NONE,
};

export default ContactInfo;
