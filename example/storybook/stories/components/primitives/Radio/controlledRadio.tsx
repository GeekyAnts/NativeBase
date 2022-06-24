import React from 'react';
import { Radio } from 'native-base';

export const Example = () => {
  const [value, setValue] = React.useState('one');
  return (
    <Radio.Group
      name="myRadioGroup"
      accessibilityLabel="favorite number"
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
};
