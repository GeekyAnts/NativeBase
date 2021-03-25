import { useThemeProps } from '../../../hooks';
import React from 'react';
import Box from '../../primitives/Box';
import type { IPopoverContentProps } from './types';

export const PopoverContent = (props: IPopoverContentProps) => {
  let defaultStyle = useThemeProps('Popover', props);
  defaultStyle = props.isUnstyled ? {} : defaultStyle.popoverContentProps;
  return <Box {...defaultStyle} {...props} />;
};

PopoverContent.displayName = 'PopoverContent';
