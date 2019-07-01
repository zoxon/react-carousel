import React from "react";
import { mount } from "enzyme";

import Carousel from "../Carousel";

describe("Carousel", () => {
  it("renders without crashing", () => {
    const wrapper = mount(
      <Carousel>
        <p>Slide 1</p>
        <p>Slide 2</p>
        <p>Slide 3</p>
      </Carousel>
    );

    expect(wrapper).toMatchSnapshot();
  });

  it("render arrows", () => {
    const wrapper = mount(
      <Carousel arrows>
        <p>Slide 1</p>
        <p>Slide 2</p>
        <p>Slide 3</p>
      </Carousel>
    );

    expect(wrapper).toMatchSnapshot();
  });

  it("render bullets", () => {
    const wrapper = mount(
      <Carousel bullets>
        <p>Slide 1</p>
        <p>Slide 2</p>
        <p>Slide 3</p>
      </Carousel>
    );

    expect(wrapper).toMatchSnapshot();
  });

  it("should change slide on right arrow click", () => {
    const wrapper = mount(
      <Carousel arrows>
        <p>Slide 1</p>
        <p>Slide 2</p>
        <p>Slide 3</p>
      </Carousel>
    );
    const arrowNext = wrapper.find(".carousel__arrow_right");

    expect(wrapper.state().currentSlide).toEqual(0);
    arrowNext.simulate("click");
    expect(wrapper.state().currentSlide).toEqual(1);
    arrowNext.simulate("click");
    expect(wrapper.state().currentSlide).toEqual(2);
    arrowNext.simulate("click");
    expect(wrapper.state().currentSlide).toEqual(0);
  });

  it("should change slide on right arrow click", () => {
    const wrapper = mount(
      <Carousel arrows>
        <p>Slide 1</p>
        <p>Slide 2</p>
        <p>Slide 3</p>
      </Carousel>
    );
    const arrowPrev = wrapper.find(".carousel__arrow_left");

    expect(wrapper.state().currentSlide).toEqual(0);
    arrowPrev.simulate("click");
    expect(wrapper.state().currentSlide).toEqual(2);
    arrowPrev.simulate("click");
    expect(wrapper.state().currentSlide).toEqual(1);
    arrowPrev.simulate("click");
    expect(wrapper.state().currentSlide).toEqual(0);
  });

  it("should change slide on bullets click", () => {
    const wrapper = mount(
      <Carousel bullets>
        <p>Slide 1</p>
        <p>Slide 2</p>
        <p>Slide 3</p>
      </Carousel>
    );
    const bullets = wrapper.find(".carousel__bullet");

    expect(wrapper.state().currentSlide).toEqual(0);
    bullets.at(2).simulate("click");
    expect(wrapper.state().currentSlide).toEqual(2);
    bullets.at(1).simulate("click");
    expect(wrapper.state().currentSlide).toEqual(1);
    bullets.at(0).simulate("click");
    expect(wrapper.state().currentSlide).toEqual(0);
  });
});
