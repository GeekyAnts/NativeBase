import React from 'react';
import { Button } from 'native-base';

export const Example = () => {
  return (
    <Button
      _pressed={{ bg: 'red.400' }}
      onPress={() => console.log('hello world')}
    >
      PRIMARY
    </Button>
  );
};
