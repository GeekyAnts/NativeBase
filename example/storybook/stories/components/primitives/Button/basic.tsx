import React from 'react';
import { Button } from 'native-base';

export default function () {
  return <Button onPress={() => console.log('Button Pressed!')}>Button</Button>;
}
