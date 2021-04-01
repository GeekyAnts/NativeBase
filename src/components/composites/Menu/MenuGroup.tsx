import React from 'react';
import Text from '../../primitives/Text';
import { useThemeProps } from '../../../hooks';
import Box from '../../primitives/Box';
import type { IMenuGroupProps } from './types';

export const MenuGroup = React.memo(({ title, children }: IMenuGroupProps) => {
  const { _title, ...newProps } = useThemeProps('MenuGroup', {});

  return (
    <>
      <Box {...newProps}>
        <Text {..._title}>{title}</Text>
      </Box>
      {children}
    </>
  );
});
