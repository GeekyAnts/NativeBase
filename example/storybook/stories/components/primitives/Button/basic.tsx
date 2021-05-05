import React from 'react';
import { Button } from 'native-base';

export default function () {
  return (
    <Button
      nativeID="223"
      variant="outline"
      onPress={() => console.log('hello world')}
    >
      PRIMARY
    </Button>
  );
}
