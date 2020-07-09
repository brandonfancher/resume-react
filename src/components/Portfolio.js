import React from "react";
import portfolio1 from "../assets/images/portfolio/1_thumb.jpg";
import portfolio2 from "../assets/images/portfolio/2_full.jpg";
import portfolio3 from "../assets/images/portfolio/3_thumb.jpg";
import portfolio4 from "../assets/images/portfolio/4_thumb.jpg";
import portfolio5 from "../assets/images/portfolio/5_thumb.jpg";
import portfolio6 from "../assets/images/portfolio/6_full.jpg";

const Portfolio = () => (
  <section className="o-section t-section">
    <div className="o-section__header-bg  t-section__header"></div>
    <div className="o-section__content-bg  t-section__content"></div>

    <div className="o-container">
      <div className="o-section__container">
        <header className="o-section__header  t-section__header">
          <div className="o-content">
            <h2 className="o-section__heading">Portfolio</h2>
            <div className="o-content__body  o-section__description">
              Here it gets interesting.
            </div>
          </div>
        </header>

        <div className="o-section__content  t-section__content  o-section__full-bottom-space">
          <div className="o-grid  o-grid--gallery">
            <div className="o-grid__col-sm-6">
              <a
                className="c-image-overlay  t-image-overlay  js-lightbox"
                href="assets/images/portfolio/1_full.jpg"
                data-lightbox-hidpi=""
                title="Musée du Louvre"
                data-lightbox-gallery="portfolio"
              >
                <img src={portfolio1} alt="" />
                <div className="c-image-overlay__content">
                  <h3>Musée du Louvre</h3>
                  <hr className="c-image-overlay__deco-line  t-image-overlay__deco-line" />
                  <p>
                    Fusce lacinia arcu et nulla. Nulla vitae mauris non felis
                    mollis faucibus. Lorem ipsum dolor sit amet, consectetuer
                    adipiscing elit.
                  </p>
                </div>
              </a>
            </div>

            <div className="o-grid__col-sm-6">
              <a
                className="c-image-overlay  t-image-overlay  js-lightbox"
                href="assets/images/portfolio/2_full.jpg"
                data-lightbox-hidpi=""
                title="Tunnel Effect"
                data-lightbox-gallery="portfolio"
              >
                <img src={portfolio2} alt="" />
                <div className="c-image-overlay__content">
                  <h3>Tunnel Effect</h3>
                  <hr className="c-image-overlay__deco-line  t-image-overlay__deco-line" />
                  <p>
                    Fusce lacinia arcu et nulla. Nulla vitae mauris non felis
                    mollis faucibus. Lorem ipsum dolor sit amet, consectetuer
                    adipiscing elit.
                  </p>
                </div>
              </a>
            </div>

            <div className="o-grid__col-sm-6">
              <a
                className="c-image-overlay  t-image-overlay  js-lightbox"
                href="assets/images/portfolio/3_full.jpg"
                data-lightbox-hidpi=""
                title="New York, New York"
                data-lightbox-gallery="portfolio"
              >
                <img src={portfolio3} alt="" />
                <div className="c-image-overlay__content">
                  <h3>New York, New York</h3>
                  <hr className="c-image-overlay__deco-line  t-image-overlay__deco-line" />
                  <p>
                    Fusce lacinia arcu et nulla. Nulla vitae mauris non felis
                    mollis faucibus. Lorem ipsum dolor sit amet, consectetuer
                    adipiscing elit.
                  </p>
                </div>
              </a>
            </div>

            <div className="o-grid__col-sm-6">
              <a
                className="c-image-overlay  t-image-overlay  js-lightbox"
                href="assets/images/portfolio/4_full.jpg"
                data-lightbox-hidpi=""
                title="Sky High"
                data-lightbox-gallery="portfolio"
              >
                <img src={portfolio4} alt="" />
                <div className="c-image-overlay__content">
                  <h3>Sky High</h3>
                  <hr className="c-image-overlay__deco-line  t-image-overlay__deco-line" />
                  <p>
                    Fusce lacinia arcu et nulla. Nulla vitae mauris non felis
                    mollis faucibus. Lorem ipsum dolor sit amet, consectetuer
                    adipiscing elit.
                  </p>
                </div>
              </a>
            </div>

            <div className="o-grid__col-sm-6">
              <a
                className="c-image-overlay  t-image-overlay  js-lightbox"
                href="assets/images/portfolio/5_full.jpg"
                data-lightbox-hidpi=""
                title="The Eiffel Tower"
                data-lightbox-gallery="portfolio"
              >
                <img src={portfolio5} alt="" />
                <div className="c-image-overlay__content">
                  <h3>The Eiffel Tower</h3>
                  <hr className="c-image-overlay__deco-line  t-image-overlay__deco-line" />
                  <p>
                    Fusce lacinia arcu et nulla. Nulla vitae mauris non felis
                    mollis faucibus. Lorem ipsum dolor sit amet, consectetuer
                    adipiscing elit.
                  </p>
                </div>
              </a>
            </div>

            <div className="o-grid__col-sm-6">
              <a
                className="c-image-overlay  t-image-overlay  js-lightbox"
                href="assets/images/portfolio/6_full.jpg"
                data-lightbox-hidpi=""
                title="Reaching the Clouds"
                data-lightbox-gallery="portfolio"
              >
                <img src={portfolio6} alt="" />
                <div className="c-image-overlay__content">
                  <h3>Reaching the Clouds</h3>
                  <hr className="c-image-overlay__deco-line  t-image-overlay__deco-line" />
                  <p>
                    Fusce lacinia arcu et nulla. Nulla vitae mauris non felis
                    mollis faucibus. Lorem ipsum dolor sit amet, consectetuer
                    adipiscing elit.
                  </p>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default Portfolio;
