import React from "react";
import PropTypes from "prop-types";

const TimelineItem = ({
  timeframe,
  heading,
  link,
  title,
  location,
  children,
}) => (
  <div className="c-timeline__item">
    <div className="c-timeline__point  t-timeline__point  t-primary-bg"></div>
    <div className="o-content">
      <div className="o-grid">
        <div className="o-grid__col-md-5">
          <div className="c-work__timeframe">{timeframe}</div>
          <h3 className="c-work__heading">
            <a href={link} target="_blank" rel="noopener noreferrer">
              {heading}
            </a>
          </h3>
          <h4 className="c-work__title">{title}</h4>
          <div className="c-work__location">{location}</div>
        </div>
        <div className="o-grid__col-md-7">{children}</div>
      </div>
    </div>
  </div>
);

TimelineItem.propTypes = {
  timeframe: PropTypes.string.isRequired,
  heading: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

export default TimelineItem;
