import React from 'react';
import { default as Box, IBoxProps } from '../../primitives/Box';
import { PopoverContext } from './popover';

const PopoverFooter = (props: IBoxProps) => {
  const {
    newProps: { popoverFooterProps },
    borderColor,
    borderWidth,
  } = React.useContext(PopoverContext);
  return (
    <Box
      {...popoverFooterProps}
      borderTopColor={borderColor}
      borderTopWidth={borderWidth}
      {...props}
    />
  );
};

export default React.memo(PopoverFooter);
