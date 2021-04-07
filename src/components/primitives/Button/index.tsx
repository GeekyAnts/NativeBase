import React from 'react';
import Spinner from '../Spinner';
import { useThemeProps } from '../../../hooks';
import { default as Box, IBoxProps } from '../Box';
import HStack from '../Stack/HStack';
import Pressable from '../Pressable';
import type { IButtonGroupProps, IButtonProps } from './types';
import { usePlatformProps } from '../../../hooks';

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
  const { _text, _hover, _pressed, _focus, ...restProps } = useThemeProps(
    'Button',
    {
      ...props,
      size,
    }
  );

  const platformProps = usePlatformProps(restProps);

  const { isDisabled } = props;

  const pressableProps = {
    ...platformProps,
    _hover,
    _pressed,
    _focus,
  };

  return (
    <Pressable
      disabled={isDisabled || isLoading}
      ref={ref}
      {...pressableProps}
      opacity={isDisabled || isLoading ? 0.6 : undefined}
    >
      <HStack space={2}>
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
