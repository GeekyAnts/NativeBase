import React, { memo, forwardRef } from 'react';
import HStack from '../../primitives/Stack/HStack';
import Box from '../../primitives/Box';
import type { IBadgeProps } from './types';
import { usePropsResolution } from '../../../hooks/useThemeProps';
import { useHasResponsiveProps } from '../../../hooks/useHasResponsiveProps';
import { useColorMode } from '../../../core/color-mode';
import { getResolvedStyleSheet, getThemeProps } from '../../../core';

const Badge = (
  {
    children,
    startIcon,
    rightIcon,
    leftIcon,
    endIcon,

    ...props
  }: IBadgeProps,
  ref: any
) => {
  const { colorMode } = useColorMode();

  const { style, unResolvedProps } = getThemeProps(
    'Badge',
    colorMode,
    {},
    props
  );

  const { _icon, _text, ...newProps } = usePropsResolution(
    'Badge',
    {
      ...unResolvedProps,
      ...props,
    },
    {}
  );

  // console.log(props, newProps, 'hello props >>>>>');

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
          key: `badge-end-icon-${index}`,
          ..._icon,
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
          key: `badge-start-icon-${index}`,
          ..._icon,
          ...child.props,
        });
      }
    );
  }

  // console.log(style, 'hello props >>>>> 22');
  return (
    <HStack INTERNAL_themeStyle={style} {...newProps} ref={ref}>
      {startIcon ? startIcon : null}
      <Box
        _text={{
          ..._text,
          INTERNAL_themeStyle: getResolvedStyleSheet(
            [`Badge`, props.variant, props.size, `Text`],
            colorMode,
            {}
          ),
        }}
      >
        {children}
      </Box>
      {endIcon ? endIcon : null}
    </HStack>
  );
};

export default memo(forwardRef(Badge));
export type { IBadgeProps };
