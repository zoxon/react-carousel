import React from "react";
import { mount } from "enzyme";

import RouterView from "../RouterView";

const HomePage = props => <h1>Home page</h1>;
const NotFoundPage = props => <h1>Not found page</h1>;

describe("RouterView", () => {
  it("renders without crashing", () => {
    const routes = {
      "/": HomePage
    };

    const wrapper = mount(<RouterView routes={routes} />);

    expect(wrapper).toMatchSnapshot();
  });

  describe("renders 404 page", () => {
    it("with `*` route", () => {
      const routes = {
        "*": NotFoundPage
      };

      const wrapper = mount(
        <RouterView routes={routes} pathname="/not-found" />
      );

      expect(wrapper).toMatchSnapshot();
    });

    it("without `*` route", () => {
      const routes = {
        "/": HomePage
      };

      const wrapper = mount(
        <RouterView routes={routes} pathname="/not-found" />
      );

      expect(wrapper).toMatchSnapshot();
    });
  });

  it("should handleNav change pathname", () => {
    const routes = {
      "/": HomePage
    };

    const wrapper = mount(<RouterView routes={routes} pathname="/blog" />);

    expect(wrapper.state().pathname).toEqual("/blog");
    wrapper.instance().handleNav("/test");
    expect(wrapper.state().pathname).toEqual("/test");
  });
});
