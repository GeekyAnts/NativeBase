import React from 'react';
import getIndexedChildren from '../../../utils/getIndexedChildren';
import Box from '../../primitives/Box';
import { TabsContext } from './Context';
import type { ITabsContextProps, ITabBarProps } from './props';

const TabBar = ({ children, ...props }: ITabBarProps) => {
  const { tabBarStyle, align, isFitted }: ITabsContextProps = React.useContext(
    TabsContext
  );
  return (
    <Box
      flexDirection="row"
      width="100%"
      justifyContent={isFitted ? 'space-between' : align}
      {...tabBarStyle}
      {...props}
    >
      {getIndexedChildren(children, 'Tab')}
    </Box>
  );
};

export default React.memo(TabBar);
