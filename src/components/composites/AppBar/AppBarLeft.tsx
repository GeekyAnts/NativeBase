import React from 'react';
import { HStack, IStackProps } from '../../primitives';

const AppBarLeft = ({ ...props }: IStackProps) => {
  return <HStack alignItems="center" {...props} />;
};

export default AppBarLeft;
