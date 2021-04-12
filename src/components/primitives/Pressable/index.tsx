import { composeEventHandlers } from '../../../utils';
import React from 'react';
import { PressableProps, Pressable as RNPressable } from 'react-native';
import styled from 'styled-components/native';
import { border, color, flexbox, layout, position, space } from 'styled-system';
import {
  customBackground,
  customBorder,
  customExtra,
  customLayout,
  customOutline,
  customPosition,
  customShadow,
} from '../../../utils/customProps';
import type { IBoxProps } from '../Box';
import { useFocusRing } from '@react-native-aria/focus';

export type IPressableProps = PressableProps &
  IBoxProps & {
    onHoverIn?: any;
    onHoverOut?: any;
    onFocus?: any;
    onBlur?: any;
    _hover?: any;
    _pressed?: any;
    _focus?: any;
  };

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
    _hover,
    _pressed,
    _focus,
    ...props
  }: IPressableProps,
  ref: any
) => {
  const { pressableProps, isHovered } = useHover();
  const { pressableProps: isPressedProps, isPressed } = useIsPressed();
  const { focusProps, isFocusVisible } = useFocusRing();

  return (
    <StyledPressable
      ref={ref}
      onPressIn={composeEventHandlers(onPressIn, isPressedProps.onPressIn)}
      onPressOut={composeEventHandlers(onPressOut, isPressedProps.onPressOut)}
      // @ts-ignore - web only
      onHoverIn={composeEventHandlers(onHoverIn, pressableProps.onHoverIn)}
      // @ts-ignore - web only
      onHoverOut={composeEventHandlers(onHoverOut, pressableProps.onHoverOut)}
      {...props}
      // @ts-ignore - web only
      onFocus={composeEventHandlers(onFocus, focusProps.onFocus)}
      // @ts-ignore - web only
      onBlur={composeEventHandlers(onBlur, focusProps.onBlur)}
      {...(isHovered && _hover)}
      {...(isFocusVisible && _focus)}
      {...(isPressed && _pressed)}
    >
      {typeof children !== 'function'
        ? children
        : children({
            isPressed,
            isHovered,
            isFocusVisible,
            focusProps,
          })}
    </StyledPressable>
  );
};

export default React.forwardRef(Pressable);
