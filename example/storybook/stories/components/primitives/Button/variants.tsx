import React from 'react';
import { Button, VStack } from 'native-base';

export default function () {
  return (
    <VStack space={3}>
      {['solid', 'outline', 'ghost', 'link', 'unstyled'].map((variant: any) => (
        <Button variant={variant} key={variant}>
          BUTTON
        </Button>
      ))}
    </VStack>
  );
}
