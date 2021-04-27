import React from 'react';
import Spinner from '../Spinner';
import { usePropsResolution } from '../../../hooks/useThemeProps';
import { default as Box, IBoxProps } from '../Box';
import HStack from '../Stack/HStack';
import Pressable from '../Pressable';
import type { IButtonProps } from './types';
import { usePlatformProps } from '../../../hooks';

const Button = (
  {
    children,
    isLoadingText,
    size,
    startIcon,
    endIcon,
    spinner,
    ...props
  }: IButtonProps & IBoxProps,
  ref: any
) => {
  const { _text, _hover, _pressed, _focus, ...restProps } = usePropsResolution(
    'Button',
    {
      ...props,
      size,
    }
  );

  const platformProps = usePlatformProps(restProps);

  const { isDisabled, isLoading } = props;

  const pressableProps = {
    ...platformProps,
    _hover,
    _pressed,
    _focus,
  };

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

        return (
          <HStack space={2} alignItems="center">
            {startIcon && !isLoading ? startIcon : null}
            {isLoading ? (
              spinner ? (
                spinner
              ) : (
                <Spinner color={_text?.color} size="sm" />
              )
            ) : null}
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
            {endIcon && !isLoading ? endIcon : null}
          </HStack>
        );
      }}
    </Pressable>
  );
};

export default React.memo(React.forwardRef(Button));
