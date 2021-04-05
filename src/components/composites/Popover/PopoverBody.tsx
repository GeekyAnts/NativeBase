import { useThemeProps } from '../../../hooks';
import React from 'react';
import { default as Box, IBoxProps } from '../../primitives/Box';

const PopoverBody = (props: IBoxProps, ref?: any) => {
  const style = useThemeProps('Popover', props);

  return <Box {...style.popoverBodyProps} {...props} ref={ref} />;
};

export default React.memo(React.forwardRef(PopoverBody));
