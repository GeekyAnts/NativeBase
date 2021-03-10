import React from 'react';
import { Flex, Text, Spacer, Center } from 'native-base';

export const SpacerExample = () => {
  return (
    <Flex direction="row">
      <Center size={16} bg="emerald.500">
        <Text>Box 1</Text>
      </Center>
      <Spacer />
      <Center bg="lightBlue.500" size={16}>
        <Text>Box 2</Text>
      </Center>
    </Flex>
  );
};
