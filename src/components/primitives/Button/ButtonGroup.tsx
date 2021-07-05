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
        _child,
        isDisabled,
        isAttached,
        ...props
      }: IButtonGroupProps,
      ref?: any
    ) => {
      const { space, direction, ...newProps } = usePropsResolution(
        'ButtonGroup',
        props
      );
      let computedChildren: JSX.Element | JSX.Element[];

      if (Array.isArray(children)) {
        computedChildren = React.Children.map(
          children,
          (child: JSX.Element, index: number) => {
            return React.cloneElement(child, {
              key: `button-group-child-${index}`,
              ..._child,
              isDisabled,

              // when buttons are attached, remove rounded corners of all buttons except extreme buttons
              ...(isAttached ? { borderRadius: 0 } : {}),
              ...(isAttached && index === 0
                ? direction === 'column'
                  ? { borderTopRadius: 'lg' }
                  : { borderLeftRadius: 'lg' }
                : {}),
              ...(isAttached && index === children?.length - 1
                ? direction === 'column'
                  ? { borderBottomRadius: 'lg' }
                  : { borderRightRadius: 'lg' }
                : {}),

              //when buttons are attached, remove double border from them, just keep borderRight in case for direction row and borderBottom in case of direction column for every component
              ...(isAttached && index !== 0
                ? direction === 'column'
                  ? { borderTopWidth: 0 }
                  : { borderLeftWidth: 0 }
                : {}),
              ...child.props,
            });
          }
        );
      } else {
        computedChildren = React.Children.map(
          children,
          (child: JSX.Element, index: number) => {
            return React.cloneElement(child, {
              key: `button-group-child-${index}`,
              ..._child,
              isDisabled,
              ...child.props,
            });
          }
        );
      }

      return (
        <Stack
          divider={divider}
          space={isAttached ? 0 : space}
          direction={direction}
          {...newProps}
          ref={ref}
        >
          {computedChildren}
        </Stack>
      );
    }
  )
);
