import React, { memo, forwardRef, useContext } from 'react';
import { Box, Pressable } from '../../primitives';
import { TabsContext } from './Context';
import type { ITabProps, ITabsContextProps } from './types';

const Tab = ({ children, index, ...props }: ITabProps) => {
  const { setActive }: ITabsContextProps = useContext(TabsContext);
  return (
    <Pressable
      px="4"
      py="2"
      bg="gray.200"
      rounded="md"
      onPress={() => setActive(index)}
      {...props}
    >
      <Box _web={{ cursor: 'pointer' }}>{children}</Box>
    </Pressable>
  );
};

export default memo(forwardRef(Tab));
