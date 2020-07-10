import React from "react";
import TimelineItem from "./TimelineItem";
import SectionHeader from "./SectionHeader";

const Experience = () => (
  <section className="o-section  t-section  ">
    <div className="o-section__header-bg  t-section__header"></div>
    <div className="o-section__content-bg  t-section__content"></div>

    <div className="o-container">
      <div className="o-section__container">
        <SectionHeader
          heading="Experience"
          description="Yes. I&#39;ve been around."
        />

        <div className="o-section__content  t-section__content  u-pb-0">
          <div className="a-experience-timeline  c-timeline  t-border-color">
            <TimelineItem
              timeframe="2015 &ndash; Present"
              heading="Unicorn Incubator Inc."
              title="Senior Interface Designer"
              location="Portland, OR"
              summary="Consectetuer adipiscing elit. Phasellus hendrerit.
                      Pellentesque aaliquet nibh nec urna. In nisi neque,
                      aliquet vel, dapibus id, mattis vel, nisi. Sed pretium,
                      ligula sollicitudin laoreet viverra, tortor libero sodales
                      leo, eget blandit nunc tortor eu nibh. Nullam mollis. Ut
                      justo. Suspendisse potenti."
            />
            <TimelineItem
              timeframe="2013 &ndash; 2015"
              heading="California Design Bureau"
              title="Creative Director"
              location="Cupertino, CA"
              summary="Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                      Phasellus hendrerit. Pellentesque aaliquet nibh nec urna.
                      In nisi neque, aliquet vel, dapibus id, mattis vel, nisi.
                      Sed pretium, ligula sollicitudin laoreet viverra, tortor
                      libero sodales leo, eget blandit nunc tortor eu nibh.
                      Nullam mollis."
            />
            <TimelineItem
              timeframe="2010 &ndash; 2013"
              heading="Dreamland Creative"
              title="Front-end Designer"
              location="New York, NY"
              summary="Fusce lacinia arcu et nulla. Nulla vitae mauris non felis
                      mollis faucibus. Phasellus hendrerit. Pellentesque
                      aaliquet nibh nec urna. In nisi neque, aliquet vel,
                      dapibus id, mattis vel, nisi. Sed pretium, ligula
                      sollicitudin laoreet viverra, tortor libero sodales leo,
                      eget blandit nunc tortor eu nibh."
            />
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default Experience;
