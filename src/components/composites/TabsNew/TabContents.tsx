import React, { memo, forwardRef, useContext } from 'react';
import { Box } from '../../primitives';
import { TabsContext } from './Context';
import type { ITabContentsProps, ITabsContextProps } from './types';

const TabContents = ({ children, ...props }: ITabContentsProps, ref?: any) => {
  const { active }: ITabsContextProps = useContext(TabsContext);
  const items = React.Children.map(children, (child) => {
    const forvalue = child.props.for;
    return forvalue === active && child;
  });
  return (
    <Box {...props} ref={ref}>
      {items}
    </Box>
  );
};

export default memo(forwardRef(TabContents));
