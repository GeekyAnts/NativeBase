import { useThemeProps } from '../../../hooks';
import React from 'react';
import { default as Box, IBoxProps } from '../../primitives/Box';

const PopoverBody = (props: IBoxProps) => {
  const style = useThemeProps('Popover', props);

  return <Box {...props} {...style.popoverBodyProps} />;
};

export default React.memo(PopoverBody);
