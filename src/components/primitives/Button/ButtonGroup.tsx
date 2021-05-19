import React, { memo, forwardRef } from 'react';
import type { IButtonGroupProps } from './types';
import { usePropsResolution } from '../../../hooks/useThemeProps';
import { Stack } from '../Stack';

export default memo(
  forwardRef(
    (
      {
        children,
        divider,
        variant,
        size,
        colorScheme,
        isDisabled,
        isAttached,
        ...props
      }: IButtonGroupProps,
      ref?: any
    ) => {
      const { space, ...newProps } = usePropsResolution('ButtonGroup', props);
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
        <Stack
          divider={divider}
          space={isAttached ? 0 : space}
          {...newProps}
          ref={ref}
        >
          {computedChildren}
        </Stack>
      );
    }
  )
);
