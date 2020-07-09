import React from "react";

const Profiles = () => (
  <section className="o-section  t-section  ">
    <div className="o-section__header-bg  t-section__header"></div>
    <div className="o-section__content-bg  t-section__content"></div>

    <div className="o-container">
      <div className="o-section__container">
        <header className="o-section__header  t-section__header">
          <div className="o-content">
            <h2 className="o-section__heading">Profiles</h2>
            <div className="o-content__body  o-section__description">
              Busy as usual.
            </div>
          </div>
        </header>

        <div className="o-section__content  t-section__content  ">
          <div className="o-grid">
            <div className="o-grid__col-xl-4  o-grid__col-sm-6">
              <div className="o-content">
                <a
                  href="http://themeforest.net/user/ruventhemes/portfolio"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="t-link-container"
                >
                  <div className="o-media  o-media--block">
                    <div className="o-media__figure">
                      <div className="c-profile__icon">
                        <i className="fab  fa-lg  fa-envira"></i>
                      </div>
                    </div>
                    <div className="o-media__body  o-content__body">
                      <h3 className="t-link-container__item">Themeforest</h3>
                      <p>
                        An overview of the themes and templates that I sell.
                      </p>
                    </div>
                  </div>
                </a>
              </div>
            </div>

            <div className="o-grid__col-xl-4  o-grid__col-sm-6">
              <div className="o-content">
                <a
                  href="https://github.com/hatra-e/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="t-link-container"
                >
                  <div className="o-media  o-media--block">
                    <div className="o-media__figure">
                      <div className="c-profile__icon">
                        <i className="fab  fa-lg  fa-github-alt"></i>
                      </div>
                    </div>
                    <div className="o-media__body  o-content__body">
                      <h3 className="t-link-container__item">GitHub</h3>
                      <p>All my open source projects for you analyze.</p>
                    </div>
                  </div>
                </a>
              </div>
            </div>

            <div className="o-grid__col-xl-4  o-grid__col-sm-6">
              <div className="o-content">
                <a
                  href="http://wordpress.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="t-link-container"
                >
                  <div className="o-media  o-media--block">
                    <div className="o-media__figure">
                      <div className="c-profile__icon">
                        <i className="fab  fa-lg  fa-medium"></i>
                      </div>
                    </div>
                    <div className="o-media__body  o-content__body">
                      <h3 className="t-link-container__item">Medium</h3>
                      <p>
                        Yes. I'm also a blogger and here you find my writings.
                      </p>
                    </div>
                  </div>
                </a>
              </div>
            </div>

            <div className="o-grid__col-xl-4  o-grid__col-sm-6">
              <div className="o-content">
                <a
                  href="https://dribbble.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="t-link-container"
                >
                  <div className="o-media  o-media--block">
                    <div className="o-media__figure">
                      <div className="c-profile__icon">
                        <i className="fab  fa-lg  fa-dribbble"></i>
                      </div>
                    </div>
                    <div className="o-media__body  o-content__body">
                      <h3 className="t-link-container__item">Dribbble</h3>
                      <p>
                        Whenever a design is finalized, it lands right here.
                      </p>
                    </div>
                  </div>
                </a>
              </div>
            </div>

            <div className="o-grid__col-xl-4  o-grid__col-sm-6">
              <div className="o-content">
                <a
                  href="https://www.flickr.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="t-link-container"
                >
                  <div className="o-media  o-media--block">
                    <div className="o-media__figure">
                      <div className="c-profile__icon">
                        <i className="fab  fa-lg  fa-flickr"></i>
                      </div>
                    </div>
                    <div className="o-media__body  o-content__body">
                      <h3 className="t-link-container__item">Flickr</h3>
                      <p>A selection of photos I shot throughout the years.</p>
                    </div>
                  </div>
                </a>
              </div>
            </div>

            <div className="o-grid__col-xl-4  o-grid__col-sm-6">
              <div className="o-content">
                <a
                  href="http://www.deviantart.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="t-link-container"
                >
                  <div className="o-media  o-media--block">
                    <div className="o-media__figure">
                      <div className="c-profile__icon">
                        <i className="fab  fa-lg  fa-deviantart"></i>
                      </div>
                    </div>
                    <div className="o-media__body  o-content__body">
                      <h3 className="t-link-container__item">DeviantArt</h3>
                      <p>A place for my sketches and drawings.</p>
                    </div>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default Profiles;
