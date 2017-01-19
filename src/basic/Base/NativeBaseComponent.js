/* @flow */

import React, { Component } from 'react';
import lightTheme from '../../backward/Themes/light';

export default class NativeBaseComponent extends Component {
  static contextTypes = {
    theme: React.PropTypes.object,
    foregroundColor: React.PropTypes.string,
  }

  static propTypes = {
    theme: React.PropTypes.object,
    foregroundColor: React.PropTypes.string,
  }

  static childContextTypes = {
    theme: React.PropTypes.object,
    foregroundColor: React.PropTypes.string,
  }

  getChildContext() {
    return {
      theme: this.props.theme ? this.props.theme : this.getTheme(),
      foregroundColor: this.props.foregroundColor ?
      this.props.foregroundColor : this.getTheme().textColor,
    };
  }

  getContextForegroundColor() {
    return this.context.foregroundColor;
  }

  getTheme() {
    return this.props.theme ? this.props.theme :
    this.context.theme || lightTheme;
  }
}
