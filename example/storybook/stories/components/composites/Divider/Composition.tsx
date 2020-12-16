import React from 'react';
import { Divider, Flex, Text } from 'native-base';

export default function () {
  return (
    <Flex direction="row" p={4}>
      <Text>Simple</Text>
      <Divider
        borderColor="red.500"
        borderWidth={2}
        mx={4}
        orientation="vertical"
      />
      <Text>Easy</Text>
      <Divider borderColor="blue.500" mx={4} orientation="vertical" />
      <Text>Beautiful</Text>
      <Divider borderColor="green.500" mx={4} orientation="vertical" />
      <Text>Nativebase</Text>
    </Flex>
  );
}
