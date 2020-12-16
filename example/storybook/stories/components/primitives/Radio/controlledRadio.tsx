import React from 'react';
import { Radio, RadioGroup, Text } from 'native-base';
import type { IRadioValue } from 'native-base';

export default function ControlledRadio() {
  const [value, setValue] = React.useState<IRadioValue>('one');

  return (
    <RadioGroup
      name="myRadioGroup"
      value={value}
      onChange={(nextValue) => {
        setValue(nextValue);
      }}
    >
      <Radio value="one">
        <Text>One</Text>
      </Radio>
      <Radio value="two">
        <Text>Two</Text>
      </Radio>
    </RadioGroup>
  );
}
