import React, { forwardRef, memo } from 'react';
import { Pressable as RNPressable } from 'react-native';
import styled from 'styled-components/native';
import { composeEventHandlers } from '../../../utils';
import { border, color, flexbox, layout, position, space } from 'styled-system';
import type { IPressableProps } from './types';
import {
  customBackground,
  customBorder,
  customExtra,
  customLayout,
  customOutline,
  customPosition,
  customShadow,
} from '../../../utils/customProps';
import { usePropsResolution } from '../../../hooks/useThemeProps';
import { useFocusRing } from '@react-native-aria/focus';

const useHover = () => {
  const [isHovered, setHovered] = React.useState(false);
  return {
    pressableProps: {
      onHoverIn: () => setHovered(true),
      onHoverOut: () => setHovered(false),
    },
    isHovered,
  };
};

const useFocus = () => {
  const [isFocused, setFocused] = React.useState(false);
  return {
    focusProps: {
      onFocus: () => setFocused(true),
      onBlur: () => setFocused(false),
    },
    isFocused,
  };
};

const useIsPressed = () => {
  const [isPressed, setIsPressed] = React.useState(false);
  return {
    pressableProps: {
      onPressIn: () => setIsPressed(true),
      onPressOut: () => setIsPressed(false),
    },
    isPressed,
  };
};

const StyledPressable = styled(RNPressable)<IPressableProps>(
  color,
  space,
  layout,
  flexbox,
  border,
  position,
  customPosition,
  customBorder,
  customBackground,
  customOutline,
  customShadow,
  customExtra,
  customLayout
);

const Pressable = (
  {
    children,
    onPressIn,
    onPressOut,
    onHoverIn,
    onHoverOut,
    onFocus,
    onBlur,
    ...props
  }: IPressableProps,
  ref: any
) => {
  const { pressableProps, isHovered } = useHover();
  const { pressableProps: isPressedProps, isPressed } = useIsPressed();
  const { focusProps, isFocused } = useFocus();
  const {
    _hover,
    _pressed,
    _focus,
    _focusVisible,
    _disabled,
    ...themeProps
  } = usePropsResolution('Pressable', props);
  const { isFocusVisible, focusProps: focusRingProps }: any = useFocusRing();
  // TODO : Replace Render props with Context Hook
  return (
    <StyledPressable
      ref={ref}
      onPressIn={composeEventHandlers(onPressIn, isPressedProps.onPressIn)}
      onPressOut={composeEventHandlers(onPressOut, isPressedProps.onPressOut)}
      // @ts-ignore - web only
      onHoverIn={composeEventHandlers(onHoverIn, pressableProps.onHoverIn)}
      // @ts-ignore - web only
      onHoverOut={composeEventHandlers(onHoverOut, pressableProps.onHoverOut)}
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
      {...themeProps}
      {...(isHovered && _hover)}
      {...(isFocused && _focus)}
      {...(isFocusVisible && _focusVisible)}
      {...(isPressed && _pressed)}
      {...(props.disabled && _disabled)}
    >
      {typeof children !== 'function'
        ? children
        : children({
            isPressed,
            isHovered,
            isFocused,
          })}
    </StyledPressable>
  );
};

export default memo(forwardRef(Pressable));
