import React from 'react';
import { Divider, Flex, Text } from 'native-base';

export const Example = () => {
  return (
    <Flex direction="row" p={4}>
      <Text>Simple</Text>
      <Divider bg="red.500" size={3} mx={4} orientation="vertical" />
      <Text>Easy</Text>
      <Divider bg="blue.500" size={3} mx={4} orientation="vertical" />
      <Text>Beautiful</Text>
    </Flex>
  );
};
