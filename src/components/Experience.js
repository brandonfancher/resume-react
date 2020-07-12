import React from "react";
import Timeline from "./Timeline";
import TimelineItem from "./TimelineItem";

const Experience = () => (
  <Timeline heading="Experience" begins={false}>
    <TimelineItem
      timeframe="Sep 2019 &ndash; Present"
      heading="Block.one"
      link="https://block.one"
      title="Director &amp; Engineering Manager, Mobile"
      location="Blacksburg, VA USA"
    >
      <p>
        Consectetuer adipiscing elit. Phasellus hendrerit. Pellentesque aaliquet
        nibh nec urna. In nisi neque, aliquet vel, dapibus id, mattis vel, nisi.
        Sed pretium, ligula sollicitudin laoreet viverra, tortor libero sodales
        leo, eget blandit nunc tortor eu nibh. Nullam mollis. Ut justo.
        Suspendisse potenti.
      </p>
    </TimelineItem>
    <TimelineItem
      timeframe="Apr 2018 &ndash; Aug 2019"
      heading="Block.one"
      link="https://block.one"
      title="Front-end Web Developer"
      location="Blacksburg, VA USA"
    >
      <p>
        Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Phasellus
        hendrerit. Pellentesque aaliquet nibh nec urna. In nisi neque, aliquet
        vel, dapibus id, mattis vel, nisi. Sed pretium, ligula sollicitudin
        laoreet viverra, tortor libero sodales leo, eget blandit nunc tortor eu
        nibh. Nullam mollis.
      </p>
    </TimelineItem>
    <TimelineItem
      timeframe="Dec 2015 &ndash; Apr 2018"
      heading="Levvel.io"
      link="https://www.levvel.io/"
      title="Consultant &amp; Full-stack Developer"
      location="Charlotte, NC USA"
    >
      <p>
        Levvel helps clients transform their business with strategic consulting
        and technical execution services.
      </p>
      <ul>
        <li>Worked with clients from ideation to implementation.</li>
        <li>
          Collaborated with Levvel’s Product Innovation and Design teams to
          create beautiful products tailored to our clients and their customers.
        </li>
        <li>Mentored junior developers and interns.</li>
        <li>
          Provided leadership and expertise in front-end technologies, including
          React and React Native.
        </li>
      </ul>
    </TimelineItem>
    <TimelineItem
      timeframe="Jun 2010 &ndash; Dec 2015"
      heading="Choice Translating"
      link="https://choicetranslating.com"
      title="Project Manager, i18n &amp; l10n"
      location="Charlotte, NC USA"
    >
      <p>
        Choice Translating's services include translation, software and website
        localization, international brand validation, and interpreting services
        in over 200 languages.
      </p>
      <ul>
        <li>
          Automated project workflows, vendor management, accounting activities,
          and client deliverables.
        </li>
        <li>
          Identified and executed efficient solutions leveraging
          internationalization (i18n) and localization (l10n) best practices.
        </li>
        <li>
          Oversaw day-to-day production and delivery of global market research
          projects involving teams of linguistic specialists around the world.
        </li>
      </ul>
    </TimelineItem>
  </Timeline>
);

export default Experience;
