import React, { Component } from "react";
import PropTypes from "prop-types";
import {
  TouchableOpacity,
  Platform,
  View,
  TouchableNativeFeedback,
  StyleSheet
} from "react-native";
import { connectStyle } from "native-base-shoutem-theme";
import variable from "./../theme/variables/platform";
import { Text } from "./Text";
import computeProps from "../Utils/computeProps";

import mapPropsToStyleNames from "../Utils/mapPropsToStyleNames";

class Button extends Component {
  static contextTypes = {
    theme: PropTypes.object
  };

  getInitialStyle() {
    return {
      borderedBtn: {
        borderWidth: this.props.bordered ? 1 : undefined,
        borderRadius:
          this.props.rounded && this.props.bordered
            ? variable.borderRadiusLarge
            : 2
      }
    };
  }

  _root: React$Element<TouchableOpacity | TouchableNativeFeedback>;

  prepareRootProps() {
    const defaultProps = {
      style: this.getInitialStyle().borderedBtn
    };

    return computeProps(this.props, defaultProps);
  }
  render() {
    const variables = this.context.theme
      ? this.context.theme["@@shoutem.theme/themeStyle"].variables
      : variable;
    const children =
      Platform.OS === "ios"
        ? this.props.children
        : React.Children.map(
            this.props.children,
            child =>
              child && child.type === Text
                ? React.cloneElement(child, {
                    uppercase: variables.btnUppercaseAndroidText,
                    ...child.props
                  })
                : child
          );
    if (
      Platform.OS === "ios" ||
      Platform.OS === "web" ||
      variables.androidRipple === false ||
      Platform["Version"] < 21
    ) {
      return (
        <TouchableOpacity
          {...this.prepareRootProps()}
          ref={c => (this._root = c)}
          activeOpacity={
            this.props.activeOpacity > 0 ? this.props.activeOpacity : 0.5
          }
        >
          {children}
        </TouchableOpacity>
      );
    } else {
        if(this.props.rounded){
            let buttonStyle = { ...this.prepareRootProps().style };
            let buttonFlex = (this.props.full || this.props.block) ? 1 : buttonStyle.flex;
            return (
              <View style={[{ maxHeight:buttonStyle.height }, buttonStyle, { paddingTop: undefined, paddingBottom: undefined, flex:buttonFlex }]} >
                <TouchableNativeFeedback
                  ref={c => (this._root = c)}
                  background={
                    this.props.androidRippleColor
                      ? TouchableNativeFeedback.Ripple(this.props.androidRippleColor, true)
                      : TouchableNativeFeedback.Ripple(variables.androidRippleColor, true)
                  }
                  { ...this.prepareRootProps() }
                >
                  <View style={[styles.childContainer, { paddingTop: buttonStyle.paddingTop, paddingBottom: buttonStyle.paddingBottom, height: buttonStyle.height,flexGrow:buttonFlex }]}>
                    {children}
                  </View>
                </TouchableNativeFeedback>
              </View >
            );  
        } else {
            return (
              <TouchableNativeFeedback
                ref={c => (this._root = c)}
                onPress={this.props.onPress}
                {...this.prepareRootProps()}
              >
                <View {...this.prepareRootProps()}>{children}</View>
              </TouchableNativeFeedback>
            );
        }
    }
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
	},
});

const StyledButton = connectStyle(
  "NativeBase.Button",
  {},
  mapPropsToStyleNames
)(Button);
export { StyledButton as Button };
