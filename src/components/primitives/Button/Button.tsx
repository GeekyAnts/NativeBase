import React, { memo, forwardRef } from 'react';
import Spinner from '../Spinner';
import { usePropsResolution } from '../../../hooks/useThemeProps';
import { default as Box, IBoxProps } from '../Box';
import HStack from '../Stack/HStack';
import { Pressable } from '../Pressable';
import type { IButtonProps } from './types';
import { useHasResponsiveProps } from '../../../hooks/useHasResponsiveProps';

const Button = (
  {
    children,
    startIcon,
    rightIcon,
    leftIcon,
    endIcon,
    spinner,
    spinnerPlacement = 'start',
    ...props
  }: IButtonProps & IBoxProps,
  ref: any
) => {
  let {
    _text,
    _disabled,
    _focus,
    _hover,
    _pressed,
    _focusVisible,
    _stack,
    _loading,
    _spinner,
    spinnerProps,
    isLoadingText,
    ...resolvedProps
  } = usePropsResolution('Button', props);

  const pressableProps = {
    ...resolvedProps,
    _hover,
    _pressed,
    _focus,
    _focusVisible,
  };

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
      {...(isLoading && _loading)}
      {...(isDisabled && _disabled)}
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
        const loadingTextProps = isLoading &&
          _loading?._text && { ..._loading._text };

        const boxChildren =
          isLoading && isLoadingText ? isLoadingText : children;

        const spinnerElement = spinner ? (
          spinner
        ) : (
          <Spinner
            color={loadingTextProps?.color || _text?.color}
            {...spinnerProps}
            {..._spinner}
          />
        );

        return (
          <HStack {..._stack}>
            {startIcon && !isLoading ? startIcon : null}
            {isLoading && spinnerPlacement === 'start' ? spinnerElement : null}
            {boxChildren ? (
              <Box
                _text={{
                  ..._text,
                  ...hoverTextProps,
                  ...focusTextProps,
                  ...focusVisibleTextProps,
                  ...pressedTextProps,
                  ...loadingTextProps,
                  ...disabledTextProps,
                }}
              >
                {isLoading && isLoadingText ? isLoadingText : children}
              </Box>
            ) : null}

            {endIcon && !isLoading ? endIcon : null}
            {isLoading && spinnerPlacement === 'end' ? spinnerElement : null}
          </HStack>
        );
      }}
    </Pressable>
  );
};

export default memo(forwardRef(Button));
