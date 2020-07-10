import React from "react";
import avatar from "../assets/images/header/avatar.jpg";
import SocialButtons from "./SocialButtons";

const Header = () => (
  <section className="o-section o-section--header  t-section  t-section--header">
    <div className="c-header">
      <div className="o-section__header-bg  t-section__header"></div>
      <div className="o-section__content-bg  t-section__content"></div>

      <div className="o-container">
        <div className="o-section__container">
          <header className="o-section__header  c-header__header  t-section__header">
            <div className="c-header__inner-header">
              <div className="c-header__avatar">
                <div className="a-header  c-avatar">
                  <img className="c-avatar__img" src={avatar} alt="" />
                </div>
              </div>
            </div>
          </header>

          <div className="o-section__content  c-header__content  t-section__content">
            <div className="c-header__inner-content">
              <div className="c-header__top">
                <div className="c-header__brand">
                  <div className="c-brand">
                    <h1 className="c-brand__title  t-title">
                      <span className="c-brand__sizer">
                        <span className="a-header  c-brand__first-word  t-title__first-word">
                          Brandon
                        </span>
                        <span className="a-header  c-brand__second-word  t-title__second-word">
                          Fancher
                        </span>
                      </span>
                    </h1>
                    <h2 className="a-header  c-brand__sub-title  t-sub-title">
                      <span className="c-brand__sizer">
                        Web Developer &amp; Front-end Expert
                      </span>
                    </h2>
                  </div>
                </div>

                <SocialButtons />
              </div>

              <div className="c-header__contact">
                <hr className="a-header  c-header__contact-divider" />

                <div className="o-grid">
                  <div className="o-grid__col-md-3  o-grid__col-sm-6">
                    <div className="a-header  o-content">
                      <div className="o-content__body">
                        <h4>Location</h4>
                        <address>Portland, OR</address>
                      </div>
                    </div>
                  </div>

                  <div className="o-grid__col-md-3  o-grid__col-sm-6">
                    <div className="a-header  o-content">
                      <div className="o-content__body">
                        <h4>Phone</h4>
                        <p>534.456.886</p>
                      </div>
                    </div>
                  </div>

                  <div className="o-grid__col-md-3  o-grid__col-sm-6">
                    <div className="a-header  o-content">
                      <div className="o-content__body">
                        <a
                          href="#"
                          target="_blank"
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
                    <div className="a-header  o-content">
                      <div className="o-content__body">
                        <a
                          href="#"
                          target="_blank"
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
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default Header;
