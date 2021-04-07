import React from 'react';
import Spinner from '../Spinner';
import { useThemeProps } from '../../../hooks';
import { default as Box, IBoxProps } from '../Box';
import HStack from '../Stack/HStack';
import Pressable from '../Pressable';
import type { IButtonGroupProps, IButtonProps } from './types';

const Button = (
  {
    children,
    isLoading,
    isLoadingText,
    size,
    startIcon,
    endIcon,
    spinner,
    ...props
  }: IButtonProps & IBoxProps,
  ref: any
) => {
  const { _text, _hover, _pressed, ...restProps } = useThemeProps('Button', {
    ...props,
    size,
  });

  const { isDisabled } = props;

  const pressableProps = {
    ...restProps,
    _hover,
    _pressed,
  };

  return (
    <Pressable disabled={isDisabled} ref={ref} {...pressableProps}>
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
