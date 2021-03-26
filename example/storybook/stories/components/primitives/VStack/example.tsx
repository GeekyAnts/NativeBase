import React from 'react';
import { VStack, Text, Divider, Heading } from 'native-base';
import { number } from '@storybook/addon-knobs';

export default function () {
  return (
    <VStack
      divider={<Divider borderColor="red.200" />}
      space={number('Space', 4)}
    >
      <Heading>VStack</Heading>
      <Text>Test Text</Text>
      <Text>Testing this text with VStack</Text>
      <Text>Testing this text with VStack</Text>
      <Text>Testing this text with VStack</Text>
    </VStack>
  );
}
