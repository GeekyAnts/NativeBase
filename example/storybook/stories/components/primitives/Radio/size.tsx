import React from 'react';
import { Radio, Text } from 'native-base';

export default function () {
  return (
    <Radio.Group name="exampleGroup" defaultValue="1">
      <Radio value="1" colorScheme="red" size="sm" my={1}>
        <Text mx={2}>Small</Text>
      </Radio>
      <Radio value="2" colorScheme="green" size="md" my={1}>
        <Text mx={2}>Medium</Text>
      </Radio>
      <Radio value="3" colorScheme="yellow" size="lg" my={1}>
        <Text mx={2}>Large</Text>
      </Radio>
    </Radio.Group>
  );
}
