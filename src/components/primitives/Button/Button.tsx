import React, { memo, forwardRef } from 'react';
import Spinner from '../Spinner';
import { usePropsResolution } from '../../../hooks/useThemeProps';
import { default as Box, IBoxProps } from '../Box';
import HStack from '../Stack/HStack';
import { Pressable } from '../Pressable';
import type { IButtonProps } from './types';

const Button = (
  {
    children,
    isLoadingText,
    startIcon,
    endIcon,
    spinner,
    ...props
  }: IButtonProps & IBoxProps,
  ref: any
) => {
  const {
    _text,
    _disabled,
    _focus,
    _hover,
    _pressed,
    _focusVisible,
    _stack,
    ...resolvedProps
  } = usePropsResolution('Button', props);

  const pressableProps = {
    ...resolvedProps,
    _hover,
    _pressed,
    _focus,
    _disabled,
    _focusVisible,
  };

  const { isDisabled, isLoading } = props;

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

  return (
    <Pressable
      disabled={isDisabled || isLoading}
      ref={ref}
      {...pressableProps}
      accessibilityRole={props.accessibilityRole ?? 'button'}
    >
      {/* TODO: Replace Render props with Context Hook */}
      {/* TODO: Can look for a simpler wat to do this */}
      {({ isPressed, isHovered, isFocused }) => {
        const focusTextProps = isFocused &&
          _focus?._text && { ..._focus._text };
        const hoverTextProps = isHovered &&
          _hover?._text && { ..._hover._text };
        const pressedTextProps = isPressed &&
          _pressed?._text && { ..._pressed._text };
        const disabledTextProps = isDisabled &&
          _disabled?._text && { ..._disabled._text };
        const focusVisibleTextProps = isFocused &&
          _focusVisible?._text && { ..._focusVisible._text };

        const boxChildren =
          isLoading && isLoadingText ? isLoadingText : children;

        return (
          <HStack {..._stack}>
            {startIcon && !isLoading ? startIcon : null}
            {isLoading ? (
              spinner ? (
                spinner
              ) : (
                <Spinner color={_text?.color} size="sm" />
              )
            ) : null}
            {boxChildren ? (
              <Box
                _text={{
                  ..._text,
                  ...hoverTextProps,
                  ...focusTextProps,
                  ...focusVisibleTextProps,
                  ...pressedTextProps,
                  ...disabledTextProps,
                }}
              >
                {isLoading && isLoadingText ? isLoadingText : children}
              </Box>
            ) : null}
            {endIcon && !isLoading ? endIcon : null}
          </HStack>
        );
      }}
    </Pressable>
  );
};

export default memo(forwardRef(Button));
