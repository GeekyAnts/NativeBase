import React from 'react';
import Box from '../../primitives/Box';
import { TabsContext } from './Context';
import type { ITabsContextProps, ITabBarProps } from './types';
import { mergeRefs } from '../../../utils';
import { useHasResponsiveProps } from '../../../hooks/useHasResponsiveProps';

const TabBarImpl = (
  { tablistRef, tabListProps, ...props }: ITabBarProps,
  ref?: any
) => {
  const {
    tabBarStyle,
    align,
    isFitted,
    state,
  }: ITabsContextProps = React.useContext(TabsContext);
  //TODO: refactor for responsive prop
  if (useHasResponsiveProps(props)) {
    return null;
  }
  return (
    <Box
      flexDirection="row"
      width="100%"
      justifyContent={isFitted ? 'space-between' : align}
      {...tabListProps}
      {...tabBarStyle}
      {...props}
      ref={mergeRefs([ref, tablistRef])}
    >
      {[...state.collection].map((item) =>
        React.cloneElement(item.rendered, { item, key: item.key })
      )}
    </Box>
  );
};
const TabBar = React.memo(React.forwardRef(TabBarImpl));

TabBar.displayName = 'TabBar';

export default TabBar;
