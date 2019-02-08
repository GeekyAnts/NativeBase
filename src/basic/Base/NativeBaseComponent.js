import React, { Component } from "react";
import PropTypes from "prop-types";

export default class NativeBaseComponent extends Component {
  static contextTypes = {
    theme: PropTypes.object,
    foregroundColor: PropTypes.string,
  };

  static propTypes = {
    theme: PropTypes.object,
    foregroundColor: PropTypes.string,
  };

  static childContextTypes = {
    theme: PropTypes.object,
    foregroundColor: PropTypes.string,
  };

  getChildContext() {
    return {
      theme: this.props.theme ? this.props.theme : this.context.theme,
    };
  }

  getContextForegroundColor() {
    return this.context.foregroundColor;
  }
}
