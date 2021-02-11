import React from 'react';
import { Radio, Text } from 'native-base';

export default function () {
  return (
    <Radio.Group defaultValue="1" name="exampleGroup">
      <Radio colorScheme="red" value="1">
        <Text mx={2}>red</Text>
      </Radio>
      <Radio colorScheme="dark" value="2">
        <Text mx={2}>dark</Text>
      </Radio>
      <Radio colorScheme="success" value="3">
        <Text mx={2}>success</Text>
      </Radio>
    </Radio.Group>
  );
}
