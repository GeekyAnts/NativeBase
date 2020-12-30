import React from 'react';
import Text from '../../primitives/Text';
import { usePropsConfig } from '../../../hooks';
import TouchableItem from '../../primitives/TouchableItem';
import type { IMenuGroupProps } from './props';

export const MenuGroup = ({ title, children }: IMenuGroupProps) => {
  const newProps = usePropsConfig('MenuGroup', {});
  return (
    <>
      <TouchableItem activeOpacity={1} underlayColor={'transparent'}>
        <Text {...newProps}>{title}</Text>
      </TouchableItem>
      {children}
    </>
  );
};
