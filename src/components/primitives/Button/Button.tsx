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
import { useHasResponsiveProps } from '../../../hooks/useHasResponsiveProps';

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
    spinnerPlacement = 'start',
    ...props
  }: IButtonProps & IBoxProps,
  ref: any
) => {
  const { hoverProps, isHovered } = useHover();
  const { pressableProps, isPressed } = useIsPressed();
  const { focusProps, isFocused } = useFocus();

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
    ...resolvedProps
  } = usePropsResolution(
    'Button',
    props,
    { isDisabled, isHovered, isFocused, isPressed, isLoading },
    { ignoreProps: ['_spinner'] }
  );

  // const pressableProps = {
  //   ...resolvedProps,
  //   _hover,
  //   _pressed,
  //   _focus,
  //   _focusVisible,
  // };
  // let {
  //   _text,
  //   _disabled,
  //   _focus,
  //   _hover,
  //   _pressed,
  //   _focusVisible,
  //   _loading,
  //   _stack,
  //   _spinner,
  //   spinnerProps,
  //   isLoadingText,
  //   ...resolvedProps
  // } = usePropsResolution('Button', props);

  // const pressableProps = {
  //   ...resolvedProps,
  //   _hover,
  //   _pressed,
  //   _focus,
  //   _focusVisible,
  // };

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
        composeEventHandlers(onFocus, focusProps.onFocus)
        // focusRingProps.onFocus
      )}
      // @ts-ignore - web only
      onBlur={composeEventHandlers(
        composeEventHandlers(onBlur, focusProps.onBlur)
        // focusRingProps.onBlur
      )}
      {...resolvedProps}
      // {...pressableProps}
      // {...(isDisabled && _disabled)}
      // {...(isLoading && _loading)}
      accessibilityRole={props.accessibilityRole ?? 'button'}
    >
      <HStack {..._stack}>
        {startIcon && !isLoading ? startIcon : null}
        {isLoading && spinnerPlacement === 'start' ? spinnerElement : null}
        {boxChildren ? (
          <Box
            _text={{
              ..._text,
              // ...hoverTextProps,
              // ...focusTextProps,
              // ...focusVisibleTextProps,
              // ...pressedTextProps,
              // ...loadingTextProps,
              // ...disabledTextProps,
            }}
          >
            {isLoading && isLoadingText ? isLoadingText : children}
          </Box>
        ) : null}

        {endIcon && !isLoading ? endIcon : null}
        {isLoading && spinnerPlacement === 'end' ? spinnerElement : null}
      </HStack>
    </Pressable>
  );
};

export default memo(forwardRef(Button));
