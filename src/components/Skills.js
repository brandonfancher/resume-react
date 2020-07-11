import React, { useState, useEffect, useRef } from "react";
import PropTypes from "prop-types";
import SectionHeader from "./SectionHeader";

const Skill = ({ skill, percent }) => {
  const ref = useRef();
  const onScreen = useOnScreen(ref, "-20px");

  return (
    <div className="o-grid__col-sm-6">
      <div className="o-content">
        <div className="o-media  o-media--block">
          <div className="o-media__figure">
            <div className="c-number  t-primary-color">
              {percent}
              <small>%</small>
            </div>
          </div>
          <div className="o-media__body">
            <h3>{skill}</h3>
          </div>
        </div>
        <div
          ref={ref}
          className="c-progress-bar  o-content__body  t-border-color-bg  u-mt-text"
        >
          <div
            className={`a-progress-bar  c-progress-bar__filler  t-primary-bg ${
              onScreen ? "in-view" : ""
            }`}
            style={{ width: `${onScreen ? percent : 0}%` }}
            data-percent={percent}
          />
        </div>
      </div>
    </div>
  );
};

Skill.propTypes = {
  skill: PropTypes.string.isRequired,
  percent: PropTypes.number.isRequired,
};

const Skills = () => (
  <section className="o-section  t-section  ">
    <div className="o-section__header-bg  t-section__header"></div>
    <div className="o-section__content-bg  t-section__content"></div>

    <div className="o-container">
      <div className="o-section__container">
        <SectionHeader heading="Skills" description="Placeholder" />

        <div className="o-section__content  t-section__content  ">
          <div className="o-grid">
            <Skill skill="Photoshop" percent={80} />
            <Skill skill="Illustrator" percent={75} />
            <Skill skill="GIT" percent={70} />
            <Skill skill="After Effects" percent={65} />
            <Skill skill="Sketch" percent={90} />
            <Skill skill="CSS3 Animation" percent={50} />
            <Skill skill="Pagespeed Insights" percent={85} />
            <Skill skill="SEO" percent={95} />
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default Skills;

function useOnScreen(ref, rootMargin = "0px") {
  // State and setter for storing whether element is visible
  const [isIntersecting, setIntersecting] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        // Update our state when observer callback fires
        setIntersecting(entry.isIntersecting);
      },
      {
        rootMargin,
      }
    );
    if (ref.current) {
      observer.observe(ref.current);
    }
    return () => {
      observer.unobserve(ref.current);
    };
  }, []); // Empty array ensures that effect is only run on mount and unmount

  return isIntersecting;
}
