import React from 'react';
import { Radio, RadioGroup, Text } from 'native-base';

export default function () {
  return (
    <RadioGroup name="exampleGroup">
      <Radio value="test" isInvalid>
        <Text mx={2}>Invalid Radio</Text>
      </Radio>
    </RadioGroup>
  );
}
