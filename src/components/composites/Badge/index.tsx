import React, { memo, forwardRef } from 'react';
import Box from '../../primitives/Box';
import type { IBadgeProps } from './types';
import { usePropsResolution } from '../../../hooks/useThemeProps';
import { useHasResponsiveProps } from '../../../hooks/useHasResponsiveProps';

const Badge = (
  { children, startIcon, rightIcon, leftIcon, endIcon, ...props }: IBadgeProps,
  ref: any
) => {
  const newProps = usePropsResolution('Badge', props);
  //TODO: refactor for responsive prop
  if (useHasResponsiveProps(props)) {
    return null;
  }

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
          ...newProps._text,
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
          ...newProps._text,
          ...child.props,
        });
      }
    );
  }

  return (
    <Box {...newProps} ref={ref}>
      {startIcon ? startIcon : null}
      {children}
      {endIcon ? endIcon : null}
    </Box>
  );
};

export default memo(forwardRef(Badge));
export type { IBadgeProps };
