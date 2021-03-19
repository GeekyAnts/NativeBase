import React from 'react';
import { Button, HStack } from 'native-base';

export default function () {
  return (
    <HStack space={2}>
      {['default', 'outline', 'contained'].map((variant: any) => (
        <Button variant={variant} colorScheme="primary" key={variant}>
          Button
        </Button>
      ))}
    </HStack>
  );
}
