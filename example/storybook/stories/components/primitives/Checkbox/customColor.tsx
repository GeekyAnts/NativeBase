import React from 'react';
import { Checkbox, HStack, Text } from 'native-base';

export default function () {
  return (
    <HStack>
      <Checkbox value="danger" colorScheme="danger" defaultIsChecked>
        <Text mx={2}>Danger</Text>
      </Checkbox>
      <Checkbox value="info" colorScheme="info" defaultIsChecked>
        <Text mx={2}>Info</Text>
      </Checkbox>
      <Checkbox value="orange" colorScheme="orange" defaultIsChecked>
        <Text mx={2}>Orange</Text>
      </Checkbox>
      <Checkbox value="purple" colorScheme="purple" defaultIsChecked>
        <Text mx={2}>Purple</Text>
      </Checkbox>
    </HStack>
  );
}
