import React from 'react';
import { List, Heading, Box } from 'native-base';

export const Example = () => {
  return (
    <Box w="80%">
      <Heading fontSize={24}>Styled List</Heading>
      <List.Ordered my={2} space={2} start={11} _text={{ color: 'amber.600' }}>
        <List.Item>Ocean's </List.Item>
        <List.Item _text={{ color: 'red.200' }}>Ocean's </List.Item>
        <List.Item _text={{ color: 'teal.400', fontWeight: 'bold' }}>
          Ocean's
        </List.Item>
      </List.Ordered>
    </Box>
  );
};
