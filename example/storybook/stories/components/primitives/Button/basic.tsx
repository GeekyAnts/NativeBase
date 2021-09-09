import React from 'react';
import { Button } from 'native-base';

export const Example = () => {
  return (
    <>
      <Button onPress={() => console.log('hello world')} variant="outline">
        Primary
      </Button>
      <Button
        mt={'5'}
        onPress={() => console.log('hello world')}
        variant="outline"
        colorScheme="secondary"
      >
        Secondary
      </Button>
    </>
  );
};
