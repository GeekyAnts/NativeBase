import React, { memo, forwardRef, useContext } from 'react';
import { Box, Pressable } from '../../primitives';
import { TabsContext } from './Context';
import type { ITabProps, ITabsContextProps } from './types';

const Tab = ({ children, value, ...props }: ITabProps, ref?: any) => {
  const { active, setActive }: ITabsContextProps = useContext(TabsContext);
  return (
    <Pressable
      px="4"
      py="2"
      rounded="md"
      onPress={() => setActive(value)}
      {...props}
      bg={value === active ? 'green.500' : props.bg ?? 'blue.500'}
      ref={ref}
    >
      <Box _web={{ cursor: 'pointer' }}>{children}</Box>
    </Pressable>
  );
};

export default memo(forwardRef(Tab));
