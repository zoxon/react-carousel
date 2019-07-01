import React from "react";
import PropTypes from "prop-types";

import history from "lib/history";

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
    const Component =
      this.props.routes[this.state.pathname] ||
      this.props.routes[DEFAULT_PATHNAME] ||
      (() => <span>Page not found</span>);

    return <Component context={this.state}>{this.props.children}</Component>;
  }
}

RouterView.defaultProps = {
  pathname: "/"
};

RouterView.propTypes = {
  routes: PropTypes.object.isRequired,
  pathname: PropTypes.string.isRequired,
  children: PropTypes.node
};

export default RouterView;
