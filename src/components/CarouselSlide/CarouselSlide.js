import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";

import "./carousel-slide.css";

function CarouselSlide(props) {
  const { className, author, title, image, ...otherProps } = props;

  return (
    <div className={classNames("carousel-slide", className)} {...otherProps}>
      <img
        className="carousel-slide__image"
        src={image}
        alt={`${title} (Author ${author})`}
      />

      <div className="carousel-slide__overlay">
        <div className="carousel-slide__author">{author}</div>
        <div className="carousel-slide__title">{title}</div>
      </div>
    </div>
  );
}

CarouselSlide.propTypes = {
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  className: PropTypes.string
};

export default CarouselSlide;
