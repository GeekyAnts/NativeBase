import React from 'react';
import { Checkbox } from 'native-base';

export const Example = () => {
  return (
    <Checkbox.Group accessibilityLabel="choose values">
      <Checkbox value="one" my={2}>
        value 1
      </Checkbox>
      <Checkbox value="two">value 2</Checkbox>
    </Checkbox.Group>
  );
};
