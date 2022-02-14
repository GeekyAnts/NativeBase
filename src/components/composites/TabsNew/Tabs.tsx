import React, { useState, memo, forwardRef } from 'react';
import Box from '../../primitives/Box';
import { TabsContext } from './Context';
import type { ITabsProps } from './types';

const Tabs = ({ children, ...props }: ITabsProps, ref?: any) => {
  const initialActive = React.Children.map(children, (child) => {
    if (
      typeof child?.type === 'object' &&
      child?.type.type.render.name === 'TabContents'
    ) {
      return child.props.children[0].props.for;
    }
  });
  const [active, setActive] = useState(initialActive[0]);
  return (
    <TabsContext.Provider value={{ active, setActive }}>
      <Box w="100%" {...props} ref={ref}>
        {children}
      </Box>
    </TabsContext.Provider>
  );
};

export default memo(forwardRef(Tabs));
