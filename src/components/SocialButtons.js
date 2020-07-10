import React from "react";
import { FaFacebookF, FaDribbble, FaTwitter } from "react-icons/fa";

const SocialButton = ({ children, link }) => (
  <li>
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

const SocialButtons = () => (
  <ul className="c-social-buttons  o-content__body">
    <SocialButton link="https://www.facebook.com/RuvenThemes/">
      <FaFacebookF className="fab fa-lg" />
    </SocialButton>
    <SocialButton link="https://dribbble.com/">
      <FaDribbble className="fab fa-lg" />
    </SocialButton>
    <SocialButton link="https://twitter.com/_Ruven">
      <FaTwitter className="fab fa-lg" />
    </SocialButton>
  </ul>
);

export default SocialButtons;
