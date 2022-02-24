import React, { memo, forwardRef, useContext } from 'react';
import Stack from '../../primitives/Stack/Stack';
import type { ITabListProps } from './types';
import { usePropsResolution } from '../../../hooks/useThemeProps';
import { TabsContext } from './Context';
import Tab from './Tab';

const TabList = (props: ITabListProps<any>, ref?: any) => {
  const { state, orientation }: any = useContext(TabsContext);
  const { isDisabled, ...resolvedProps } = usePropsResolution('TabList', props);

  return (
    <Stack
      {...resolvedProps}
      {...props}
      ref={ref}
      direction={orientation === 'horizontal' ? 'row' : 'column'}
    >
      {[...state.collection].map((item) => (
        <Tab
          key={item.key}
          item={item}
          isDisabled={isDisabled}
          orientation={orientation}
        />
      ))}
    </Stack>
  );
};

export default memo(forwardRef(TabList));
