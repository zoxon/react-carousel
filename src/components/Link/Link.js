import React from "react";
import PropTypes from "prop-types";

import history from "lib/history";

const Link = props => {
  const onClick = e => {
    const aNewTab = e.metaKey || e.ctrlKey;
    const anExternalLink = props.to.startsWith("http");

    if (!aNewTab && !anExternalLink) {
      // is a relative URL, treat it as a route
      e.preventDefault();
      history.push(props.to); // a history onChange event captures this change in App.jsx
    }
  };

  return (
    <a
      className={props.className}
      href={props.to}
      onClick={onClick}
      target={props.target}
    >
      {props.children}
    </a>
  );
};

Link.propTypes = {
  to: PropTypes.string.isRequired,
  theme: PropTypes.string,
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  target: PropTypes.string
};

Link.defaultProps = {
  theme: "default",
  className: ""
};

export default Link;
