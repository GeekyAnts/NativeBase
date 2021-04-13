import React from 'react';
import { Radio } from 'native-base';

export default function () {
  return (
    <Radio.Group defaultValue="1" name="exampleGroup">
      <Radio colorScheme="red" value="1" my={1}>
        red
      </Radio>
      <Radio colorScheme="dark" value="2" my={1}>
        dark
      </Radio>
      <Radio colorScheme="success" value="3" my={1}>
        success
      </Radio>
    </Radio.Group>
  );
}
