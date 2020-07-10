import React from "react";
import PropTypes from "prop-types";
import SectionHeader from "./SectionHeader";

const Award = ({ title, description }) => (
  <div className="o-grid__col-md-4  o-grid__col-sm-6">
    <div className="o-content">
      <hr className="c-deco-line  t-primary-color-line" />
      <div className="o-content__body">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  </div>
);

Award.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

const Awards = () => (
  <section className="o-section  t-section  ">
    <div className="o-section__header-bg  t-section__header"></div>
    <div className="o-section__content-bg  t-section__content"></div>

    <div className="o-container">
      <div className="o-section__container">
        <SectionHeader heading="Awards" description="Happy times!" />

        <div className="o-section__content  t-section__content  ">
          <div className="o-grid">
            <Award
              title="Unicorn Developer Award 2016"
              description="Lorem ipsum dolor sit amet, justo eget porttitor mauris sit
                    amet felis. Neque id cursus faucibus."
            />
            <Award
              title="Website of the Year Award 2015"
              description="Praesent dapibus dolor sit amet, justo eget porttitor mauris
                    sit amet. Neque id cursus faucibus."
            />
            <Award
              title="1st Place at CSShacker Conference"
              description="Lorem ipsum dolor sit amet, justo eget porttitor mauris sit
                    amet felis. Neque id cursus faucibus."
            />
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default Awards;
