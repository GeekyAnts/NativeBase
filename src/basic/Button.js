/* @flow */


import React, { Component } from 'react';
import { Platform, StyleSheet, TouchableNativeFeedback, TouchableOpacity, View } from 'react-native';
import color from 'color';
import { connectStyle } from 'native-base-shoutem-theme';
import variables from './../theme/variables/platform';
import { Text } from './Text';
import computeProps from '../Utils/computeProps';

import mapPropsToStyleNames from '../Utils/mapPropsToStyleNames';

class Button extends Component {
  static contextTypes = {
    theme: React.PropTypes.object,
  };

  prepareRootProps() {
    const themeStyle = (this.context.theme) ? this.context.theme['@@shoutem.theme/themeStyle'] : { variables };

    const defaultProps = {
      style: StyleSheet.flatten(this.props.style),
      androidRippleColor: themeStyle.variables.androidRippleColorDark,
    };

    if (this.props.transparent) {
      if (defaultProps.style.backgroundColor) {
        defaultProps.androidRippleColor = color(defaultProps.style.backgroundColor).alpha(0.26).toString();
      }
      defaultProps.style.backgroundColor = 'transparent';
    }
    // Maintain a 3:1 contrast ratio, preferring dark backgrounds
    else if (color(defaultProps.style.backgroundColor || '#fff').lightness() < 100 / 3) {
      defaultProps.androidRippleColor = variables.androidRippleColor;
    }

    return computeProps(this.props, defaultProps);
  }
  render() {
    const themeStyle = (this.context.theme) ? this.context.theme['@@shoutem.theme/themeStyle'] : { variables };

    const children = (Platform.OS === 'ios')
        ? this.props.children
        : React.Children.map(this.props.children, child => child && child.type === Text ? React.cloneElement(child, { uppercase: true, ...child.props }) : child);
    const rootProps = this.prepareRootProps();
    const outerStyle = {};
    const innerStyle = { flex: 1 };
    for (const prop in rootProps.style) {
      if (prop.match(/^border.*Radius$/)) {
        outerStyle[prop] = innerStyle[prop] = rootProps.style[prop];
      }
      else if (prop.match(/^(padding.*|flexDirection|flexWrap|alignContent|alignItems|justifyContent)$/)) {
        innerStyle[prop] = rootProps.style[prop];
      }
      else {
        outerStyle[prop] = rootProps.style[prop];
      }
    };

    if (Platform.OS === 'ios' || themeStyle.variables.androidRipple === false || Platform['Version'] <= 21) {
      return (
        <TouchableOpacity
          ref={c => this._root = c}
          activeOpacity={0.5}
          {...rootProps}
          style={outerStyle}
        >
          <View
            style={innerStyle}
            pointerEvents="box-only"
          >
            {children}
          </View>
        </TouchableOpacity>
      );
    }
    else {
      return (
          <View style={outerStyle}>
            <TouchableNativeFeedback
              ref={c => this._root = c}
              background={TouchableNativeFeedback.Ripple(rootProps.androidRippleColor, rootProps.transparent)}
              {...rootProps}
            >
              <View
                pointerEvents="box-only"
                {...rootProps}
                style={innerStyle}
              >
                {children}
              </View>
            </TouchableNativeFeedback>
          </View>
      );
    }
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
  disabled: React.PropTypes.bool,
  rounded: React.PropTypes.bool,
  large: React.PropTypes.bool,
  small: React.PropTypes.bool,
  active: React.PropTypes.bool,
};

const StyledButton = connectStyle('NativeBase.Button', {}, mapPropsToStyleNames)(Button);
export {
  StyledButton as Button,
};
