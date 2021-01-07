import React from 'react';
import { HStack, IStackProps } from '../../primitives';
import { usePropsConfig } from '../../../hooks';

const AppBarLeft = ({ ...props }: IStackProps) => {
  const { color } = usePropsConfig('AppBar', props);
  return <HStack alignItems="center" color={color} {...props} />;
};

export default AppBarLeft;
