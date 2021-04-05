import React from 'react';
import { useThemeProps } from '../../../hooks';
import { default as Box, IBoxProps } from '../../primitives/Box';

const PopoverHeader = (props: IBoxProps, ref?: any) => {
  const style = useThemeProps('Popover', props);
  return <Box {...style.popoverHeaderProps} {...props} ref={ref} />;
};

export default React.memo(React.forwardRef(PopoverHeader));
