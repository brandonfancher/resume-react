import React from "react";
import PropTypes from "prop-types";
import { FaGithub, FaTwitter, FaLinkedin } from "react-icons/fa";

export const SocialButtonsLocation = {
  HEADER: "header",
  FOOTER: "footer",
};

const SocialButton = ({ link, location, icon: Icon, label }) => (
  <li className={`a-${location}`}>
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className="c-social-button  t-social-button"
      aria-label={label}
    >
      <Icon className="fab fa-lg" style={{ marginTop: 6 }} />
    </a>
  </li>
);

SocialButton.propTypes = {
  link: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  icon: PropTypes.func.isRequired,
  label: PropTypes.string.isRequired,
};

const SocialButtons = ({ location }) => (
  <ul className="c-social-buttons  o-content__body">
    <SocialButton
      link="https://linkedin.com/in/brandonfancher"
      location={location}
      icon={FaLinkedin}
      label="LinkedIn Profile"
    />
    <SocialButton
      link="https://github.com/brandonfancher"
      location={location}
      icon={FaGithub}
      label="Github Profile"
    />
    <SocialButton
      link="https://twitter.com/brandonfancher"
      location={location}
      icon={FaTwitter}
      label="Twitter Profile"
    />
  </ul>
);

SocialButtons.propTypes = {
  location: PropTypes.oneOf(Object.values(SocialButtonsLocation)).isRequired,
};

export default SocialButtons;
