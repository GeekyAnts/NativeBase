import React from 'react';
import { Popover, Button } from 'native-base';

export default function () {
  return (
    <Popover size="lg">
      <Popover.Trigger>
        <Button>Trigger for size</Button>
      </Popover.Trigger>
      <Popover.Content>
        <Popover.CloseButton />
        <Popover.Header>Confirmation!</Popover.Header>
        <Popover.Body>
          Are you sure you want to have that milkshake?
        </Popover.Body>
      </Popover.Content>
    </Popover>
  );
}
