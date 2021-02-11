import React from 'react';
import { default as Box, IBoxProps } from '../../primitives/Box';
import { PopoverContext } from './popover';

const PopoverHeader = (props: IBoxProps) => {
  const {
    newProps: { popoverHeaderProps },
  } = React.useContext(PopoverContext);
  return <Box {...popoverHeaderProps} {...props} />;
};

export default React.memo(PopoverHeader);
