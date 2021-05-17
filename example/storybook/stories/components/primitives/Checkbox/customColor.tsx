import React from 'react';
import { Checkbox, VStack } from 'native-base';

export const Example = () => {
  return (
    <VStack space={3} alignItems="flex-start">
      <Checkbox value="danger" colorScheme="danger" defaultIsChecked>
        Danger
      </Checkbox>
      <Checkbox value="info" colorScheme="info" defaultIsChecked>
        Info
      </Checkbox>
      <Checkbox value="orange" colorScheme="orange" defaultIsChecked>
        Orange
      </Checkbox>
      <Checkbox value="purple" colorScheme="purple" defaultIsChecked>
        Purple
      </Checkbox>
    </VStack>
  );
};
