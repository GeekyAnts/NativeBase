import React, { memo, forwardRef } from 'react';
import Spinner from '../Spinner';
import { usePropsResolution } from '../../../hooks/useThemeProps';
import { default as Box, IBoxProps } from '../Box';
import HStack from '../Stack/HStack';
import { Pressable } from '../Pressable';
import type { IButtonProps } from './types';
import { useHasResponsiveProps } from '../../../hooks/useHasResponsiveProps';
import { useHover, useIsPressed, useFocus } from '../Pressable/Pressable';
import { composeEventHandlers } from '../../../utils';

const Button = (
  {
    children,
    isLoadingText,
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
    ...resolvedProps
  } = usePropsResolution(
    'Button',
    props,
    { isDisabled, isLoading, isHovered, isFocused, isPressed },
    { ignoreProps: ['_spinner'] }
  );
  //TODO: refactor for responsive prop
  if (useHasResponsiveProps(props)) {
    return null;
  }
  // const pressableProps = {
  //   ...resolvedProps,
  //   _hover,
  //   _pressed,
  //   _focus,
  //   _focusVisible,
  // };
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

  const spinnerElement = spinner ? spinner : <Spinner {..._spinner} />;

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
        // focusRingProps.onFocu
      )}
      // @ts-ignore - web only
      onBlur={composeEventHandlers(
        composeEventHandlers(onBlur, focusProps.onBlur)
        // focusRingProps.onBlur
      )}
      {...resolvedProps}
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
