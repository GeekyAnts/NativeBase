import React from 'react';
import { Checkbox, Text } from 'native-base';

export default function UnControlledCheckbox() {
  return (
    <Checkbox.Group>
      <Checkbox value="one" my={1}>
        <Text mx={1}>Hello world</Text>
      </Checkbox>
      <Checkbox value="two">
        <Text mx={1}>Hello world</Text>
      </Checkbox>
    </Checkbox.Group>
  );
}
