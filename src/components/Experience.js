import React from "react";
import TimelineItem from "./TimelineItem";
import SectionHeader from "./SectionHeader";

const Experience = () => (
  <section className="o-section  t-section  ">
    <div className="o-section__header-bg  t-section__header"></div>
    <div className="o-section__content-bg  t-section__content"></div>

    <div className="o-container">
      <div className="o-section__container">
        <SectionHeader heading="Experience" />

        <div className="o-section__content  t-section__content  u-pb-0">
          <div className="a-experience-timeline  c-timeline  t-border-color">
            <TimelineItem
              timeframe="Sep 2019 &ndash; Present"
              heading="Block.one"
              title="Director &amp; Engineering Manager, Mobile"
              location="Blacksburg, VA USA"
              summary="Consectetuer adipiscing elit. Phasellus hendrerit.
                      Pellentesque aaliquet nibh nec urna. In nisi neque,
                      aliquet vel, dapibus id, mattis vel, nisi. Sed pretium,
                      ligula sollicitudin laoreet viverra, tortor libero sodales
                      leo, eget blandit nunc tortor eu nibh. Nullam mollis. Ut
                      justo. Suspendisse potenti."
            />
            <TimelineItem
              timeframe="Apr 2018 &ndash; Aug 2019"
              heading="Block.one"
              title="Front-end Web Developer"
              location="Blacksburg, VA USA"
              summary="Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                      Phasellus hendrerit. Pellentesque aaliquet nibh nec urna.
                      In nisi neque, aliquet vel, dapibus id, mattis vel, nisi.
                      Sed pretium, ligula sollicitudin laoreet viverra, tortor
                      libero sodales leo, eget blandit nunc tortor eu nibh.
                      Nullam mollis."
            />
            <TimelineItem
              timeframe="Jan 2016 &ndash; Present"
              heading="Team Luna"
              title="Founding Member &amp; App Developer"
              location="Charlotte, NC USA"
              summary="Team Luna is a working group of developers, designers, and product experts committed to lifelong learning, advocating for developers, and fostering the local technology community in Charlotte."
            />
            <TimelineItem
              timeframe="Dec 2015 &ndash; Apr 2018"
              heading="Levvel.io"
              title="Consultant &amp; Full-stack Developer"
              location="Charlotte, NC USA"
              summary="Levvel is an IT consulting firm that combines the innovative DNA of a startup with the wisdom, scalability, and process rigor of a Fortune 100 company. We offer both technical implementation services as well as strategic advisory services."
            />
            <TimelineItem
              timeframe="Jun 2010 &ndash; Dec 2015"
              heading="Choice Translating"
              title="Project Manager, i18n &amp; l10n"
              location="Charlotte, NC USA"
              summary="Choice Translating is an agency whose services include translation, software and website localization, desktop publishing, voice-overs and interpreting services in over 200 languages. There, I automated project workflows, vendor management, accounting activities, and the generation of client deliverables. I also worked with project managers and clients to identify and execute efficient solutions leveraging internationalization (i18n) and localization (l10n) best practices."
            />
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default Experience;
