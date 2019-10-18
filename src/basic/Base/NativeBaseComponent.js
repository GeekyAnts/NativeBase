import { Component } from 'react';
import PropTypes from 'prop-types';

export default class NativeBaseComponent extends Component {
  static contextTypes = {
    theme: PropTypes.object,
    foregroundColor: PropTypes.string
  };

  static propTypes = {
    // eslint-disable-next-line react/forbid-prop-types
    theme: PropTypes.object
  };

  static childContextTypes = {
    theme: PropTypes.object,
    foregroundColor: PropTypes.string
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
