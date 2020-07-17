import React from "react";
import NetlifyForm from "react-netlify-form";
import Obfuscate from "react-obfuscate";
import Spinner from "react-spinkit";
import { FaPaperPlane } from "react-icons/fa";

const ContactForm = () => (
  <NetlifyForm name="contact-form" honeypotName="boomShakalaka">
    {({ loading, error, success }) => {
      if (error) {
        return (
          <div className="contact-result error">
            Oops. There was a problem submitting your message. Please refresh
            the page and try again.
          </div>
        );
      }

      if (success) {
        return (
          <div className="contact-result success">
            Thanks for reaching out! I'll get back to you soon. If you don't
            hear from me within the next 48 hours, please reach out at{" "}
            <Obfuscate email="brandonfancher@gmail.com" />.
          </div>
        );
      }

      return (
        <div className="contact-form">
          <input
            type="text"
            name="name"
            placeholder="Name"
            required
            disabled={loading}
            aria-label="Full Name"
          />
          <input
            type="email"
            name="email"
            placeholder="Email Address"
            required
            disabled={loading}
            aria-label="Email Address"
          />
          <textarea
            name="message"
            placeholder="Message"
            label="Message"
            required
            disabled={loading}
            aria-label="Your Message"
          />
          <div id="submit-form">
            <button
              className="t-social-button"
              type="submit"
              title="Send Message"
              disabled={loading}
            >
              {loading ? (
                <Spinner className="result" name="ball-scale-ripple-multiple" />
              ) : (
                <FaPaperPlane className="fab fa-lg" style={{ marginTop: 4 }} />
              )}
            </button>
          </div>
        </div>
      );
    }}
  </NetlifyForm>
);

export default ContactForm;
