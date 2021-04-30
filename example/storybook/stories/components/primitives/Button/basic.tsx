import React from 'react';
import { Button } from 'native-base';

export default function () {
  return (
    <Button size="xs" onPress={() => console.log('hello world')}>
      PRIMARY
    </Button>
  );
}
