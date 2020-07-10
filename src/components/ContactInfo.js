import React from "react";
import PropTypes from "prop-types";

export const ContactInfoLocation = {
  HEADER: "header",
  FOOTER: "footer",
  NONE: "none",
};

const ContactInfoItem = ({ children, location }) => (
  <div className="o-grid__col-md-3  o-grid__col-sm-6">
    <div className={`o-content a-${location}`}>
      <div className="o-content__body">{children}</div>
    </div>
  </div>
);

const ContactInfo = ({ location }) => (
  <div className="o-grid">
    <ContactInfoItem location={location}>
      <h4>Location</h4>
      <address>Portland, OR</address>
    </ContactInfoItem>

    <ContactInfoItem location={location}>
      <h4>Phone</h4>
      <p>534.456.886</p>
    </ContactInfoItem>

    <ContactInfoItem location={location}>
      <a href="#" target="_blank" className="t-link-container">
        <h4>Web</h4>
        <p>
          <span className="t-link-container__item--blended">
            ruventhemes.com
          </span>
        </p>
      </a>
    </ContactInfoItem>

    <ContactInfoItem location={location}>
      <a href="#" target="_blank" className="t-link-container">
        <h4>Email</h4>
        <p>
          <span className="t-link-container__item--blended">
            hello@example.com
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
