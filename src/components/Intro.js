import React from "react";
import Section from "./Section";

const Intro = () => (
  <Section heading="About Me" description="An introduction.">
    <div className="o-content">
      <div className="c-intro">
        <div className="o-content__body">
          <p>
            I am a manager and full-stack web and mobile developer with
            blockchain experience.
          </p>
          <p>
            I believe in the power of decentralized technologies to usher in a
            better, more just and equitable world and to level the economic
            playing field for all people. That’s a future I want to work toward.
          </p>
          <p>
            I currently lead a team of native iOS and Android developers
            building first-class user experiences. As a developer I work
            primarily with JavaScript, both on the front end and the back end,
            web and mobile. I’ve also done work in Swift, Python, Ruby and Java.
          </p>
          <p>
            I co-founded the React Meetup in Charlotte, NC, and am active in
            tech and crypto communities. I’m always looking for ways to create
            and contribute.
          </p>
        </div>
      </div>
    </div>
  </Section>
);

export default Intro;
