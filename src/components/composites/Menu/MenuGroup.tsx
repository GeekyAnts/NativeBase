import React from 'react';
import Text from '../../primitives/Text';
import { useThemeProps } from '../../../hooks';
import TouchableItem from '../../primitives/TouchableItem';
import type { IMenuGroupProps } from './types';

export const MenuGroup = React.memo(({ title, children }: IMenuGroupProps) => {
  const { _title, ...newProps } = useThemeProps('MenuGroup', {});
  return (
    <>
      <TouchableItem
        activeOpacity={1}
        underlayColor={'transparent'}
        {...newProps}
      >
        <Text {..._title}>{title}</Text>
      </TouchableItem>
      {children}
    </>
  );
});
