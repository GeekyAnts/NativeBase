import { useThemeProps } from '../../../hooks';
import React from 'react';
import Box, { IBoxProps } from '../../primitives/Box';

type IPopoverContent = IBoxProps & {
  isUnstyled?: boolean;
};

export const PopoverContent = (props: IPopoverContent) => {
  let defaultStyle = useThemeProps('Popover', props);
  defaultStyle = props.isUnstyled ? {} : defaultStyle;
  return <Box {...defaultStyle} {...props} />;
};

PopoverContent.displayName = 'PopoverContent';
