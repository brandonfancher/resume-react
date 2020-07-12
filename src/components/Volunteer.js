import React from "react";
import Timeline from "./Timeline";
import TimelineItem from "./TimelineItem";

const Volunteer = () => (
  <Timeline heading="Volunteering" description="For the community.">
    <TimelineItem
      timeframe="Jun 2016 &ndash; Apr 2018"
      heading="React Charlotte Meetup Group"
      link="http://www.meetup.com/ReactJS-Charlotte/"
      title="Co-Founder, Organizer &amp; Speaker"
      location="Charlotte, NC USA"
    >
      <p>
        I and a couple friends from Team Luna started the ReactJS Meetup Group.
        We met monthly with anywhere from 30-50 people in attendance regularly.
        I gave talks on React, React Native, Redux, etc. Although I moved away,
        the group continues to meet.
      </p>
    </TimelineItem>
    <TimelineItem
      timeframe="Mar 2016 &ndash; Apr 2018"
      heading="Team Luna"
      link="http://teamluna.co"
      title="Founding Member &amp; App Developer"
      location="Charlotte, NC USA"
    >
      <p>
        Team Luna is a working group of developers, designers, and product
        experts committed to lifelong learning, advocating for developers, and
        fostering the local technology community in Charlotte.
      </p>
      <ul>
        <li>
          Developed an{" "}
          <a
            href="https://github.com/brandonfancher/charlotte-lightrail"
            target="_blank"
            rel="noopener noreferrer"
          >
            open-source
          </a>{" "}
          iOS (React Native) transit app for the Charlotte community—
          <a
            href="https://apps.apple.com/us/app/charlotte-light-rail/id1131471316"
            target="_blank"
            rel="noopener noreferrer"
          >
            Charlotte Light Rail
          </a>
          .
        </li>
        <li>
          It is the most popular app for the Charlotte light rail and boasts
          thousands of monthly average users.
        </li>
      </ul>
    </TimelineItem>
  </Timeline>
);

export default Volunteer;
