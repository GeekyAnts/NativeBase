import React from 'react';
import { HStack, IStackProps } from '../../primitives';

const AppBarRight = ({ ...props }: IStackProps) => {
  return <HStack alignItems="center" justifyContent="flex-end" {...props} />;
};

export default AppBarRight;
