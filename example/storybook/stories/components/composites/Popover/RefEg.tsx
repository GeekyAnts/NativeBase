import React from 'react';
import { Popover, Button, Input } from 'native-base';

export function Example() {
  const initialFocusRef = React.useRef(null);
  return (
    <Popover
      initialFocusRef={initialFocusRef}
      trigger={(triggerProps) => {
        return <Button {...triggerProps}>Trigger</Button>;
      }}
    >
      <Popover.Content width={250}>
        <Popover.Arrow />
        <Popover.CloseButton />
        {/* @ts-ignore */}
        <Popover.Header fontSize={20} fontWeight={700}>
          Header
        </Popover.Header>
        <Popover.Body>
          <Input
            mb={3}
            backgroundColor="white"
            ref={initialFocusRef}
            placeholder="I will get focused on Popover opening"
          />
          This Popover won't close on clicking outside the popover area.
        </Popover.Body>
        <Popover.Footer>This is the footer</Popover.Footer>
      </Popover.Content>
    </Popover>
  );
}
