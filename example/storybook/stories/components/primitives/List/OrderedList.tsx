import React from 'react';
import { List, Heading, Box } from 'native-base';

export default function () {
  return (
    <Box w="80%">
      <Heading fontSize={24}>Ordered List</Heading>
      <List.Ordered my={2} spacing={2}>
        <List.Item>Inferno</List.Item>
        <List.Item>Mirage</List.Item>
        <List.Item>Dust 2</List.Item>
        <List.Item>Nuke</List.Item>
      </List.Ordered>
    </Box>
  );
}
