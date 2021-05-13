import React from 'react';
import { List, Heading, Box } from 'native-base';

export const Example = () => {
  return (
    <Box w="80%">
      <Heading fontSize={24}>Bill-#187 (Ordered List)</Heading>
      <List.Ordered my={2} space={2}>
        <List.Item>Fruit Juice x 2</List.Item>
        <List.Item>Cheddar cheese - 200g</List.Item>
        <List.Item>Milk 1L x 2</List.Item>
        <List.Item>Brown Bread - 400g</List.Item>
      </List.Ordered>
    </Box>
  );
};
