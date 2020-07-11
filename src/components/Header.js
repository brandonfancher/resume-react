import React from "react";
import { useScrollReveal } from "../hooks";
import SocialButtons, { SocialButtonsLocation } from "./SocialButtons";
import ContactInfo, { ContactInfoLocation } from "./ContactInfo";
import SiteTitle, { SiteTitleLocation } from "./SiteTitle";
import avatar from "../assets/images/header/brandon-fancher-headshot-by-richard-israel.jpg";

const Header = () => {
  useScrollReveal(".a-header", {
    duration: 1200,
    delay: 400,
    distance: "20px",
  });

  return (
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
                      <SiteTitle location={SiteTitleLocation.HEADER} />
                      <h2 className="a-header  c-brand__sub-title  t-sub-title">
                        <span className="c-brand__sizer">
                          Web Developer &amp; Front-end Expert
                        </span>
                      </h2>
                    </div>
                  </div>

                  <SocialButtons location={SocialButtonsLocation.HEADER} />
                </div>

                <div className="c-header__contact">
                  <hr className="a-header  c-header__contact-divider" />

                  <ContactInfo location={ContactInfoLocation.HEADER} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Header;
