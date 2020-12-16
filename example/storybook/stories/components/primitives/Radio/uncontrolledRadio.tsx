import React from 'react';
import { Radio, RadioGroup, Text } from 'native-base';

export default function () {
  return (
    <RadioGroup defaultValue="1" name="myRadioGroup">
      <Radio value="1">
        <Text mx={2}>First</Text>
      </Radio>
      <Radio value="2">
        <Text mx={2}>Second</Text>
      </Radio>
      <Radio value="3">
        <Text mx={2}>Third</Text>
      </Radio>
    </RadioGroup>
  );
}
