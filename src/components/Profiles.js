import React from "react";
import PropTypes from "prop-types";
import {
  FaEnvira,
  FaGithubAlt,
  FaMedium,
  FaDribbble,
  FaFlickr,
  FaDeviantart,
} from "react-icons/fa";
import Section from "./Section";

const Profile = ({ link, title, description, icon: Icon }) => (
  <div className="o-grid__col-xl-4  o-grid__col-sm-6">
    <div className="o-content">
      <a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className="t-link-container"
      >
        <div className="o-media  o-media--block">
          <div className="o-media__figure">
            <div className="c-profile__icon">
              <Icon className="fab fa-lg" />
            </div>
          </div>
          <div className="o-media__body  o-content__body">
            <h3 className="t-link-container__item">{title}</h3>
            <p>{description}</p>
          </div>
        </div>
      </a>
    </div>
  </div>
);

Profile.propTypes = {
  link: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

const Profiles = () => (
  <Section heading="Profiles" description="Placeholder">
    <div className="o-grid">
      <Profile
        link="http://themeforest.net/user/ruventhemes/portfolio"
        title="Themeforest"
        description="An overview of the themes and templates that I sell."
        icon={FaEnvira}
      />
      <Profile
        link="https://github.com/hatra-e/"
        title="GitHub"
        description="All my open source projects for you analyze."
        icon={FaGithubAlt}
      />
      <Profile
        link="http://wordpress.com"
        title="Medium"
        description="Yes. I'm also a blogger and here you find my writings."
        icon={FaMedium}
      />
      <Profile
        link="https://dribbble.com"
        title="Dribbble"
        description="Whenever a design is finalized, it lands right here."
        icon={FaDribbble}
      />
      <Profile
        link="https://www.flickr.com"
        title="Flickr"
        description="A selection of photos I shot throughout the years."
        icon={FaFlickr}
      />
      <Profile
        link="http://www.deviantart.com"
        title="DeviantArt"
        description="A place for my sketches and drawings."
        icon={FaDeviantart}
      />
    </div>
  </Section>
);

export default Profiles;
