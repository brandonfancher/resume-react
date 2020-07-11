import React from "react";
import PropTypes from "prop-types";
import { FaFacebookF, FaDribbble, FaTwitter } from "react-icons/fa";

export const SocialButtonsLocation = {
  HEADER: "header",
  FOOTER: "footer",
};

const SocialButton = ({ link, location, icon: Icon }) => (
  <li className={`a-${location}`}>
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className="c-social-button  t-social-button"
    >
      <Icon className="fab fa-lg" style={{ marginTop: 6 }} />
    </a>
  </li>
);

SocialButton.propTypes = {
  link: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  icon: PropTypes.func.isRequired,
};

const SocialButtons = ({ location }) => (
  <ul className="c-social-buttons  o-content__body">
    <SocialButton
      link="https://www.facebook.com/RuvenThemes/"
      location={location}
      icon={FaFacebookF}
    />
    <SocialButton
      link="https://dribbble.com/"
      location={location}
      icon={FaDribbble}
    />
    <SocialButton
      link="https://twitter.com/_Ruven"
      location={location}
      icon={FaTwitter}
    />
  </ul>
);

SocialButtons.propTypes = {
  location: PropTypes.oneOf(Object.values(SocialButtonsLocation)).isRequired,
};

export default SocialButtons;
