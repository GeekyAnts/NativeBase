import React from 'react';
import Text from '../../primitives/Text';
import { useThemeProps } from '../../../hooks';
import TouchableItem from '../../primitives/TouchableItem';
import type { IMenuGroupProps } from './props';

export const MenuGroup = React.memo(({ title, children }: IMenuGroupProps) => {
  const newProps = useThemeProps('MenuGroup', {});
  return (
    <>
      <TouchableItem activeOpacity={1} underlayColor={'transparent'}>
        <Text {...newProps}>{title}</Text>
      </TouchableItem>
      {children}
    </>
  );
});
