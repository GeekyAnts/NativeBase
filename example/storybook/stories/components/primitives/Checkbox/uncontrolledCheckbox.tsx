import React from 'react';
import { Checkbox, Text } from 'native-base';

export default function UnControlledCheckbox() {
  return (
    <Checkbox.Group onChange={console.log}>
      <Checkbox value="one">
        <Text>Hello world</Text>
      </Checkbox>
      <Checkbox value="two">
        <Text>Hello world</Text>
      </Checkbox>
    </Checkbox.Group>
  );
}
