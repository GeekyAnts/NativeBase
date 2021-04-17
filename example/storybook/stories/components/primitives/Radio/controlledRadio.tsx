import React from 'react';
import { Radio } from 'native-base';
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
        One
      </Radio>
      <Radio value="two" my={1}>
        Two
      </Radio>
    </Radio.Group>
  );
}
