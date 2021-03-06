import React from "react";
import { useScrollReveal } from "../hooks";
import Section from "./Section";
import SocialButtons, { SocialButtonsLocation } from "./SocialButtons";
import ContactInfo from "./ContactInfo";
import SiteTitle, { SiteTitleLocation, SiteTitleSize } from "./SiteTitle";
import ContactForm from "./ContactForm";

const Footer = () => {
  useScrollReveal(".a-footer");

  return (
    <Section heading="Contact" description="Let's connect!">
      <ContactForm />
      <hr className="c-footer__contact-divider" />
      <div className="c-footer__contact">
        <ContactInfo />
      </div>

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
    </Section>
  );
};

export default Footer;
