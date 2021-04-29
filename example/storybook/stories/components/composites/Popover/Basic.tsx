import React from 'react';
import { Popover, Button, Link } from 'native-base';

export default function () {
  return (
    <Popover
      trigger={(triggerProps: any) => {
        return <Button {...triggerProps}>Trigger</Button>;
      }}
    >
      <Popover.Content>
        <Popover.Arrow />
        <Popover.CloseButton />
        <Popover.Header>Data Saved</Popover.Header>
        <Popover.Body>Your changes has been saved.</Popover.Body>
        <Popover.Footer>
          <Link href="https://google.com">View Changes</Link>
        </Popover.Footer>
      </Popover.Content>
    </Popover>
  );
}
