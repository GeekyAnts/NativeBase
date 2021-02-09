import React from 'react';
import { Checkbox, HStack, Text } from 'native-base';

export default function () {
  return (
    <HStack>
      <Checkbox value="red" colorScheme="red" size="sm" defaultIsChecked>
        <Text mx={2}>Checkbox</Text>
      </Checkbox>
      <Checkbox colorScheme="green" size="md" defaultIsChecked value="green">
        <Text mx={2}>Checkbox</Text>
      </Checkbox>
      <Checkbox colorScheme="yellow" value="yellow" size="lg" defaultIsChecked>
        <Text mx={2}>Checkbox</Text>
      </Checkbox>
    </HStack>
  );
}
