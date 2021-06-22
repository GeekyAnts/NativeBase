import React from 'react';
import { List, Heading, Box } from 'native-base';

export const Example = () => {
  return (
    <Box w="80%">
      <Heading fontSize={24}>My Todos (Unordered List)</Heading>
      <List.Unordered my={2} space={2}>
        <List.Item>Get groceries by Tomorrow.</List.Item>
        <List.Item>Book appointment with the Doc.</List.Item>
        <List.Item>Bill payment - Electricity.</List.Item>
        <List.Item>Pay Telephone Bill</List.Item>
      </List.Unordered>
    </Box>
  );
};
