import React from 'react';
import { useThemeProps } from '../../../hooks';
import { default as Box, IBoxProps } from '../../primitives/Box';

const PopoverFooter = (props: IBoxProps) => {
  const style = useThemeProps('Popover', props);
  return <Box {...style.popoverFooterProps} {...props} />;
};

export default React.memo(PopoverFooter);
