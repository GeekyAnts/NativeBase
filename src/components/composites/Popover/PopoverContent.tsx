import { useThemeProps } from '../../../hooks';
import React from 'react';
import Box, { IBoxProps } from '../../primitives/Box';

export const PopoverContent = (props: IBoxProps) => {
  const style = useThemeProps('Popover', props);

  return <Box {...style.popoverContentProps} {...props} />;
};
