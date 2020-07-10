import React from "react";
import SectionHeader from "./SectionHeader";
import SocialButtons from "./SocialButtons";

const Footer = () => (
  <section className="o-section  t-section  o-section--footer">
    <div className="o-section__header-bg  t-section__header"></div>
    <div className="o-section__content-bg  t-section__content"></div>

    <div className="o-container">
      <div className="o-section__container">
        <SectionHeader heading="Contact" description="Call me, maybe." />

        <div className="o-section__content  t-section__content  ">
          <div className="c-footer__contact">
            <div className="o-grid">
              <div className="o-grid__col-md-3  o-grid__col-sm-6">
                <div className="o-content">
                  <div className="o-content__body">
                    <h4>Location</h4>
                    <address>Portland, OR</address>
                  </div>
                </div>
              </div>

              <div className="o-grid__col-md-3  o-grid__col-sm-6">
                <div className="o-content">
                  <div className="o-content__body">
                    <h4>Phone</h4>
                    <p>534.456.886</p>
                  </div>
                </div>
              </div>

              <div className="o-grid__col-md-3  o-grid__col-sm-6">
                <div className="o-content">
                  <div className="o-content__body">
                    <a
                      href="#"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="t-link-container"
                    >
                      <h4>Web</h4>
                      <p>
                        <span className="t-link-container__item--blended">
                          ruventhemes.com
                        </span>
                      </p>
                    </a>
                  </div>
                </div>
              </div>

              <div className="o-grid__col-md-3  o-grid__col-sm-6">
                <div className="o-content">
                  <div className="o-content__body">
                    <a
                      href="#"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="t-link-container"
                    >
                      <h4>Email</h4>
                      <p>
                        <span className="t-link-container__item--blended">
                          hello@example.com
                        </span>
                      </p>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <hr className="c-footer__contact-divider" />

          <div className="o-content">
            <div className="c-footer__bottom">
              <div className="c-footer__brand">
                <div className="c-brand">
                  <div className="o-content__body">
                    <h1 className="c-brand__title  t-title">
                      <span className="c-brand__sizer  c-brand__sizer--sm">
                        <span className="a-footer  c-brand__first-word  t-title__first-word">
                          Brandon
                        </span>
                        <span className="a-footer  c-brand__second-word  t-title__second-word">
                          Fancher
                        </span>
                      </span>
                    </h1>
                  </div>
                </div>
              </div>
              <SocialButtons />
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default Footer;
