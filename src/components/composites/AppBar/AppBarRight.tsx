import React from 'react';
import { HStack, StackProps } from '../../primitives';

const AppBarRight = ({ ...props }: StackProps) => {
  return <HStack alignItems="center" justifyContent="flex-end" {...props} />;
};

export default AppBarRight;
