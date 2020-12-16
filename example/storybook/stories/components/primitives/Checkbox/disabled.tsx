import React from 'react';
import { Checkbox, HStack, Text } from 'native-base';

export default function () {
  return (
    <HStack>
      <Checkbox isDisabled value="one">
        <Text m={2}>Checkbox</Text>
      </Checkbox>
      <Checkbox isDisabled defaultIsChecked value="two">
        <Text m={2}>Checkbox</Text>
      </Checkbox>
    </HStack>
  );
}
