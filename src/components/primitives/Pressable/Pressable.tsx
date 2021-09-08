import React, { forwardRef, memo } from 'react';
import { Pressable as RNPressable, useWindowDimensions } from 'react-native';
import { composeEventHandlers } from '../../../utils';
import type { IPressableProps } from './types';
import { makeStyledComponent } from '../../../utils/styled';
import { isResponsiveAnyProp } from '../../../theme/tools';
import { usePropsResolution } from '../../../hooks/useThemeProps';
import { useFocusRing } from '@react-native-aria/focus';
import isNil from 'lodash.isnil';

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

const Pressable = ({ children, ...props }: IPressableProps, ref: any) => {
  const { hoverProps, isHovered } = useHover();
  const { pressableProps, isPressed } = useIsPressed();
  const { focusProps, isFocused } = useFocus();
  const { isFocusVisible, focusProps: focusRingProps }: any = useFocusRing();

  const {
    onPressIn,
    onPressOut,
    onHoverIn,
    onHoverOut,
    onFocus,
    onBlur,
    ...resolvedProps
  } = usePropsResolution('Pressable', props, {
    isPressed,
    isFocused,
    isHovered,
    isFocusVisible,
  });

  // TODO: Replace Render props with Context Hook

  //TODO: refactor for responsive prop
  const windowDimensions = useWindowDimensions();
  if (isNil(windowDimensions.width) || isNil(windowDimensions.height)) {
    const responsivePropsExists = isResponsiveAnyProp(props);
    if (responsivePropsExists) {
      return null;
    }
  }

  // TODO : Replace Render props with Context Hook
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
      {...resolvedProps}
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
