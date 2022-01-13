import React from 'react';
import { Tooltip, Button, Center } from 'native-base';

export function Example() {
  return (
    <Center>
      <Tooltip
        label="Click here to read more"
        openDelay={500}
        bg="indigo.500"
        _text={{ color: '#fff' }}
      >
        <Button>More</Button>
      </Tooltip>
    </Center>
  );
}
