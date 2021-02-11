import React from 'react';
import { default as Box, IBoxProps } from '../../primitives/Box';
import { PopoverContext } from './popover';

const PopoverBody = (props: IBoxProps) => {
  const {
    newProps: { popoverBodyProps },
    borderColor,
    borderWidth,
  } = React.useContext(PopoverContext);
  return (
    <Box
      {...popoverBodyProps}
      borderTopColor={borderColor}
      borderTopWidth={borderWidth}
      {...props}
    />
  );
};

export default React.memo(PopoverBody);
