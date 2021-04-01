import { useThemeProps } from '../../../hooks';
import React from 'react';
import Box from '../../primitives/Box';
import type { IPopoverContentProps } from './types';

export const PopoverContent = React.forwardRef(
  (props: IPopoverContentProps, ref?: any) => {
    let defaultStyle = useThemeProps('Popover', props);
    defaultStyle = props.isUnstyled ? {} : defaultStyle.popoverContentProps;
    return <Box {...defaultStyle} {...props} ref={ref} />;
  }
);

PopoverContent.displayName = 'PopoverContent';
