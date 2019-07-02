# react-carousel

_A lightweight, slider and carousel, for React.js_

## Table of Contents

- [Installation](#Installation)
- [API documentation](#API-documentation)
- [Examples](#Examples)
- [Design files](#Design-files)
- [Docs and Demos](#Docs-and-Demos)
- [Available Scripts](#Available-Scripts)
  - [`npm start`](#npm-start)
  - [`npm test`](#npm-test)
  - [`npm run build`](#npm-run-build)
  - [`npm run eject`](#npm-run-eject)

## Installation

To install, you can use [npm](https://npmjs.org/) or [yarn](https://yarnpkg.com):

```sh
$ npm install @zoxon/react-carousel
$ yarn add @zoxon/react-carousel
```

## API documentation

| Prop     |  Type   |  Default |                       Description |
| -------- | :-----: | -------: | --------------------------------: |
| children |  Node   | Required |          Slides, is required prop |
| arrows   | Boolean |    false |          Toggle arrows visibility |
| bullets  | Boolean |    false |         Toggle bullets visibility |
| autoplay | Number  |        0 | Autoplay interval in milliseconds |

## Examples

Here is a simple example of `react-carousel`:

```jsx
import React from "react";
import ReactDOM from "react-dom";
import Carousel from "@zoxon/react-carousel";

function App(props) {
  return (
    <Carousel arrows bullets autoplay={3000}>
      <img src="/images/slide1.jpg" alt="Slide 1" />
      <img src="/images/slide2.jpg" alt="Slide 2" />
      <img src="/images/slide3.jpg" alt="Slide 3" />
    </Carousel>
  );
}

ReactDOM.render(<App />, appElement);
```

## Design files

[Slider and demo](https://www.figma.com/file/JuuaO1O9i9cNh6Dfk83y5xq0/Untitled?node-id=1%3A17)

## Docs and Demos

[Main demo](https://zoxon.github.io/react-carousel)

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br>
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.
