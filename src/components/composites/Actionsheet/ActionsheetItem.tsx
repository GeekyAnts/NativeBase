import React, { memo, forwardRef } from 'react';
import { Pressable } from '../../primitives/Pressable';
import Box from '../../primitives/Box';
import { HStack } from '../../primitives/Stack';
import Spinner from '../../primitives/Spinner';
import { usePropsResolution } from '../../../hooks';
import type { IActionsheetItemProps } from './types';
import { useFocusRing } from '@react-native-aria/focus';
import {
  useHover,
  useFocus,
  useIsPressed,
} from '../../primitives/Pressable/Pressable';
import { composeEventHandlers } from '../../../utils';

const ActionsheetItem = (
  {
    //@ts-ignore
    onPressIn,
    onPressOut,
    onHoverIn,
    onHoverOut,
    onFocus,
    onBlur,
    children,
    startIcon,
    rightIcon,
    leftIcon,
    endIcon,
    spinner,
    isDisabled,
    isLoading,
    spinnerPlacement = 'start',
    ...props
  }: IActionsheetItemProps,
  ref: any
) => {
  const { hoverProps, isHovered } = useHover();
  const { pressableProps, isPressed } = useIsPressed();
  const { focusProps, isFocused } = useFocus();
  const { isFocusVisible, focusProps: focusRingProps }: any = useFocusRing();
  const state = {
    isDisabled,
    isHovered: isHovered,
    isFocused: isFocused,
    isPressed: isPressed,
    isLoading,
    isFocusVisible: isFocusVisible,
  };
  const {
    _text,
    _stack,
    _icon,
    _spinner,
    isLoadingText,
    ...resolvedProps
  } = usePropsResolution('ActionsheetItem', props, state, {
    cascadePseudoProps: true,
  });

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
    return child ? <Box _text={{ ..._text }}>{child}</Box> : null;
  };

  return (
    <Pressable
      disabled={isDisabled || isLoading}
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
      ref={ref}
    >
      <HStack {..._stack} test={true}>
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

export default memo(forwardRef(ActionsheetItem));
