import React from 'react';
import { Tooltip, Button } from 'native-base';

export default function () {
  return (
    <Tooltip label="Hey, I'm here!">
      <Button>Hover or focus me</Button>
    </Tooltip>
  );
}
