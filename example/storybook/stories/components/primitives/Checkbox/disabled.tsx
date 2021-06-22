import React from 'react';
import { Checkbox, VStack } from 'native-base';

export const Example = () => {
  return (
    <VStack space={2}>
      <Checkbox isDisabled value="one">
        Checkbox
      </Checkbox>
      <Checkbox isDisabled defaultIsChecked value="two">
        Checkbox
      </Checkbox>
    </VStack>
  );
};
