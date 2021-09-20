import React from 'react';
import { Checkbox } from 'native-base';

export const Example = () => {
  return (
    <Checkbox.Group accessibilityLabel="choose values">
      <Checkbox value="one" my={2}>
        Under 500
      </Checkbox>
      <Checkbox value="two">Under 1000</Checkbox>
    </Checkbox.Group>
  );
};
