/* eslint-disable new-cap */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
  TouchableOpacity,
  Platform,
  View,
  TouchableNativeFeedback,
  StyleSheet
} from 'react-native';
import { connectStyle } from 'native-base-shoutem-theme';

import variable from '../theme/variables/platform';
import { PLATFORM } from '../theme/variables/commonColor';
import computeProps from '../utils/computeProps';
import mapPropsToStyleNames from '../utils/mapPropsToStyleNames';

import { Text } from './Text';

class Button extends Component {
  static contextTypes = {
    theme: PropTypes.object
  };

  getInitialStyle() {
    return {
      borderedBtn: {
        borderWidth: this.props.bordered
          ? variable.buttonDefaultBorderWidth
          : undefined,
        borderRadius:
          this.props.rounded && this.props.bordered
            ? variable.borderRadiusLarge
            : variable.buttonDefaultBorderRadius
      }
    };
  }

  prepareRootProps() {
    const defaultProps = {
      style: this.getInitialStyle().borderedBtn
    };

    if (Array.isArray(this.props.style)) {
      const flattenedStyle = this.props.style.reduce(
        (accumulator, currentValue) => accumulator.concat(currentValue),
        []
      );
      return computeProps(
        { ...this.props, style: flattenedStyle },
        defaultProps
      );
    }

    return computeProps(this.props, defaultProps);
  }
  render() {
    const variables = this.context.theme
      ? this.context.theme['@@shoutem.theme/themeStyle'].variables
      : variable;
    const children =
      Platform.OS === PLATFORM.IOS
        ? this.props.children
        : React.Children.map(this.props.children, child =>
            child && child.type === Text
              ? React.cloneElement(child, {
                uppercase: this.props.buttonUppercaseAndroidText === false
                ? false : variables.buttonUppercaseAndroidText,
                ...child.props
              })
              : child
          );
    if (
      Platform.OS === PLATFORM.IOS ||
      Platform.OS === PLATFORM.WEB ||
      variables.androidRipple === false ||
      Platform.Version < 21
    ) {
      return (
        <TouchableOpacity
          {...this.prepareRootProps()}
          ref={c => (this._root = c)}
          activeOpacity={
            this.props.activeOpacity > 0
              ? this.props.activeOpacity
              : variable.buttonDefaultActiveOpacity
          }
        >
          {children}
        </TouchableOpacity>
      );
    }
    if (this.props.rounded) {
      const buttonStyle = { ...this.prepareRootProps().style };
      const buttonFlex =
        this.props.full || this.props.block
          ? variable.buttonDefaultFlex
          : buttonStyle.flex;
      return (
        <View
          style={[
            { maxHeight: buttonStyle.height },
            buttonStyle,
            { paddingTop: undefined, paddingBottom: undefined }
          ]}
        >
          <TouchableNativeFeedback
            ref={c => (this._root = c)}
            background={TouchableNativeFeedback.Ripple(
              this.props.androidRippleColor || variables.androidRippleColor,
              true
            )}
            {...this.prepareRootProps()}
          >
            <View
              style={[
                // eslint-disable-next-line no-use-before-define
                styles.childContainer,
                {
                  paddingTop: buttonStyle.paddingTop,
                  paddingBottom: buttonStyle.paddingBottom,
                  height: buttonStyle.height,
                  flexGrow: buttonFlex
                }
              ]}
            >
              {children}
            </View>
          </TouchableNativeFeedback>
        </View>
      );
    }
    return (
      <TouchableNativeFeedback
        ref={c => (this._root = c)}
        onPress={this.props.onPress}
        background={
          this.props.transparent
            ? TouchableNativeFeedback.Ripple('transparent')
            : TouchableNativeFeedback.Ripple(
                variables.androidRippleColor,
                false
              )
        }
        {...this.prepareRootProps()}
      >
        <View {...this.prepareRootProps()}>{children}</View>
      </TouchableNativeFeedback>
    );
  }
}

Button.propTypes = {
  ...TouchableOpacity.propTypes,
  style: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.number,
    PropTypes.array
  ]),
  block: PropTypes.bool,
  primary: PropTypes.bool,
  transparent: PropTypes.bool,
  success: PropTypes.bool,
  danger: PropTypes.bool,
  warning: PropTypes.bool,
  info: PropTypes.bool,
  bordered: PropTypes.bool,
  disabled: PropTypes.bool,
  rounded: PropTypes.bool,
  large: PropTypes.bool,
  small: PropTypes.bool,
  active: PropTypes.bool
};

const styles = StyleSheet.create({
  childContainer: {
    flexShrink: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  }
});

const StyledButton = connectStyle(
  'NativeBase.Button',
  {},
  mapPropsToStyleNames
)(Button);
export { StyledButton as Button };
