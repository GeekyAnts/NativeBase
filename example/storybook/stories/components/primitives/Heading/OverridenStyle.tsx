import React from 'react';
import { Heading } from 'native-base';

export function Example() {
  return (
    <Heading
      size="lg"
      fontSize={50}
      bold
      alignSelf={{ base: 'center', md: 'flex-start' }}
    >
      I'm overriding this heading
    </Heading>
  );
}
