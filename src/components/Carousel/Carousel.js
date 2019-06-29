import React from "react";
import PropTypes from "prop-types";
import throttle from "lodash-es/throttle";

export default class Carousel extends React.PureComponent {
  static defaultProps = {
    slides: [],
    bullets: false,
    arrows: false,
    autoplay: 0
  };

  static propTypes = {
    slides: PropTypes.arrayOf(
      PropTypes.shape({
        image: PropTypes.string.isRequired,
        alt: PropTypes.string.isRequired
      })
    ).isRequired,
    bullets: PropTypes.bool,
    arrows: PropTypes.bool,
    autoplay: PropTypes.number
  };

  state = {
    slideWidth: 0,
    currentSlide: 0,
    slidesCount: 0,
    trackWidth: 0,
    offset: 0,
    isUserInteract: false
  };

  goTo(index) {
    const offset = this.state.slideWidth * index;

    this.setState(
      {
        offset,
        currentSlide: index
      },
      () => this.updateSlidesStyle()
    );
  }

  get nextIndex() {
    const { slidesCount, currentSlide } = this.state;

    return currentSlide + 1 > slidesCount - 1 ? 0 : currentSlide + 1;
  }

  get prevIndex() {
    const { slidesCount, currentSlide } = this.state;

    return currentSlide - 1 < 0 ? slidesCount - 1 : currentSlide - 1;
  }

  onArrowClick = direction => {
    this.goTo(direction === "prev" ? this.prevIndex : this.nextIndex);
    this.setState({ isUserInteract: true });
    this.stopAutoPlay();
  };

  onBulletClick = index => {
    this.goTo(index);
    this.setState({ isUserInteract: true });
    this.stopAutoPlay();
  };

  onResize = () => {
    this.updateSizes();
    this.goTo(this.state.currentSlide);
  };

  onMouseOver = () => {
    this.stopAutoPlay();
  };

  onMouseLeave = () => {
    if (!this.state.isUserInteract) this.autoPlay();
  };

  throttledOnResize = throttle(this.onResize.bind(this), 300);

  updateSizes() {
    const slideWidth = this.trackEl.clientWidth;
    const slidesCount = this.props.slides.length;
    const trackWidth = slidesCount * slideWidth;

    this.setState(
      {
        slideWidth,
        trackWidth,
        slidesCount
      },
      () => this.updateSlidesStyle()
    );
  }

  autoPlay() {
    this.timer = setInterval(() => {
      this.goTo(this.nextIndex);
    }, this.props.autoplay);
  }

  stopAutoPlay() {
    clearInterval(this.timer);
  }

  componentDidMount() {
    this.updateSizes();

    if (this.props.autoplay) {
      this.autoPlay();
    }

    window.addEventListener("resize", this.throttledOnResize);
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.throttledOnResize);
  }

  updateSlidesStyle() {
    const { offset, trackWidth } = this.state;

    this.setState({
      slidesStyles: {
        transition: "transform 700ms cubic-bezier(0.165, 0.84, 0.44, 1) 0s",
        width: `${trackWidth}px`,
        transform: `translate3d(${-1 * offset}px, 0px, 0px)`
      }
    });
  }

  render() {
    const { slides, arrows, bullets } = this.props;

    return (
      <div className="carousel carousel--ltr">
        <div
          className="carousel__track"
          ref={trackEl => (this.trackEl = trackEl)}
          onMouseOver={this.onMouseOver}
          onMouseLeave={this.onMouseLeave}
        >
          <ul className="carousel__slides" style={this.state.slidesStyles}>
            {slides.length > 0 &&
              slides.map(({ image, alt }, index) => (
                <li
                  key={image}
                  style={{
                    width: this.state.slideWidth + "px"
                  }}
                  className={
                    index === this.state.currentSlide
                      ? "carousel__slide carousel__slide--active"
                      : "carousel__slide"
                  }
                >
                  <img src={image} alt={alt} />
                </li>
              ))}
          </ul>
        </div>

        {arrows && (
          <div className="carousel__arrows">
            <button
              className="carousel__arrow carousel__arrow--left"
              onClick={() => this.onArrowClick("prev")}
            >
              <span className="visually-hidden">Previous</span>
            </button>
            <button
              className="carousel__arrow carousel__arrow--right"
              onClick={() => this.onArrowClick("next")}
            >
              <span className="visually-hidden">Next</span>
            </button>
          </div>
        )}

        {bullets && (
          <div className="carousel__bullets">
            {slides.length > 0 &&
              slides.map((_, index) => (
                <button
                  key={index}
                  className={
                    index === this.state.currentSlide
                      ? "carousel__bullet carousel__bullet--active"
                      : "carousel__bullet"
                  }
                  onClick={() => this.onBulletClick(index)}
                >
                  <span className="visually-hidden">{index + 1}</span>
                </button>
              ))}
          </div>
        )}
      </div>
    );
  }
}
