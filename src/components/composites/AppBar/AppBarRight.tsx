import React from 'react';
import { HStack, IStackProps } from '../../primitives';
import { usePropsConfig } from '../../../hooks';

const AppBarRight = ({ ...props }: IStackProps) => {
  const { color } = usePropsConfig('AppBar', props);
  return (
    <HStack
      alignItems="center"
      justifyContent="flex-end"
      color={color}
      {...props}
    />
  );
};

export default AppBarRight;
