import React from "react";
import PropTypes from "prop-types";
import { FaFacebookF, FaDribbble, FaTwitter } from "react-icons/fa";

export const SocialButtonsLocation = {
  HEADER: "header",
  FOOTER: "footer",
};

const SocialButton = ({ children, link, location }) => (
  <li className={`a-${location}`}>
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className="c-social-button  t-social-button"
    >
      {children}
    </a>
  </li>
);

const SocialButtons = ({ location }) => (
  <ul className="c-social-buttons  o-content__body">
    <SocialButton
      link="https://www.facebook.com/RuvenThemes/"
      location={location}
    >
      <FaFacebookF className="fab fa-lg" />
    </SocialButton>
    <SocialButton link="https://dribbble.com/" location={location}>
      <FaDribbble className="fab fa-lg" />
    </SocialButton>
    <SocialButton link="https://twitter.com/_Ruven" location={location}>
      <FaTwitter className="fab fa-lg" />
    </SocialButton>
  </ul>
);

SocialButtons.propTypes = {
  location: PropTypes.oneOf(Object.values(SocialButtonsLocation)).isRequired,
};

export default SocialButtons;
