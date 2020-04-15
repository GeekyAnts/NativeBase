import React, { Component, createRef } from 'react';
import {
  TouchableOpacity,
  Platform,
  View,
  TouchableNativeFeedback,
  StyleSheet,
  TextStyle,
  StyleProp,
} from 'react-native';
import { connectStyle } from 'native-base-shoutem-theme';

import variable from '../theme/variables/platform';
import { PLATFORM } from '../theme/variables/commonColor';
import computeProps from '../utils/computeProps';
import mapPropsToStyleNames from '../utils/mapPropsToStyleNames';
import { Text } from './Text';
type ButtonProps = {
  style?: StyleProp<TextStyle> | StyleProp<TextStyle>[];
  block?: boolean;
  primary?: boolean;
  transparent?: boolean;
  success?: boolean;
  danger?: boolean;
  warning?: boolean;
  info?: boolean;
  bordered?: boolean;
  disabled?: boolean;
  rounded?: boolean;
  large?: boolean;
  small?: boolean;
  active?: boolean;
  activeOpacity?: number;
};

class Button extends Component<ButtonProps, {}> {
  _root = createRef<TouchableOpacity & TouchableNativeFeedback>();
  getInitialStyle() {
    return {
      borderedBtn: {
        borderWidth: this.props.bordered ? variable.buttonDefaultBorderWidth : undefined,
        borderRadius:
          this.props.rounded && this.props.bordered ? variable.borderRadiusLarge : variable.buttonDefaultBorderRadius,
      },
    };
  }
  prepareRootProps() {
    const defaultProps = {
      style: this.getInitialStyle().borderedBtn,
    };

    const flattenedStyle = StyleSheet.flatten([defaultProps.style, this.props.style]);

    if (Array.isArray(this.props.style)) {
      return computeProps({ ...this.props, style: flattenedStyle }, defaultProps);
    }

    return computeProps(this.props, defaultProps);
  }
  render() {
    const variables = this.context.theme ? this.context.theme['@@shoutem.theme/themeStyle'].variables : variable;
    const children =
      Platform.OS === PLATFORM.IOS
        ? this.props.children
        : React.Children.map(this.props.children, child =>
            child && child.type === Text
              ? React.cloneElement(child, {
                  uppercase: variables.buttonUppercaseAndroidText,
                  ...child.props,
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
          ref={this._root}
          activeOpacity={this.props.activeOpacity || variable.buttonDefaultActiveOpacity}
        >
          {children}
        </TouchableOpacity>
      );
    }
    if (this.props.rounded) {
      const buttonStyle = { ...this.prepareRootProps().style };
      const buttonFlex = this.props.full || this.props.block ? variable.buttonDefaultFlex : buttonStyle.flex;

      return (
        <View
          style={[{ maxHeight: buttonStyle.height }, buttonStyle, { paddingTop: undefined, paddingBottom: undefined }]}
        >
          <TouchableNativeFeedback
            ref={this._root}
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
                  flexGrow: buttonFlex,
                },
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
        ref={this._root}
        onPress={this.props.onPress}
        background={
          this.props.transparent
            ? TouchableNativeFeedback.Ripple('transparent')
            : TouchableNativeFeedback.Ripple(variables.androidRippleColor, false)
        }
        {...this.prepareRootProps()}
      >
        <View {...this.prepareRootProps()}>{children}</View>
      </TouchableNativeFeedback>
    );
  }
}
const styles = StyleSheet.create({
  childContainer: {
    flexShrink: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
const StyledButton = connectStyle('NativeBase.Button', {}, mapPropsToStyleNames)(Button);

export { StyledButton as Button };
