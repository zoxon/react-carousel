import React from "react";

import Octocat from "./icons/Octocat";

import "./icon.css"

function Icon(props) {
  switch (props.name) {
    case "octocat":
      return <Octocat {...props} />;
    default:
      return;
  }
}

export default Icon;
