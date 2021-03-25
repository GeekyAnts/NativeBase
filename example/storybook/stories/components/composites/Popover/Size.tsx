import React from 'react';
import { Popover, Button } from 'native-base';

export default function () {
  return (
    <Popover
      trigger={(triggerProps) => {
        return <Button {...triggerProps}>Trigger for size</Button>;
      }}
    >
      <Popover.Arrow height={10} width={16} color="gray.200" />
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
