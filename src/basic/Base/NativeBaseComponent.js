/* @flow */

import React, { Component } from "react";

export default class NativeBaseComponent extends Component {
  static contextTypes = {
    theme: React.PropTypes.object,
    foregroundColor: React.PropTypes.string
  };

  static propTypes = {
    theme: React.PropTypes.object,
    foregroundColor: React.PropTypes.string
  };

  static childContextTypes = {
    theme: React.PropTypes.object,
    foregroundColor: React.PropTypes.string
  };

  getChildContext() {
    return {
      theme: this.props.theme ? this.props.theme : this.context.theme
    };
  }

  getContextForegroundColor() {
    return this.context.foregroundColor;
  }
}
