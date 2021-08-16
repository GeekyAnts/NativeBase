import React, { memo, forwardRef } from 'react';
import type { IButtonGroupProps } from './types';
import { usePropsResolution } from '../../../hooks/useThemeProps';
import { Stack } from '../Stack';
import { useHasResponsiveProps } from '../../../hooks/useHasResponsiveProps';

export default memo(
  forwardRef(
    ({ children, divider, ...props }: IButtonGroupProps, ref?: any) => {
      const {
        space,

        variant,
        size,
        colorScheme,
        isDisabled,
        isAttached,
        ...newProps
      } = usePropsResolution('ButtonGroup', props);
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
      //TODO: refactor for responsive prop
      if (useHasResponsiveProps(props)) {
        return null;
      }
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
