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
    _hover,
    _pressed,
    _focus,
    _focusVisible,
    _stack,
    ...resolvedProps
  } = usePropsResolution('Button', props);

  const pressableProps = {
    ...resolvedProps,
    _hover,
    _pressed,
    _focus,
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
      opacity={isDisabled || isLoading ? 0.5 : undefined}
    >
      {/* TODO : Replace Render props with Context Hook */}
      {({ isPressed, isHovered, isFocusVisible }: any) => {
        const focusTextProps = isFocusVisible &&
          _focus?._text && { ..._focus._text };
        const hoverTextProps = isHovered &&
          _hover?._text && { ..._hover._text };
        const pressedTextProps = isPressed &&
          _pressed?._text && { ..._pressed._text };

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
                  ...pressedTextProps,
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
