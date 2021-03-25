import React from 'react';
import { useThemeProps } from '../../../hooks';
import { default as Box, IBoxProps } from '../../primitives/Box';

const PopoverHeader = (props: IBoxProps) => {
  const style = useThemeProps('Popover', props);
  return <Box {...style.popoverHeaderProps} {...props} />;
};

export default React.memo(PopoverHeader);
