import React from 'react';
import { HStack, StackProps } from '../../primitives';

const AppBarLeft = ({ ...props }: StackProps) => {
  return <HStack alignItems="center" {...props} />;
};

export default AppBarLeft;
