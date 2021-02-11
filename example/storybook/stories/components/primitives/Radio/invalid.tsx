import React from 'react';
import { Radio, Text } from 'native-base';

export default function () {
  return (
    <Radio.Group name="exampleGroup">
      <Radio value="test" isInvalid>
        <Text mx={2}>Invalid Radio</Text>
      </Radio>
    </Radio.Group>
  );
}
