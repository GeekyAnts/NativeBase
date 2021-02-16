import React from 'react';
import { List, Heading, Box } from 'native-base';

export default function () {
  return (
    <Box w="50%">
      <Heading fontSize={24}>Plain List</Heading>
      <List spacing={2} my={2}>
        <List.Item>Inferno</List.Item>
        <List.Item>Mirage</List.Item>
        <List.Item>Dust 2</List.Item>
        <List.Item>Nuke</List.Item>
      </List>
    </Box>
  );
}
