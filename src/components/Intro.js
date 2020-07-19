import React from "react";
import Section from "./Section";

const Intro = () => (
  <Section heading="About Me" description="An introduction.">
    <div className="o-content">
      <div className="c-intro">
        <div className="o-content__body">
          <p>
            I am a leader, manager and full-stack developer with a passion for
            building and delivering beautiful and compelling products and user
            experiences.
          </p>
          <p>
            As Director of Mobile Engineering, I currently lead a team of native
            iOS and Android engineers. As a developer myself, I work primarily
            with JavaScript, NodeJS, React and React Native targeting the web
            and mobile platforms.
          </p>
          <p>
            You can find out more about me below, or{" "}
            <a href="/Resume - Brandon Fancher.pdf" target="_blank">
              download my PDF resume
            </a>
            .
          </p>
        </div>
      </div>
    </div>
  </Section>
);

export default Intro;
