import React from "react";
import PropTypes from "prop-types";
import Section from "./Section";

const items = [
  {
    title: "The User",
    description:
      "You can build your product with all the latest and greatest tools and boast 100% test coverage, but in the end, if it doesn't meet real needs for real people in a compelling way, what good is it? The User is paramount.",
  },
  {
    title: "The Team",
    description: (
      <p>
        Great products are built by great teams. And great teams are built on
        trust and propelled by a shared purpose. Trust is cultivated through
        humility, candor and{" "}
        <a
          href="https://www.youtube.com/watch?v=iCvmsMzlF7o"
          target="_blank"
          rel="noopener noreferrer"
        >
          vulnerability
        </a>
        . In an atmosphere of mutual trust, people arise to the occasion and
        contribute with their unique abilities.
      </p>
    ),
  },
  {
    title: "Drive & Purpose",
    description: (
      <p>
        I love what I do. With a laptop and an internet connection, one can
        build solutions that improve people's lives and change the world. I
        aspire to work at the intersection of{" "}
        <a
          href="https://www.youtube.com/watch?v=Ulx5d6nhqz8"
          target="_blank"
          rel="noopener noreferrer"
        >
          mastery, autonomy and purpose
        </a>
        . It's my{" "}
        <a
          href="https://medium.com/thrive-global/ikigai-the-japanese-secret-to-a-long-and-happy-life-might-just-help-you-live-a-more-fulfilling-9871d01992b7"
          target="_blank"
          rel="noopener noreferrer"
        >
          Ikigai.
        </a>
      </p>
    ),
  },
  {
    title: "Communication",
    description:
      "Whether with users, stakeholders, colleagues or dependencies, communication is crucial. As with any system, teams and organizations should identify their communication interfaces and optimize, keeping the goal front and center.",
  },
  {
    title: "Learning & Mentoring",
    description:
      "From foreign languages to programming languages, or challenging old assumptions and changing my mind, I love to learn. Learning equips us with the tools to enrich our lives and communities.",
  },
  {
    title: "Building",
    description: (
      <p>
        Whether I'm{" "}
        <a
          href="https://eos.io/news/eosio-software-release-native-sdks-for-swift-and-java/"
          target="_blank"
          rel="noopener noreferrer"
        >
          designing
        </a>{" "}
        or{" "}
        <a
          href="https://github.com/birkir/gatsby-source-prismic-graphql/pulls?q=is%3Apr+is%3Aclosed+author%3Abrandonfancher"
          target="_blank"
          rel="noopener noreferrer"
        >
          contributing
        </a>{" "}
        to open-source libraries or building web and mobile applications with
        React and React Native--I'm having fun. And I'm not dogmatic; if it's
        the right tool for the job, I'm game.
      </p>
    ),
  },
];

const ExpertiseItem = ({ number, title, description }) => (
  <div className="o-grid__col-sm-6">
    <div className="o-media  o-media--block  o-content">
      <div className="o-media__figure">
        <div className="c-number  t-primary-color">{number}</div>
      </div>
      <div className="o-media__body  o-content__body">
        <h3>{title}</h3>
        {typeof description === "string" ? <p>{description}</p> : description}
      </div>
    </div>
  </div>
);

ExpertiseItem.propTypes = {
  number: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.oneOfType([PropTypes.string, PropTypes.node])
    .isRequired,
};

const Expertise = () => (
  <Section
    heading="Expertise &amp; Philosophy"
    description="What I'm passionate about."
  >
    <div className="o-grid">
      {items.map((item, index) => (
        <ExpertiseItem
          key={item.title.toLowerCase().split(" ").join("-")}
          number={`0${index + 1}`}
          title={item.title}
          description={item.description}
        />
      ))}
    </div>
  </Section>
);

export default Expertise;
