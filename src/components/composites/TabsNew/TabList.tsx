import React, { memo, forwardRef, useContext } from 'react';
import Stack from '../../primitives/Stack/Stack';
import type { ITabListProps, ITabsContextProps } from './types';
import { usePropsResolution } from '../../../hooks/useThemeProps';
import { TabsContext } from './Context';
import Tab from './Tab';

const TabList = (
  { tabItemProps, tabBarProps, ...props }: ITabListProps,
  ref?: any
) => {
  const { orientation }: ITabsContextProps = useContext(TabsContext);
  const { state, isDisabled, ...resolvedListProps } = usePropsResolution(
    'TabList',
    props
  );
  const { ...resolvedBarProps } = usePropsResolution(
    'TabBar',
    tabBarProps.props
  );

  return (
    <Stack
      {...resolvedListProps}
      {...resolvedBarProps}
      ref={ref}
      direction={orientation === 'horizontal' ? 'row' : 'column'}
    >
      {[...state.collection].map((item, index) => (
        <Tab
          key={item.key}
          item={item}
          state={state}
          isDisabled={isDisabled}
          tabItemProps={tabItemProps[index]}
        />
      ))}
    </Stack>
  );
};

export default memo(forwardRef(TabList));
