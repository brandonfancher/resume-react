import React from "react";
import PropTypes from "prop-types";
import SectionHeader from "./SectionHeader";

const ExpertiseItem = ({ number, title, description }) => (
  <div className="o-grid__col-sm-6">
    <div className="o-media  o-media--block  o-content">
      <div className="o-media__figure">
        <div className="c-number  t-primary-color">{number}</div>
      </div>
      <div className="o-media__body  o-content__body">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  </div>
);

ExpertiseItem.propTypes = {
  number: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

const Expertise = () => (
  <section className="o-section  t-section  ">
    <div className="o-section__header-bg  t-section__header"></div>
    <div className="o-section__content-bg  t-section__content"></div>

    <div className="o-container">
      <div className="o-section__container">
        <SectionHeader
          heading="Expertise"
          description="Batman would be jealous."
        />

        <div className="o-section__content  t-section__content  ">
          <div className="o-grid">
            <ExpertiseItem
              number="01"
              title="Advanced CSS"
              description="Cras ornare tristique elit lorem ipsum dolor sit amet,
                    consectetuer adipiscing elit. Phasellus hendrerit.
                    Pellentesque aliquet nibh nec urna. In nisi neque, aliquet
                    vel, dapibus id."
            />

            <ExpertiseItem
              number="02"
              title="Front-end Design"
              description="Sed adipiscing ornare risus. Morbi est est, blandit sit
                    amet, sagittis vel, euismod vel, velit. Pellentesque egestas
                    sem. Suspendisse commodo ullamcorper magna. Ut aliquam
                    sollicitudin leo."
            />

            <ExpertiseItem
              number="03"
              title="Ruby on Rails"
              description="Donec nec justo eget felis facilisis fermentum. Aliquam
                    porttitor mauris sit amet orci. Aenean dignissim
                    pellentesque felis. Vivamus vestibulum nulla cras ornare
                    tristique elit nec ante."
            />

            <ExpertiseItem
              number="04"
              title="Object-oriented PHP"
              description="Morbi in sem quis dui placerat ornare. Ut aliquam
                    sollicitudin leo. Pellentesque odio nisi, euismod in,
                    pharetra a, ultricies in, diam. Sed arcu. Cras ante. Vivamus
                    vestibulum nulla nec ante."
            />

            <ExpertiseItem
              number="05"
              title="WordPress"
              description="Phasellus ultrices nulla quis nibh. Fusce lobortis lorem.
                    Quisque a lectus. Donec consectetuer ligula vulputate sem
                    tristique cursus. Nam nulla quam, gravida non, sodales sit
                    amet, nisi."
            />

            <ExpertiseItem
              number="06"
              title="JavaScript / jQuery"
              description="Cras ornare tristique elit lorem ipsum dolor sit amet,
                    consectetuer adipiscing elit. Phasellus hendrerit.
                    Pellentesque aliquet nibh nec urna. In nisi neque, aliquet
                    vel, dapibus id."
            />
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default Expertise;
