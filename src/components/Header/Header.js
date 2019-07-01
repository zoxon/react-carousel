import React from "react";

import Icon from "components/Icon";
import Button from "components/Button";
import Container from "components/Container";

import "./header.css";

function Header(props) {
  return (
    <header className="header" {...props}>
      <Container className="header__container">
        <h1 className="header__title">React Carousel</h1>
        <div className="header__description">
          A lightweight, slider and carousel, for React.js
        </div>
        <div className="header__buttons">
          <Button to="#get-started" theme="solid rounded" color="indigo">
            Get started
          </Button>
          <Button to="#" theme="outlined rounded" color="black" icon={true}>
            <Icon name="octocat" />
            <span>Visit Github</span>
          </Button>
        </div>
      </Container>
    </header>
  );
}

export default Header;
