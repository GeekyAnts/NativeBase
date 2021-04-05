import React from 'react';
import { Popover, Button } from 'native-base';

export default function () {
  return (
    <Popover
      trigger={(triggerProps: any) => {
        return <Button {...triggerProps}>Trigger</Button>;
      }}
    >
      <Popover.Content>
        <Popover.CloseButton />
        <Popover.Header>Confirmation!</Popover.Header>
        <Popover.Body>
          Are you sure you want to have that milkshake?
        </Popover.Body>
        <Popover.Footer>Footer</Popover.Footer>
      </Popover.Content>
    </Popover>
  );
}
