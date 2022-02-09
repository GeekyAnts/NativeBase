import React from 'react';
// import HStack from '../../primitives/Stack/HStack';
import Box from '../Box/index';
import Text from '../../primitives/Text/index';

const TableRow = ({ children, ...props }: any) => {
  return (
    <Box px="2" {...props}>
      <Text color="#000" fontSize="md">
        {children}
      </Text>
    </Box>
  );
};

export default TableRow;
