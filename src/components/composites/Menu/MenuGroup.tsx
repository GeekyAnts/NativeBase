import React from 'react';
import Text from '../../primitives/Text';
import Box from '../../primitives/Box';
import { useThemeProps } from '../../../hooks';
import TouchableItem from '../../primitives/TouchableItem';
import type { IMenuGroupProps } from './types';

export const MenuGroup = React.memo(
  React.forwardRef(({ title, children }: IMenuGroupProps, ref?: any) => {
    const { _title, ...newProps } = useThemeProps('MenuGroup', {});
    return (
      <Box ref={ref}>
        <TouchableItem
          activeOpacity={0.2}
          underlayColor={'transparent'}
          {...newProps}
        >
          <Text {..._title}>{title}</Text>
        </TouchableItem>
        {children}
      </Box>
    );
  })
);
