import React from "react";
import PropTypes from "prop-types";
import Section from "./Section";
import portfolio1 from "../assets/images/portfolio/1_thumb.jpg";
import portfolio2 from "../assets/images/portfolio/2_full.jpg";
import portfolio3 from "../assets/images/portfolio/3_thumb.jpg";
import portfolio4 from "../assets/images/portfolio/4_thumb.jpg";
import portfolio5 from "../assets/images/portfolio/5_thumb.jpg";
import portfolio6 from "../assets/images/portfolio/6_full.jpg";

const PortfolioPiece = ({ title, description, image }) => (
  <div className="o-grid__col-sm-6">
    <a
      className="c-image-overlay  t-image-overlay  js-lightbox"
      href="#"
      title={title}
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
  image: PropTypes.any.isRequired,
};

const Portfolio = () => (
  <Section
    heading="Portfolio"
    description="Placeholder"
    wrapperClasses="o-section__full-bottom-space"
  >
    <div className="o-grid  o-grid--gallery">
      <PortfolioPiece
        title="Musée du Louvre"
        description="Fusce lacinia arcu et nulla. Nulla vitae mauris non felis
                    mollis faucibus. Lorem ipsum dolor sit amet, consectetuer
                    adipiscing elit."
        image={portfolio1}
      />
      <PortfolioPiece
        title="Tunnel Effect"
        description="Fusce lacinia arcu et nulla. Nulla vitae mauris non felis
                    mollis faucibus. Lorem ipsum dolor sit amet, consectetuer
                    adipiscing elit."
        image={portfolio2}
      />
      <PortfolioPiece
        title="New York, New York"
        description="Fusce lacinia arcu et nulla. Nulla vitae mauris non felis
                    mollis faucibus. Lorem ipsum dolor sit amet, consectetuer
                    adipiscing elit."
        image={portfolio3}
      />
      <PortfolioPiece
        title="Sky High"
        description="Fusce lacinia arcu et nulla. Nulla vitae mauris non felis
                    mollis faucibus. Lorem ipsum dolor sit amet, consectetuer
                    adipiscing elit."
        image={portfolio4}
      />
      <PortfolioPiece
        title="The Eiffel Tower"
        description="Fusce lacinia arcu et nulla. Nulla vitae mauris non felis
                    mollis faucibus. Lorem ipsum dolor sit amet, consectetuer
                    adipiscing elit."
        image={portfolio5}
      />
      <PortfolioPiece
        title="Reaching the Clouds"
        description="Fusce lacinia arcu et nulla. Nulla vitae mauris non felis
                    mollis faucibus. Lorem ipsum dolor sit amet, consectetuer
                    adipiscing elit."
        image={portfolio6}
      />
    </div>
  </Section>
);

export default Portfolio;
