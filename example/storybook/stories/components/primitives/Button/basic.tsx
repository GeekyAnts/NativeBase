import React from 'react';
import { Button } from 'native-base';

export default function () {
  return (
    <Button variant="outline" onPress={() => console.log('Button Pressed!')}>
      BUTTON
    </Button>
  );
}
