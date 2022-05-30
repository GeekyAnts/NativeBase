import React, { memo, forwardRef, useEffect } from 'react';
import { Platform, StyleSheet } from 'react-native';
import Spinner from '../Spinner';
import { usePropsResolution } from '../../../hooks/useThemeProps';
import { useTimer } from '../../../hooks/useTimer';
import { default as Box, IBoxProps } from '../Box';
import HStack from '../Stack/HStack';
import { Pressable } from '../Pressable';
import type { IButtonProps } from './types';
import { composeEventHandlers } from '../../../utils';
import {
  useHover,
  useFocus,
  useIsPressed,
} from '../../primitives/Pressable/Pressable';
import { useFocusRing } from '@react-native-aria/focus';
import { useHasResponsiveProps } from '../../../hooks/useHasResponsiveProps';
import get from 'lodash.get';
import { updateComponentThemeMap } from '../../../utils/styled';
import {
  getResolvedStyleSheet,
  getThemeProps,
  log as resolveComponentThemeLog,
} from '../../../core';
import { useColorMode } from '../../../core/color-mode';

console.time('resolverButton');
updateComponentThemeMap('Button');
console.timeEnd('resolverButton');

// resolveComponentThemeLog();
// console.log(
//   'styledObj',
//   styleObj
//   // StyleSheet.flatten(styleObj.style),
//   // StyleSheet.flatten(styleObjSpinner.style)
// );
const Button = (
  {
    //@ts-ignore
    children,
    startIcon,
    rightIcon,
    leftIcon,
    endIcon,
    spinner,
    isDisabled,
    isLoading,
    isHovered: isHoveredProp,
    isPressed: isPressedProp,
    isFocused: isFocusedProp,
    isFocusVisible: isFocusVisibleProp,
    spinnerPlacement = 'start',
    ...props
  }: IButtonProps & IBoxProps,
  ref: any
) => {
  // const Timer = useTimer();
  // console.log(Timer.startLog("Button"));

  // if (Platform.OS === "ios") {
  //   // console.log('IOS');
  // }
  // if (Platform.OS === "android") {
  //   // console.log('ANDROID');
  // }
  // Timer.startLog("Button");
  // start = Date.now();

  // MessageQueue.spy((data) => {
  //   let start = 0;
  //   let end = 0;
  //   if (data.module === "UIManager" && data.method === "updateView") {
  //     if (data.args[2].backgroundColor === -15376779) {
  //       start = Date.now();
  //       console.log("Pressed", start);
  //     }

  //     if (data.args[2].backgroundColor === -16215630) {
  //       end = Date.now();
  //       console.log("UnPressed", end);
  //       // console.log("UnPressed",end - start);
  //     }
  //   }
  // });
  // console.log("Start", start);
  const { hoverProps, isHovered } = useHover();
  const { pressableProps, isPressed } = useIsPressed();
  const { focusProps, isFocused } = useFocus();
  const { isFocusVisible, focusProps: focusRingProps }: any = useFocusRing();
  const { colorMode } = useColorMode();
  const state = {
    isDisabled,
    isHovered: isHoveredProp || isHovered,
    isFocused: isFocusedProp || isFocused,
    isPressed: isPressedProp || isPressed,
    isLoading,
    isFocusVisible: isFocusVisibleProp || isFocusVisible,
  };

  const { style, unResolvedProps } = getThemeProps(
    'Button',
    colorMode,
    state,
    props.variant,
    props.size
  );

  const {
    onPressIn,
    onPressOut,
    onHoverIn,
    onHoverOut,
    onFocus,
    onBlur,
    _text,
    _stack,
    _spinner,
    isLoadingText,
    _icon,
    ...resolvedProps
  } = usePropsResolution('Button', { ...unResolvedProps, ...props }, state);

  // // console.log(_stack, "styled");
  // let stackStyle = {};

  // if (_stack) {
  //   // const { ...style, } = _stack;
  //   //TODO: refactor
  //   stackStyle = _stack.style;
  // }

  // useEffect(() => {
  //   end = Date.now();
  //   // console.log("End", end);
  //   console.log("Nativebase Button Diff", end - start);
  // });
  //TODO: refactor for responsive prop
  if (useHasResponsiveProps(props)) {
    return null;
  }

  if (leftIcon) {
    startIcon = leftIcon;
  }
  if (rightIcon) {
    endIcon = rightIcon;
  }
  if (endIcon && React.isValidElement(endIcon)) {
    endIcon = React.Children.map(
      endIcon,
      (child: JSX.Element, index: number) => {
        return React.cloneElement(child, {
          key: `button-end-icon-${index}`,
          ..._icon,
          ...child.props,
        });
      }
    );
  }
  if (startIcon && React.isValidElement(startIcon)) {
    startIcon = React.Children.map(
      startIcon,
      (child: JSX.Element, index: number) => {
        return React.cloneElement(child, {
          key: `button-start-icon-${index}`,
          ..._icon,
          ...child.props,
        });
      }
    );
  }

  const spinnerElement = spinner ? (
    spinner
  ) : (
    <Spinner color={_text?.color} {..._spinner} />
  );

  const boxChildren = (child: any) => {
    // console.log(
    //   getResolvedStyleSheet(
    //     [`Button`, props.variant, props.size, `Text`],
    //     colorMode,
    //     {}
    //     // props.variant,
    //     // props.size
    //   ),
    //   'internal style &&&&&'
    // );
    return child ? (
      <Box
        _text={{
          ..._text,
          INTERNAL_themeStyle: getResolvedStyleSheet(
            [`Button`, props.variant, props.size, `Text`],
            colorMode,
            {}
            // props.variant,
            // props.size
          ),
        }}
        // INTERNAL_themeStyle={getResolvedStyleSheet(
        //   [`Button`, props.variant, props.size, `Text`],
        //   colorMode,
        //   {}
        //   // props.variant,
        //   // props.size
        // )}
      >
        {child}
      </Box>
    ) : null;
  };
  // Process End Log ----------------------------------------------------------------------------------------------------
  // console.log(
  //   "Process End Log --------------------------------------------------------------"
  // );

  // Timer.endLog("Button");

  // console.log(
  //   StyleSheet.flatten(internalComponentStyles._stack.style),
  //   buttonStyleObj.internalPseudoProps,
  //   "styled"
  // );
  return (
    <Pressable
      INTERNAL_themeStyle={style}
      // style={buttonStyleObj.style}
      disabled={isDisabled || isLoading}
      ref={ref}
      onPressIn={composeEventHandlers(onPressIn, pressableProps.onPressIn)}
      onPressOut={composeEventHandlers(onPressOut, pressableProps.onPressOut)}
      // @ts-ignore - web only
      onHoverIn={composeEventHandlers(onHoverIn, hoverProps.onHoverIn)}
      // @ts-ignore - web only
      onHoverOut={composeEventHandlers(onHoverOut, hoverProps.onHoverOut)}
      // @ts-ignore - web only
      onFocus={composeEventHandlers(
        composeEventHandlers(onFocus, focusProps.onFocus),
        focusRingProps.onFocus
      )}
      // @ts-ignore - web only
      onBlur={composeEventHandlers(
        composeEventHandlers(onBlur, focusProps.onBlur),
        focusRingProps.onBlur
      )}
      {...resolvedProps}
      accessibilityRole={props.accessibilityRole ?? 'button'}
    >
      <HStack
        {..._stack}
        test={true}
        INTERNAL_themeStyle={getResolvedStyleSheet('Button.Stack', colorMode)}
      >
        {startIcon && !isLoading ? startIcon : null}
        {isLoading && spinnerPlacement === 'start' ? spinnerElement : null}
        {isLoading
          ? isLoadingText
            ? boxChildren(isLoadingText)
            : null
          : boxChildren(children)}

        {endIcon && !isLoading ? endIcon : null}
        {isLoading && spinnerPlacement === 'end' ? spinnerElement : null}
      </HStack>
    </Pressable>
  );
};

export default memo(forwardRef(Button));
