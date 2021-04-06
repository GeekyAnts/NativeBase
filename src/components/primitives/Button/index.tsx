import React from 'react';
import Spinner from '../Spinner';
import { useThemeProps } from '../../../hooks';
import { default as Box, IBoxProps } from '../Box';
import HStack from '../Stack/HStack';
import Pressable from '../Pressable';
import type { IButtonGroupProps, IButtonProps } from './types';
import { composeEventHandlers } from '../../../utils';
import { useTheme } from '../../../hooks';

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

const Button = (
  {
    children,
    isLoading,
    isLoadingText,
    accessibilityLabel,
    accessibilityHint,
    accessibilityState,
    accessibilityRole,
    size,
    startIcon,
    onPress,
    onLongPress,
    onPressIn,
    onPressOut,
    onHoverIn,
    onHoverOut,
    endIcon,
    spinner,
    ...props
  }: IButtonProps & IBoxProps,
  ref: any
) => {
  const { _text, _hover, _pressed, ...newProps } = useThemeProps('Button', {
    ...props,
    size,
  });

  const { isDisabled } = props;

  const { pressableProps, isHovered } = useHover();
  const { pressableProps: isPressedProps, isPressed } = useIsPressed();

  const themeProps = {
    ...newProps,
    ...(isHovered && _hover),
    ...(isPressed && _pressed),
  };

  // const shadowProps = useToken('shadows', themeProps.shadow);
  const theme = useTheme();
  const shadowProps = theme.shadows()[themeProps.shadow];
  themeProps.shadow = undefined;

  return (
    <Pressable
      onPress={onPress}
      onLongPress={onLongPress}
      onPressIn={composeEventHandlers(onPressIn, isPressedProps.onPressIn)}
      onPressOut={composeEventHandlers(onPressOut, isPressedProps.onPressOut)}
      disabled={isDisabled}
      ref={ref}
      accessibilityHint={accessibilityHint}
      accessibilityRole={accessibilityRole ?? 'button'}
      accessibilityState={accessibilityState}
      accessibilityLabel={accessibilityLabel}
      // @ts-ignore - web only
      onHoverIn={composeEventHandlers(onHoverIn, pressableProps.onHoverIn)}
      // @ts-ignore - web only
      onHoverOut={composeEventHandlers(onHoverOut, pressableProps.onHoverOut)}
      {...themeProps}
      style={{ ...shadowProps }}
    >
      <HStack opacity={isDisabled ? 0.7 : undefined} space={2}>
        {startIcon && !isLoading ? startIcon : null}
        {isLoading ? (
          spinner ? (
            spinner
          ) : (
            <Spinner color={_text?.color} size="sm" />
          )
        ) : null}
        <Box _text={_text}>
          {isLoading && isLoadingText ? isLoadingText : children}
        </Box>
        {endIcon && !isLoading ? endIcon : null}
      </HStack>
    </Pressable>
  );
};

// TODO: Move this to Button.Group
export { ButtonGroup } from './ButtonGroup';
export type { IButtonProps, IButtonGroupProps };
export default React.memo(React.forwardRef(Button));
