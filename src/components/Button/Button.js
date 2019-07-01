import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";

import { mapTheme } from "lib/utils";

import "./button.css";

const Button = ({
  theme,
  size,
  className,
  type,
  children,
  color,
  baseClassName,
  block,
  icon,
  to,
  ...props
}) => {
  const isLink = to && to.length > 0;
  const ButtonComponent = isLink ? "a" : "button";

  const classes = classNames(
    baseClassName,
    {
      [`${baseClassName}_color_${color}`]: color,
      [`${baseClassName}_size_${size}`]: size,
      [`${baseClassName}_block`]: block,
      [`${baseClassName}_icon`]: icon,
      [`${baseClassName}_disabled`]: props.disabled
    },
    mapTheme(baseClassName, theme),
    className
  );

  return (
    <ButtonComponent
      {...props}
      href={to}
      type={isLink ? undefined : type}
      className={classes}
    >
      {children}
    </ButtonComponent>
  );
};

Button.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  baseClassName: PropTypes.string,
  theme: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.arrayOf(PropTypes.string)
  ]),
  color: PropTypes.string,
  disabled: PropTypes.bool,
  size: PropTypes.string,
  block: PropTypes.bool,
  type: PropTypes.oneOf(["submit", "button", "reset"]),
  to: PropTypes.string
};

Button.defaultProps = {
  theme: "default",
  type: "button",
  size: "medium",
  baseClassName: "button",
  disabled: false,
  block: false,
  to: undefined
};

export default Button;
