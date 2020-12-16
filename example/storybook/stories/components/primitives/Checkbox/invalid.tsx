import React from 'react';
import { Checkbox, Text } from 'native-base';

export default function () {
  return (
    <Checkbox isInvalid value="invalid">
      <Text mx={2}>Checkbox</Text>
    </Checkbox>
  );
}
