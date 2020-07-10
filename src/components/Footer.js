import React from "react";
import { useScrollReveal } from "../hooks";
import SectionHeader from "./SectionHeader";
import SocialButtons, { SocialButtonsLocation } from "./SocialButtons";
import ContactInfo from "./ContactInfo";
import SiteTitle, { SiteTitleLocation, SiteTitleSize } from "./SiteTitle";

const Footer = () => {
  useScrollReveal(".a-footer");

  return (
    <section className="o-section  t-section  o-section--footer">
      <div className="o-section__header-bg  t-section__header"></div>
      <div className="o-section__content-bg  t-section__content"></div>

      <div className="o-container">
        <div className="o-section__container">
          <SectionHeader heading="Contact" description="Call me, maybe." />

          <div className="o-section__content  t-section__content  ">
            <div className="c-footer__contact">
              <ContactInfo />
            </div>

            <hr className="c-footer__contact-divider" />

            <div className="o-content">
              <div className="c-footer__bottom">
                <div className="c-footer__brand">
                  <div className="c-brand">
                    <div className="o-content__body">
                      <SiteTitle
                        size={SiteTitleSize.SMALL}
                        location={SiteTitleLocation.FOOTER}
                      />
                    </div>
                  </div>
                </div>
                <SocialButtons location={SocialButtonsLocation.FOOTER} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;
