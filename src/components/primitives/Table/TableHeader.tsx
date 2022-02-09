import React from 'react';
// import TableRow from './TableRow';
import HStack from '../../primitives/Stack/HStack';

const TableHeader = ({ children, ...props }: any) => {
  return (
    <HStack px="8" py="3" {...props}>
      {children}
    </HStack>
  );
};

export default TableHeader;
