import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";

import "./container.css";

function Container(props) {
  const { children, fluid, className, ...otherProps } = props;

  return (
    <div
      className={classNames("container", className, {
        container_fluid: fluid
      })}
      {...otherProps}
    >
      {children}
    </div>
  );
}

Container.defaultProps = {
  fluid: false
};

Container.propTypes = {
  children: PropTypes.node,
  fluid: PropTypes.bool,
  className: PropTypes.string
};

export default Container;
