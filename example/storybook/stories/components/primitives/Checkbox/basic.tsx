import React from 'react';
import { HStack, Checkbox } from 'native-base';

export default function () {
  return (
    <HStack space={6}>
      <Checkbox value="test" accessibilityLabel="This is a dummy checkbox" />
      <Checkbox
        value="test"
        accessibilityLabel="This is a dummy checkbox"
        isChecked
      />
    </HStack>
  );
}
