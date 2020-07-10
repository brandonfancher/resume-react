import React from "react";
import SectionHeader from "./SectionHeader";

const Intro = () => (
  <section className="o-section  t-section  ">
    <div className="o-section__header-bg  t-section__header"></div>
    <div className="o-section__content-bg  t-section__content"></div>

    <div className="o-container">
      <div className="o-section__container">
        <SectionHeader heading="Intro" description="What I am all about." />

        <div className="o-section__content  t-section__content  ">
          <div className="o-content">
            <div className="c-intro">
              <div className="o-content__body">
                <p>
                  Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                  Phasellus hendrerit. Pellentesque aaliquet nibh nec urna. In
                  nisi neque, aliquet vel, dapibus id, mattis vel, nisi. Sed
                  <a href="#" target="_blank">
                    {` `}pretium
                  </a>
                  , ligula sollicitudin laoreet viverra, tortor libero sodales
                  leo, eget blandit nunc tortor eu nibh. Nullam mollis. Ut
                  justo. Suspendisse potenti. Nulla vitae mauris non felis
                  mollis faucibus.
                </p>
                <p>
                  Sed egestas, ante et vulputate volutpat, eros pede semper est,
                  vitae luctus metus libero eu augue. Morbi purus libero,
                  faucibus adipiscing, commodo quis, gravida id, est. Sed
                  lectus. Praesent elementum hendrerit tortor. Sed semper lorem
                  at felis. Vestibulum volutpat, lacus a ultrices sagittis, mi
                  neque euismod dui, eu pulvinar nunc sapien ornare nisl.
                  Phasellus pede arcu, dapibus eu, fermentum et, dapibus sed,
                  urna. Fusce lacinia arcu et nulla. Nulla vitae mauris non
                  felis mollis.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default Intro;
