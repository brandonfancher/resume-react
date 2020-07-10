import React from "react";
import TimelineItem from "./TimelineItem";
import SectionHeader from "./SectionHeader";

const Education = () => (
  <section className="o-section  t-section  ">
    <div className="o-section__header-bg  t-section__header"></div>
    <div className="o-section__content-bg  t-section__content"></div>

    <div className="o-container">
      <div className="o-section__container">
        <SectionHeader
          heading="Education"
          description="Lazy isn&#39;t in my vocabulary."
        />

        <div className="o-section__content  t-section__content  u-pt-0">
          <div className="o-content">
            <div className="a-education-timeline  c-timeline  t-border-color  o-section__full-top-space">
              <div className="c-timeline__end  t-border-color"></div>

              <TimelineItem
                timeframe="2008 &ndash; 2010"
                heading="Webster Tech University"
                title="Master of Computer Science"
                location="Miami, FL"
                summary="Consectetuer adipiscing elit. Phasellus hendrerit.
                      Pellentesque aaliquet nibh nec urna. In nisi neque,
                      aliquet vel, dapibus id, mattis vel, nisi. Sed pretium,
                      ligula sollicitudin laoreet viverra, tortor libero sodales
                      leo, eget blandit nunc tortor eu nibh."
              />
              <TimelineItem
                timeframe="2003 &ndash; 2008"
                heading="Ninsei University"
                title="Bachelor of Computer Science"
                location="Tokyo, Japan"
                summary="Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                      Phasellus hendrerit. Pellentesque aaliquet nibh nec urna.
                      In nisi neque, aliquet vel, dapibus id, mattis vel, nisi.
                      Sed pretium, ligula sollicitudin laoreet viverra, tortor
                      libero."
              />
              <TimelineItem
                timeframe="2000 &ndash; 2003"
                heading="Academy of Fine Arts"
                title="Master of Arts"
                location="Berlin, Germany"
                summary="Fusce lacinia arcu et nulla. Nulla vitae mauris non felis
                      mollis faucibus. Phasellus hendrerit. Pellentesque
                      aaliquet nibh nec urna. In nisi neque, aliquet vel,
                      dapibus id, mattis vel, nisi. Sed pretium, ligula
                      sollicitudin laoreet viverra, tortor libero sodales."
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default Education;
