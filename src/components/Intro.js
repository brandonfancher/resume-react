import React from "react";
import SectionHeader from "./SectionHeader";

const Intro = () => (
  <section className="o-section  t-section  ">
    <div className="o-section__header-bg  t-section__header"></div>
    <div className="o-section__content-bg  t-section__content"></div>

    <div className="o-container">
      <div className="o-section__container">
        <SectionHeader heading="About Me" description="What I do and why." />

        <div className="o-section__content  t-section__content  ">
          <div className="o-content">
            <div className="c-intro">
              <div className="o-content__body">
                <p>
                  I am a manager and full-stack web and mobile developer with
                  blockchain experience.
                </p>
                <p>
                  I believe in the power of decentralized technologies to usher
                  in a better, more just and equitable world and to level the
                  economic playing field for all people. That’s a future I want
                  to work toward.
                </p>
                <p>
                  I currently lead a team of native iOS and Android developers
                  building first-class user experiences. As a developer I work
                  primarily with JavaScript, both on the front end and the back
                  end, web and mobile. I’ve also done work in Swift, Python,
                  Ruby and Java.
                </p>
                <p>
                  I co-founded the React Meetup in Charlotte, NC, and am active
                  in tech and crypto communities. I’m always looking for ways to
                  create and contribute.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default Intro;
