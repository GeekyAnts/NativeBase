import React from 'react';
import { Button, VStack, Icon } from 'native-base';

export default function () {
  return (
    <VStack space={4}>
      <Button startIcon={<Icon name="email" size={5} />}>Email</Button>
      <Button
        variant="outline"
        endIcon={<Icon name="arrow-forward" size={4} />}
      >
        Call us
      </Button>
    </VStack>
  );
}
