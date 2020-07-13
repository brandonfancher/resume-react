import React from "react";
import Section from "./Section";
import Timeline from "./Timeline";
import TimelineItem from "./TimelineItem";

const Experience = () => (
  <Section heading="Experience" wrapperClasses="u-pb-0">
    <Timeline begins={false}>
      <TimelineItem
        timeframe="Sep 2019 &ndash; Present"
        heading="Block.one"
        link="https://block.one"
        title="Director &amp; Engineering Manager, Mobile"
        location="Blacksburg, VA USA"
      >
        <p>
          Block.one is a producer of scalable, high-performance, open-source
          blockchain software and user-facing applications that build upon
          blockchain and smart contracts.
        </p>
        <ul>
          <li>
            Scaled the mobile team from two to 12 native iOS and Android
            developers spanning multiple projects.
          </li>
          <li>
            Proposed and architected, and organized development, delivery and
            documentation of multiple products, including{" "}
            <a
              href="https://eos.io/news/eosio-labs-release-the-universal-authenticator-library-ual-increasing-the-accessibility-of-blockchain-applications/"
              target="_blank"
              rel="noopener noreferrer"
            >
              blockchain authentication libraries
            </a>
            , integrations with secure cryptographic signing hardware, and{" "}
            <a
              href="https://eos.io/news/eosio-software-release-native-sdks-for-swift-and-java/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Swift and Java blockchain SDKs
            </a>
            .
          </li>
          <li>
            Organized and led development of native iOS and Android apps for a
            new{" "}
            <a
              href="https://voice.com/learn-more/"
              target="_blank"
              rel="noopener noreferrer"
            >
              social network
            </a>{" "}
            built on EOSIO blockchain technology.
          </li>
        </ul>
      </TimelineItem>
      <TimelineItem
        timeframe="Apr 2018 &ndash; Aug 2019"
        heading="Block.one"
        link="https://block.one"
        title="Front-end Web Developer"
        location="Blacksburg, VA USA"
      >
        <p>
          Block.one is a producer of scalable, high-performance, open-source
          blockchain software and user-facing applications that build upon
          blockchain and smart contracts.
        </p>
        <ul>
          <li>Hired as a React web developer; I innovated and excelled.</li>
          <li>
            Continually assumed more responsibility; became de facto team lead
            for a small mobile team due to my prior mobile experience in React
            Native.
          </li>
          <li>Facilitated agile scrum ceremonies.</li>
          <li>Consistently promoted and defended the user experience.</li>
          <li>
            Spearheaded, architected and authored protocols, transports and
            specifications for inter-platform communication with our mobile
            applications.
          </li>
          <li>
            Architected and wrote platform-agnostic JavaScript libraries
            designed to be leveraged natively by iOS applications over
            JavaScriptCore.
          </li>
          <li>
            Became an internally recognized thought leader and influencer.
          </li>
        </ul>
      </TimelineItem>
      <TimelineItem
        timeframe="Dec 2015 &ndash; Apr 2018"
        heading="Levvel"
        link="https://www.levvel.io/"
        title="Consultant &amp; Full-stack Developer"
        location="Charlotte, NC USA"
      >
        <p>
          Levvel helps clients transform their business with strategic
          consulting and technical execution services.
        </p>
        <ul>
          <li>Worked with clients from ideation to implementation.</li>
          <li>
            Collaborated with Levvel’s Product Innovation and Design teams to
            create beautiful products tailored to our clients and their
            customers.
          </li>
          <li>Mentored junior developers and interns.</li>
          <li>
            Provided leadership and expertise in front-end technologies,
            including React and React Native.
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
          Choice Translating's services include translation, software and
          website localization, international brand validation, and interpreting
          services in over 200 languages. I automated processes, managed
          internationalization (i18n) and localization (l10n) projects, and
          oversaw production and delivery for global market research projects.
        </p>
      </TimelineItem>
    </Timeline>
  </Section>
);

export default Experience;
