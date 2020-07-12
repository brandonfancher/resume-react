import React from "react";
import Timeline from "./Timeline";
import TimelineItem from "./TimelineItem";
import Section from "./Section";

const Education = () => (
  <Section heading="Education" wrapperClasses="u-pt-0">
    <Timeline ends={false}>
      <TimelineItem
        timeframe="2009"
        heading="Missouri Southern State University"
        link="https://mssu.edu"
        title="Bachelor of Arts (B.A) - Summa Cum Laude"
        location="Joplin, MO USA"
      >
        <ul>
          <li>Graduated Summa Cum Laude with a 4.0 GPA.</li>
          <li>
            Majored in Spanish Language and Literature and minored in Russian,
            with additional French studies.
          </li>
          <li>
            Recognized as the "Outstanding Graduate in Foreign Languages."
          </li>
          <li>Also secured a Certificate in Medical Interpreting.</li>
        </ul>
      </TimelineItem>
    </Timeline>
  </Section>
);

export default Education;
