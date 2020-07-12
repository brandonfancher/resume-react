import React from "react";
import PropTypes from "prop-types";
import Section from "./Section";
import bbc from "../assets/images/clients/bbc@2x.png";
import disney from "../assets/images/clients/disney@2x.png";
import github from "../assets/images/clients/github@2x.png";
import google from "../assets/images/clients/google@2x.png";
import html5 from "../assets/images/clients/html5@2x.png";
import kickstarter from "../assets/images/clients/kickstarter@2x.png";
import youtube from "../assets/images/clients/youtube@2x.png";
import vimeo from "../assets/images/clients/vimeo@2x.png";

const Client = ({ link, image }) => (
  <li>
    <a href={link} target="_blank" rel="noopener noreferrer">
      <img src={image} alt="" />
    </a>
  </li>
);

Client.propTypes = {
  link: PropTypes.string.isRequired,
  image: PropTypes.any.isRequired,
};

const Clients = () => (
  <Section heading="Clients" description="Placeholder">
    <div className="o-section__content  t-section__content  ">
      <ul className="c-clients  o-content">
        <Client link="http://example.com" image={bbc} />
        <Client link="http://example.com" image={disney} />
        <Client link="http://example.com" image={github} />
        <Client link="http://example.com" image={google} />
        <Client link="http://example.com" image={html5} />
        <Client link="http://example.com" image={kickstarter} />
        <Client link="http://example.com" image={youtube} />
        <Client link="http://example.com" image={vimeo} />
      </ul>
    </div>
  </Section>
);

export default Clients;
