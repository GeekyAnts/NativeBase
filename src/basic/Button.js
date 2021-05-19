/* eslint-disable new-cap */
import React,{useRef,useState,useEffect} from 'react';
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

const Button = props => {
 const root = useRef(null);
 const getInitialStyle = () => {
  return {
    borderedBtn: {
      borderWidth: props.bordered
        ? variable.buttonDefaultBorderWidth
        : undefined,
      borderRadius:
        props.rounded && props.bordered
          ? variable.borderRadiusLarge
          : variable.buttonDefaultBorderRadius,
    },
  };
 };

 const prepareRootProps = () => {
  const { style, ...others } = props;

  return {
    style: StyleSheet.flatten(
      StyleSheet.compose(getInitialStyle().borderedBtn, style)
    ),
    ...others,
  };
 };
  
 const variables = 
//  this.context.theme
//   ? this.context.theme['@@shoutem.theme/themeStyle'].variables
//   : 
  variable;

 const children =
  Platform.OS === PLATFORM.IOS || !variables.buttonUppercaseAndroidText
    ? props.children
    : React.Children.map(props.children, (child) =>
        child && child.type === Text
          ? React.cloneElement(child, {
              uppercase:
                props.buttonUppercaseAndroidText === false
                  ? false
                  : variables.buttonUppercaseAndroidText,
              ...child.props,
            })
          : child
      );

  
  const rootProps = prepareRootProps();

if (
  Platform.OS === PLATFORM.IOS ||
  Platform.OS === PLATFORM.WEB ||
  variables.androidRipple === false ||
  Platform.Version < 21
) {
  return (
    <TouchableOpacity
      {...rootProps}
      ref={root}
      activeOpacity={
        props.activeOpacity > 0
          ? props.activeOpacity
          : variable.buttonDefaultActiveOpacity
      }
    >
      {children}
    </TouchableOpacity>
  );
}
if (props.rounded) {
  const buttonStyle = { ...rootProps.style };
  const buttonFlex =
    props.full || props.block
      ? variable.buttonDefaultFlex
      : buttonStyle.flex;
  return (
    <View
      style={[
        { maxHeight: buttonStyle.height },
        buttonStyle,
        { paddingTop: undefined, paddingBottom: undefined },
      ]}
    >
      <TouchableNativeFeedback
        ref={root}
        background={TouchableNativeFeedback.Ripple(
          props.androidRippleColor || variables.androidRippleColor,
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
    ref={root}
    onPress={props.onPress}
    background={
      props.transparent
        ? TouchableNativeFeedback.Ripple('transparent')
        : TouchableNativeFeedback.Ripple(variables.androidRippleColor, false)
    }
    {...rootProps}
  >
    <View {...rootProps}>{children}</View>
  </TouchableNativeFeedback>
);

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