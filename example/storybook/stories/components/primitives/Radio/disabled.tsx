import React from 'react';
import { Radio } from 'native-base';

export const Example = () => {
  return (
    <Radio.Group
      defaultValue="2"
      name="exampleGroup"
      accessibilityLabel="select prize"
    >
      <Radio value="1" my={1} isDisabled>
        First
      </Radio>
      <Radio value="2" my={1}>
        Second
      </Radio>
      <Radio value="3" my={1}>
        Third
      </Radio>
    </Radio.Group>
  );
};
