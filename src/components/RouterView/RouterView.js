import React from "react";
import PropTypes from "prop-types";

import history from "lib/history";

const DEFAULT_PATHNAME = "*";

const addLeadingSlash = path => {
  return path.charAt(0) === "/" ? path : "/" + path;
};

class RouterView extends React.Component {
  state = {
    pathname: "/"
  };

  componentDidMount() {
    this.setState({
      pathname: this.props.pathname
    });

    history.onChange(this.handleNav);
  }

  handleNav = pathname => {
    this.setState({ pathname });
  };

  render() {
    const path = addLeadingSlash(
      this.props.basename + this.state.pathname
    ).replace("//", "/");

    const Component =
      this.props.routes[path] ||
      this.props.routes[DEFAULT_PATHNAME] ||
      (() => <span>Page not found</span>);

    return <Component context={this.state}>{this.props.children}</Component>;
  }
}

RouterView.defaultProps = {
  pathname: "/",
  basename: ""
};

RouterView.propTypes = {
  routes: PropTypes.object.isRequired,
  pathname: PropTypes.string.isRequired,
  children: PropTypes.node,
  basename: PropTypes.string
};

export default RouterView;
