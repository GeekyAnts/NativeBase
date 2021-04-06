import React from 'react';
import { Radio, Text } from 'native-base';
import type { IRadioValue } from 'native-base';

export default function ControlledRadio() {
  const [value, setValue] = React.useState<IRadioValue>('one');

  return (
    <Radio.Group
      name="myRadioGroup"
      value={value}
      onChange={(nextValue) => {
        setValue(nextValue);
      }}
    >
      <Radio value="one" my={1}>
        <Text mx={3}>One</Text>
      </Radio>
      <Radio value="two" my={1}>
        <Text mx={3}>Two</Text>
      </Radio>
    </Radio.Group>
  );
}
