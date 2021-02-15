import React from 'react';
import { List, Heading, Box } from 'native-base';

export default function () {
  return (
    <Box w="50%">
      {/* <ScrollView> */}
      <Heading fontSize={24} color="indigo.500">
        Plain List
      </Heading>
      <List my={2} spacing={4}>
        <List.Item>Inferno</List.Item>
        <List.Item>Mirage</List.Item>
        <List.Item>Dust 2</List.Item>
        <List.Item>Nuke</List.Item>
      </List>
      <Heading fontSize={24} color="indigo.500">
        Ordered List
      </Heading>
      <List.Ordered my={2} spacing={4}>
        <List.Item>Inferno</List.Item>
        <List.Item>Mirage</List.Item>
        <List.Item>Dust 2</List.Item>
        <List.Item>Nuke</List.Item>
      </List.Ordered>
      <Heading fontSize={24} color="indigo.500">
        Unordered List
      </Heading>
      <List.Unordered my={2} spacing={4}>
        <List.Item>Inferno</List.Item>
        <List.Item>Mirage</List.Item>
        <List.Item>Dust 2</List.Item>
        <List.Item>Nuke</List.Item>
      </List.Unordered>
      {/* </ScrollView> */}
    </Box>
  );
}
