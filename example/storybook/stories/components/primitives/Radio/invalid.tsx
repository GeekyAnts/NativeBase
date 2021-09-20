import React from 'react';
import { Radio } from 'native-base';

export const Example = () => {
  return (
    <Radio.Group name="exampleGroup" accessibilityLabel="select an option">
      <Radio value="test" isInvalid>
        Others
      </Radio>
    </Radio.Group>
  );
};
