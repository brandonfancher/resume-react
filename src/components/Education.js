import React from "react";
import TimelineItem from "./TimelineItem";
import SectionHeader from "./SectionHeader";

const Education = () => (
  <section className="o-section  t-section  ">
    <div className="o-section__header-bg  t-section__header"></div>
    <div className="o-section__content-bg  t-section__content"></div>

    <div className="o-container">
      <div className="o-section__container">
        <SectionHeader heading="Education" />

        <div className="o-section__content  t-section__content  u-pt-0">
          <div className="o-content">
            <div className="a-education-timeline  c-timeline  t-border-color  o-section__full-top-space">
              <div className="c-timeline__end  t-border-color"></div>
              <TimelineItem
                timeframe="2018"
                heading="Programming Blockchain"
                title="Certificate of Completion, Bitcoin &amp; Blockchain"
                location="Charlotte, NC USA"
                summary="Completed a two-day in-person seminar on the mechanics behind Bitcoin and blockchain, covering topics such as elliptic curve cryptography, script and transaction parsing and signing, proof of work, and merkle proofs."
              />
              <TimelineItem
                timeframe="2009"
                heading="Missouri Southern State University"
                title="Bachelor of Arts (B.A) - Summa Cum Laude"
                location="Joplin, MO USA"
                summary={`Graduated Summa Cum Laude with a 4.0 GPA. Majored in Spanish Language and Literature and minored in Russian, with additional French studies. Recognized as the "Outstanding Graduate in Foreign Languages." Also secured a Certificate in Medical Interpreting.`}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default Education;
