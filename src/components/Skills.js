import React, { useState, useEffect, useRef } from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import Section from "./Section";

const Skill = ({ skill, percent }) => {
  const ref = useRef();
  const onScreen = useOnScreen(ref, "-20px");
  const [animated, setAnimated] = useState(false);

  if (!animated) {
    if (onScreen) setAnimated(true);
  }

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
            className={classNames(
              "a-progress-bar",
              "c-progress-bar__filler",
              "t-primary-bg",
              { "in-view": onScreen }
            )}
            style={{ width: `${onScreen || animated ? percent : 0}%` }}
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
  <Section heading="Technical Skills" description="A sampling.">
    <div className="o-grid">
      <Skill skill="JavaScript" percent={95} />
      <Skill skill="React" percent={95} />
      <Skill skill="React Native" percent={85} />
      <Skill skill="Redux" percent={90} />
      <Skill skill="NodeJS" percent={70} />
      <Skill skill="TypeScript" percent={75} />
      <Skill skill="Jamstack" percent={85} />
      <Skill skill="GatsbyJS" percent={85} />
      <Skill skill="GraphQL/Apollo" percent={85} />
      <Skill skill="Styled Components" percent={80} />
      <Skill skill="HTML/CSS/SCSS" percent={90} />
      <Skill skill="Swift" percent={65} />
      <Skill skill="Blockchain" percent={85} />
      <Skill skill="Agile/Scrum" percent={80} />
    </div>
  </Section>
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
