import React from 'react';
import { Checkbox, VStack } from 'native-base';

export const Example = () => {
  return (
    <VStack space={2}>
      <Checkbox isDisabled value="one">
        Under 500
      </Checkbox>
      <Checkbox isDisabled defaultIsChecked value="two">
        Under 1000
      </Checkbox>
    </VStack>
  );
};
