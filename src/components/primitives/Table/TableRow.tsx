import React from 'react';
// import VStack from '../../primitives/Stack/VStack';
// import Box from '../Box/index';
import HStack from '../../primitives/Stack/HStack';

const TableRow = ({ children, ...props }: any) => {
  return (
    <HStack px="8" py="3" {...props}>
      {children}
    </HStack>
  );
};

export default TableRow;
