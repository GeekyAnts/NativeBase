/* @flow */


import React, { Component } from 'react';
import _ from 'lodash';
import { TouchableOpacity, Platform, View } from 'react-native';
import { connectStyle } from '@shoutem/theme';
import variables from './../theme/variables/platform';
import { Badge } from './Badge';
import { Text } from './Text';
import computeProps from '../Utils/computeProps';

import mapPropsToStyleNames from '../Utils/mapPropsToStyleNames';

class Button extends Component {

  getInitialStyle() {
    return {
      borderedBtn: {
        borderWidth: (this.props.bordered) ? 1 : undefined,
        borderRadius: (this.props.rounded && this.props.bordered) ? variables.borderRadiusLarge : 2,
      },
    };
  }

  prepareRootProps() {
    const defaultProps = {
      style: this.getInitialStyle().borderedBtn,
    };

    return computeProps(this.props, defaultProps);
  }
  render() {
    return (
      <TouchableOpacity
        {...this.prepareRootProps()}
        ref={c => this._root = c}
        activeOpacity={(this.props.activeOpacity) ? this.props.activeOpacity : 0.5}
      >
        {this.props.children}
      </TouchableOpacity>
    );
  }
}

Button.propTypes = {
  ...TouchableOpacity.propTypes,
  style: React.PropTypes.object,
  block: React.PropTypes.bool,
  primary: React.PropTypes.bool,
  transparent: React.PropTypes.bool,
  success: React.PropTypes.bool,
  danger: React.PropTypes.bool,
  warning: React.PropTypes.bool,
  info: React.PropTypes.bool,
  bordered: React.PropTypes.bool,
  capitalize: React.PropTypes.bool,
  disabled: React.PropTypes.bool,
  rounded: React.PropTypes.bool,
  large: React.PropTypes.bool,
  small: React.PropTypes.bool,
  active: React.PropTypes.bool,
  badgeColor: React.PropTypes.string,
  badgeValueStyle: React.PropTypes.object,
};

Button.defaultProps = {
  capitalize: true
}

const StyledButton = connectStyle('NativeBase.Button', {}, mapPropsToStyleNames)(Button);
export {
  StyledButton as Button,
};
