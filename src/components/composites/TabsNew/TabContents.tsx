import React, { memo, forwardRef, useContext } from 'react';
import Box from '../../primitives/Box';
import { TabsContext } from './Context';
import TabBody from './TabBody';
import type { ITabContentsProps, ITabsContextProps } from './types';

const TabContents = ({ children, ...props }: ITabContentsProps, ref?: any) => {
  const { active }: ITabsContextProps = useContext(TabsContext);
  const items = React.Children.map(children, (child) => {
    if (child.type === TabBody) {
      const forvalue = child.props.for;
      return forvalue === active && child;
    }
  });
  return (
    <Box {...props} ref={ref}>
      {items}
    </Box>
  );
};

export default memo(forwardRef(TabContents));
