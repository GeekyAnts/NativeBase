/* eslint-disable new-cap */
import React from 'react';
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
import mapPropsToStyleNames from '../utils/mapPropsToStyleNames';

import { Text } from './Text';


class Button extends React.PureComponent {
  static contextTypes = {
    theme: PropTypes.object
  };

  setRoot(c){
    this._root = c;
  }

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

    const {style, ...others} = this.props;

    return {
      style: StyleSheet.flatten(StyleSheet.compose(this.getInitialStyle().borderedBtn, style)),
      ...others
    }

  }

  render() {
    const variables = this.context.theme
      ? this.context.theme['@@shoutem.theme/themeStyle'].variables
      : variable;

    const children =
      Platform.OS === PLATFORM.IOS || !variables.buttonUppercaseAndroidText
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

    const rootProps = this.prepareRootProps();

    if (
      Platform.OS === PLATFORM.IOS ||
      Platform.OS === PLATFORM.WEB ||
      variables.androidRipple === false ||
      Platform.Version < 21
    ) {
      return (
        <TouchableOpacity
          {...rootProps}
          ref={this.setRoot}
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
      const buttonStyle = { ...rootProps.style };
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
            ref={this.setRoot}
            background={TouchableNativeFeedback.Ripple(
              this.props.androidRippleColor || variables.androidRippleColor,
              true
            )}
            {...rootProps}
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
        ref={this.setRoot}
        onPress={this.props.onPress}
        background={
          this.props.transparent
            ? TouchableNativeFeedback.Ripple('transparent')
            : TouchableNativeFeedback.Ripple(
                variables.androidRippleColor,
                false
              )
        }
        {...rootProps}
      >
        <View {...rootProps}>{children}</View>
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