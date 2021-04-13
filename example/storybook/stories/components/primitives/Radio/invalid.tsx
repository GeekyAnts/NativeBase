import React from 'react';
import { Radio } from 'native-base';

export default function () {
  return (
    <Radio.Group name="exampleGroup">
      <Radio value="test" isInvalid>
        Invalid Radio
      </Radio>
    </Radio.Group>
  );
}
