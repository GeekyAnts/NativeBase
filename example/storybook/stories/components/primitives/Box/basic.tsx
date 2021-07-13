import React from 'react';
import { Box, Table, Tr, Td } from 'native-base';
import { data } from './fakeData';

export const Example = () => {
  return (
    <Table
      data={data}
      ListHeaderComponent={() => {
        return (
          <Tr>
            <Td>Job Title</Td>
            <Td>Email</Td>
          </Tr>
        );
      }}
    >
      {({ item }) => {
        return (
          <Tr>
            <Td>{item.JobTitle}</Td>
            <Td>{item.EmailAddress}</Td>
          </Tr>
        );
      }}
    </Table>
  );
};
