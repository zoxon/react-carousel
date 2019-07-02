import React from "react";
import PropTypes from "prop-types";

import history from "lib/history";
import { removeBasename } from "lib/utils";

const DEFAULT_PATHNAME = "*";

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
    const path = removeBasename(
      this.props.basename,
      this.state.pathname
    ).replace(/\\\//gi, "/");

    const Component =
      this.props.routes[path] ||
      this.props.routes[DEFAULT_PATHNAME] ||
      (() => <span>Page not found</span>);

    return <Component context={this.state}>{this.props.children}</Component>;
  }
}

RouterView.defaultProps = {
  pathname: "/",
  basename: "/"
};

RouterView.propTypes = {
  routes: PropTypes.object.isRequired,
  pathname: PropTypes.string.isRequired,
  children: PropTypes.node,
  basename: PropTypes.string
};

export default RouterView;
