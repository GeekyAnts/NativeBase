import React, { memo, forwardRef, useContext } from 'react';
import Stack from '../../primitives/Stack/Stack';
import type { ITabListProps, ITabsContextProps } from './types';
import { usePropsResolution } from '../../../hooks/useThemeProps';
import { TabsContext } from './Context';
import Tab from './Tab';

const TabList = (props: ITabListProps, ref?: any) => {
  const { orientation }: ITabsContextProps = useContext(TabsContext);
  const { state, isDisabled, ...resolvedProps } = usePropsResolution(
    'TabList',
    props
  );

  return (
    <Stack
      {...resolvedProps}
      ref={ref}
      direction={orientation === 'horizontal' ? 'row' : 'column'}
      p="2"
    >
      {[...state.collection].map((item) => (
        <Tab key={item.key} item={item} state={state} isDisabled={isDisabled} />
      ))}
    </Stack>
  );
};

export default memo(forwardRef(TabList));
