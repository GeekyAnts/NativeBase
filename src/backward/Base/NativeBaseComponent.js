/* @flow */

import React, { Component } from 'react';
import lightTheme from '../Themes/light';

export default class NativeBaseComponent extends Component {
  static contextTypes = {
    NBtheme: React.PropTypes.object,
    foregroundColor: React.PropTypes.string,
  }

  static propTypes = {
    NBtheme: React.PropTypes.object,
    foregroundColor: React.PropTypes.string,
  }

  static childContextTypes = {
    NBtheme: React.PropTypes.object,
    foregroundColor: React.PropTypes.string,
  }

  getChildContext() {
    return {
      NBtheme: this.props.NBtheme ? this.props.NBtheme : this.getTheme(),
      foregroundColor: this.props.foregroundColor ?
      this.props.foregroundColor : this.getTheme().textColor,
    };
  }

  getContextForegroundColor() {
    return this.context.foregroundColor;
  }

  getTheme() {
    return this.props.NBtheme ? this.props.NBtheme :
    this.context.NBtheme || lightTheme;
  }
}
