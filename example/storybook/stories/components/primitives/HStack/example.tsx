import React from 'react';
import { HStack, Text, Divider, Heading, Stack } from 'native-base';

export default function () {
  return (
    <Stack space={4}>
      <Heading>HStack</Heading>
      <HStack divider={<Divider borderColor="red.200" />} reversed space={8}>
        <Text>Test Text</Text>
        <Text>Testing this text with HStacks</Text>
      </HStack>
    </Stack>
  );
}
