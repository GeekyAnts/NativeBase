import React from 'react';
import { Button } from 'native-base';

export default function () {
  return (
    <Button
      colorScheme="primary"
      onPress={() => console.log('Button Pressed!')}
    >
      BUTTON
    </Button>
  );
}
