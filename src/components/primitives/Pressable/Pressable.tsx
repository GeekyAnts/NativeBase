import React, { forwardRef, memo } from 'react';
import { Pressable as RNPressable } from 'react-native';
import { composeEventHandlers } from '../../../utils';
import type { IPressableProps } from './types';
import { useHasResponsiveProps } from '../../../hooks/useHasResponsiveProps';
import { makeStyledComponent } from '../../../utils/styled';
import { usePropsResolution } from '../../../hooks/useThemeProps';
import { useFocusRing } from '@react-native-aria/focus';

export const useHover = () => {
  const [isHovered, setHovered] = React.useState(false);
  return {
    hoverProps: {
      onHoverIn: () => setHovered(true),
      onHoverOut: () => setHovered(false),
    },
    isHovered,
  };
};

export const useFocus = () => {
  const [isFocused, setFocused] = React.useState(false);
  return {
    focusProps: {
      onFocus: () => setFocused(true),
      onBlur: () => setFocused(false),
    },
    isFocused,
  };
};

export const useIsPressed = () => {
  const [isPressed, setIsPressed] = React.useState(false);
  return {
    pressableProps: {
      onPressIn: () => setIsPressed(true),
      onPressOut: () => setIsPressed(false),
    },
    isPressed,
  };
};

const StyledPressable = makeStyledComponent(RNPressable);

const Pressable = (
  {
    children,
    isDisabled,
    disabled,
    isHovered: isHoveredProp,
    isPressed: isPressedProp,
    isFocused: isFocusedProp,
    isFocusVisible: isFocusVisibleProp,
    ...props
  }: IPressableProps,
  ref: any
) => {
  const { hoverProps, isHovered } = useHover();
  const { pressableProps, isPressed } = useIsPressed();
  const { focusProps, isFocused } = useFocus();
  const { isFocusVisible, focusProps: focusRingProps }: any = useFocusRing();

  const stateProps = {
    isPressed: isPressedProp || isPressed,
    isFocused: isFocusedProp || isFocused,
    isHovered: isHoveredProp || isHovered,
  };

  const {
    onPressIn,
    onPressOut,
    onHoverIn,
    onHoverOut,
    onFocus,
    onBlur,
    ...resolvedProps
  } = usePropsResolution('Pressable', props, {
    ...stateProps,
    isFocusVisible: isFocusVisibleProp || isFocusVisible,
    isDisabled: disabled || isDisabled,
  });

  // TODO: Replace Render props with Context Hook

  //TODO: refactor for responsive prop
  if (useHasResponsiveProps(props)) {
    return null;
  }

  // TODO: Replace Render props with Context Hook
  return (
    <StyledPressable
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
      disabled={disabled || isDisabled}
      {...resolvedProps}
    >
      {typeof children !== 'function' ? children : children({ ...stateProps })}
    </StyledPressable>
  );
};

export default memo(forwardRef(Pressable));
