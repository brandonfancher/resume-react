import React from "react";
import bbc from "../assets/images/clients/bbc@2x.png";
import disney from "../assets/images/clients/disney@2x.png";
import github from "../assets/images/clients/github@2x.png";
import google from "../assets/images/clients/google@2x.png";
import html5 from "../assets/images/clients/html5@2x.png";
import kickstarter from "../assets/images/clients/kickstarter@2x.png";
import youtube from "../assets/images/clients/youtube@2x.png";
import vimeo from "../assets/images/clients/vimeo@2x.png";

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
                <img src={bbc} alt="" />
              </a>
            </li>
            <li>
              <a
                href="http://example.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={disney} alt="" />
              </a>
            </li>
            <li>
              <a
                href="http://example.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={github} alt="" />
              </a>
            </li>
            <li>
              <a
                href="http://example.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={google} alt="" />
              </a>
            </li>
            <li>
              <a
                href="http://example.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={html5} alt="" />
              </a>
            </li>
            <li>
              <a
                href="http://example.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={kickstarter} alt="" />
              </a>
            </li>
            <li>
              <a
                href="http://example.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={youtube} alt="" />
              </a>
            </li>
            <li>
              <a
                href="http://example.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={vimeo} alt="" />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </section>
);

export default Clients;
