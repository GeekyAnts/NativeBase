import React from 'react';
import Text from '../../primitives/Text/index';
// import TableData from './TableData';
import Box from '../Box/index';

const TableHeaderData = ({ children, ...props }: any) => {
  return (
    <Box px="2" {...props}>
      <Text color="#000" fontWeight="700" fontSize="md">
        {children}
      </Text>
    </Box>
  );
};

export default TableHeaderData;
