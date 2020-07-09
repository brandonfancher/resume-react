import React from "react";

const Clients = () => (
  <section className="o-section  t-section  ">
    <div className="o-section__header-bg  t-section__header"></div>
    <div className="o-section__content-bg  t-section__content"></div>

    <div className="o-container">
      <div className="o-section__container">
        <header className="o-section__header  t-section__header">
          <div className="o-content">
            <h2 className="o-section__heading">Clients</h2>
            <div className="o-content__body  o-section__description">
              Happy people.
            </div>
          </div>
        </header>

        <div className="o-section__content  t-section__content  ">
          <ul className="c-clients  o-content">
            <li>
              <a
                href="http://example.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src="assets/images/clients/bbc.png" alt="" />
              </a>
            </li>
            <li>
              <a
                href="http://example.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src="assets/images/clients/disney.png" alt="" />
              </a>
            </li>
            <li>
              <a
                href="http://example.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src="assets/images/clients/github.png" alt="" />
              </a>
            </li>
            <li>
              <a
                href="http://example.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src="assets/images/clients/google.png" alt="" />
              </a>
            </li>
            <li>
              <a
                href="http://example.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src="assets/images/clients/html5.png" alt="" />
              </a>
            </li>
            <li>
              <a
                href="http://example.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src="assets/images/clients/kickstarter.png" alt="" />
              </a>
            </li>
            <li>
              <a
                href="http://example.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src="assets/images/clients/youtube.png" alt="" />
              </a>
            </li>
            <li>
              <a
                href="http://example.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src="assets/images/clients/vimeo.png" alt="" />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </section>
);

export default Clients;
