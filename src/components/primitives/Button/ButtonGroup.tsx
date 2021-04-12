import React from 'react';
import type { IButtonGroupProps } from './types';
import { useThemeProps } from '../../../hooks';
import { Stack } from '../Stack';

export const ButtonGroup = React.memo(
  ({
    children,
    divider,
    variant,
    size,
    colorScheme,
    isDisabled,
    ...props
  }: IButtonGroupProps) => {
    const newProps = useThemeProps('ButtonGroup', props);
    const computedChildren = React.Children.map(
      children,
      (child: JSX.Element, index: number) => {
        return React.cloneElement(child, {
          key: `button-group-child-${index}`,
          variant,
          size,
          colorScheme,
          isDisabled,
          ...child.props,
        });
      }
    );
    return (
      <Stack divider={divider} {...newProps}>
        {computedChildren}
      </Stack>
    );
  }
);
