import React from "react";
import SectionHeader from "./SectionHeader";

const Awards = () => (
  <section className="o-section  t-section  ">
    <div className="o-section__header-bg  t-section__header"></div>
    <div className="o-section__content-bg  t-section__content"></div>

    <div className="o-container">
      <div className="o-section__container">
        <SectionHeader heading="Awards" description="Happy times!" />

        <div className="o-section__content  t-section__content  ">
          <div className="o-grid">
            <div className="o-grid__col-md-4  o-grid__col-sm-6">
              <div className="o-content">
                <hr className="c-deco-line  t-primary-color-line" />
                <div className="o-content__body">
                  <h3>Unicorn Developer Award 2016</h3>
                  <p>
                    Lorem ipsum dolor sit amet, justo eget porttitor mauris sit
                    amet felis. Neque id cursus faucibus.
                  </p>
                </div>
              </div>
            </div>

            <div className="o-grid__col-md-4  o-grid__col-sm-6">
              <div className="o-content">
                <hr className="c-deco-line  t-primary-color-line" />
                <div className="o-content__body">
                  <h3>Website of the Year Award 2015</h3>
                  <p>
                    Praesent dapibus dolor sit amet, justo eget porttitor mauris
                    sit amet. Neque id cursus faucibus.
                  </p>
                </div>
              </div>
            </div>

            <div className="o-grid__col-md-4  o-grid__col-sm-6">
              <div className="o-content">
                <hr className="c-deco-line  t-primary-color-line" />
                <div className="o-content__body">
                  <h3>1st Place at CSShacker Conference</h3>
                  <p>
                    Lorem ipsum dolor sit amet, justo eget porttitor mauris sit
                    amet felis. Neque id cursus faucibus.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default Awards;
