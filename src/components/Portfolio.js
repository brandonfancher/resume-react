import React from "react";
import PropTypes from "prop-types";
import Section from "./Section";
import rivkah from "../assets/images/portfolio/rivkah.jpg";
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
        title="Rivkah | Fine Art Photography"
        description="Side Project: A responsive photography portfolio Jamstack site using React, Gatsby, Emotion, GraphQL, Prismic headless CMS, FlexSearch, and Netlify with CI/CD."
        link="https://rivkahfineart.com"
        image={rivkah}
      />
      <PortfolioPiece
        title="Charlotte Light Rail App"
        description="Side Project: An open-source iOS transit app for the Charlotte community with thousands of monthly users. Built with React Native, React Navigation, Mapbox and Styled Components."
        link="https://apps.apple.com/us/app/charlotte-light-rail/id1131471316"
        image={lightrail}
      />
    </div>
  </Section>
);

export default Portfolio;
