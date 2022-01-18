import React from 'react';
import { Tooltip, Button, Center } from 'native-base';

export function Example() {
  return (
    <Center>
      <Tooltip label="Click here to read more" openDelay={500}>
        <Button>More</Button>
      </Tooltip>
    </Center>
  );
}
