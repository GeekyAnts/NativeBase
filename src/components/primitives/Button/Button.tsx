import React, { memo, forwardRef } from 'react';
import Spinner from '../Spinner';
import { usePropsResolution } from '../../../hooks/useThemeProps';
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
import { AddIcon } from '../../primitives/Icon/Icons/Add';

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
    icon,
    spinnerPlacement = 'end',
    ...props
  }: IButtonProps & IBoxProps,
  ref: any
) => {
  const { hoverProps, isHovered } = useHover();
  const { pressableProps, isPressed } = useIsPressed();
  const { focusProps, isFocused } = useFocus();
  const { isFocusVisible, focusProps: focusRingProps }: any = useFocusRing();

  // console.log(props.colorScheme, '121212');
  const {
    onPressIn,
    onPressOut,
    onHoverIn,
    onHoverOut,
    onFocus,
    onBlur,
    _text,
    _icon,
    _stack,
    _spinner,
    isLoadingText,
    ...resolvedProps
  } = usePropsResolution('Button', props, {
    isDisabled,
    isHovered,
    isFocused,
    isPressed,
    isLoading,
    isFocusVisible,
  });

  // console.log(resolvedProps, '343434');
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
  if (icon) {
    endIcon = icon;
  }
  if (endIcon && React.isValidElement(endIcon)) {
    endIcon = React.Children.map(
      endIcon,
      (child: JSX.Element, index: number) => {
        return React.cloneElement(child, {
          key: `button-end-icon-${index}`,
          ..._text,
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
          ..._text,
          ...child.props,
        });
      }
    );
  }

  const boxChildren = isLoading && isLoadingText ? isLoadingText : children;

  const spinnerElement = spinner ? (
    spinner
  ) : (
    <Spinner color={_text?.color} {..._spinner} />
  );

  return (
    <Pressable
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
      <HStack {..._stack}>
        {startIcon && !isLoading ? startIcon : null}
        {isLoading && spinnerPlacement === 'start' ? spinnerElement : null}
        {boxChildren ? (
          <Box _text={_text}>
            {isLoading && isLoadingText ? isLoadingText : children}
          </Box>
        ) : null}
        {/* {endIcon && !isLoading ? endIcon : null} */}
        {isLoading ? null : endIcon ? (
          endIcon
        ) : (
          <AddIcon color={_text?.color} {..._icon} />
        )}
        {isLoading && spinnerPlacement === 'end' ? spinnerElement : null}
      </HStack>
    </Pressable>
  );
};

export default memo(forwardRef(Button));
