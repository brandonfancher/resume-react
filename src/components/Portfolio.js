import React from "react";
import PropTypes from "prop-types";
import Section from "./Section";
import voice from "../assets/images/portfolio/voice.jpg";
import rivkah from "../assets/images/portfolio/rivkah.jpg";
import sdks from "../assets/images/portfolio/sdks.jpg";
import lightrail from "../assets/images/portfolio/lightrail.jpg";

const PortfolioPiece = ({ title, description, link, image }) => (
  <div className="o-grid__col-sm-6">
    <a
      className="c-image-overlay t-image-overlay"
      href={link}
      title={title}
      target="_blank"
      rel="noopener noreferrer"
    >
      <img src={image} alt="" />
      <div className="c-image-overlay__content">
        <h3>{title}</h3>
        <hr className="c-image-overlay__deco-line  t-image-overlay__deco-line" />
        <p>{description}</p>
      </div>
    </a>
  </div>
);

PortfolioPiece.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
  image: PropTypes.any.isRequired,
};

const Portfolio = () => (
  <Section
    heading="Portfolio"
    description="More available on request."
    wrapperClasses="o-section__full-bottom-space"
  >
    <div className="o-grid  o-grid--gallery">
      <PortfolioPiece
        title="Voice - Social Media"
        description="At Block.one: Native iOS and Android apps for the Voice.com social media platform built on EOSIO blockchain technology."
        link="https://apps.apple.com/us/app/voice-social-media/id1503719897#?platform=iphone"
        image={voice}
      />
      <PortfolioPiece
        title="Rivkah | Fine Art Photography"
        description="Side Project: A responsive Jamstack site using React, Gatsby, Emotion, GraphQL, Prismic CMS, FlexSearch and Netlify with CI/CD."
        link="https://rivkahfineart.com"
        image={rivkah}
      />
      <PortfolioPiece
        title="Charlotte Light Rail App"
        description="Side Project: An open-source iOS app with 1000s of monthly users. React Native, React Navigation, Mapbox and Styled Components."
        link="https://apps.apple.com/us/app/charlotte-light-rail/id1131471316"
        image={lightrail}
      />
      <PortfolioPiece
        title="Swift &amp; Java Blockchain SDKs"
        description="At Block.one: Open-source SDK libraries for Swift &amp; Java for interacting with and building applications on top of EOSIO blockchains."
        link="https://eos.io/news/eosio-software-release-native-sdks-for-swift-and-java/"
        image={sdks}
      />
    </div>
  </Section>
);

export default Portfolio;
