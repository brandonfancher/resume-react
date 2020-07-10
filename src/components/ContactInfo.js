import React from "react";

const ContactInfoItem = ({ children }) => (
  <div className="o-grid__col-md-3  o-grid__col-sm-6">
    <div className="o-content">
      <div className="o-content__body">{children}</div>
    </div>
  </div>
);

const ContactInfo = () => (
  <div className="o-grid">
    <ContactInfoItem>
      <h4>Location</h4>
      <address>Portland, OR</address>
    </ContactInfoItem>

    <ContactInfoItem>
      <h4>Phone</h4>
      <p>534.456.886</p>
    </ContactInfoItem>

    <ContactInfoItem>
      <a href="#" target="_blank" className="t-link-container">
        <h4>Web</h4>
        <p>
          <span className="t-link-container__item--blended">
            ruventhemes.com
          </span>
        </p>
      </a>
    </ContactInfoItem>

    <ContactInfoItem>
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

export default ContactInfo;
