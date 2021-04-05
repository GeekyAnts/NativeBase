import React from 'react';
import { Popover, Button, Input } from 'native-base';
import type { TextInput } from 'react-native';

export default function () {
  const initialFocusRef = React.useRef<TextInput>(null);
  return (
    <Popover
      initialFocusRef={initialFocusRef}
      closeOnBlur={false}
      trigger={(triggerProps) => {
        return <Button {...triggerProps}>Trigger</Button>;
      }}
    >
      <Popover.Content width={250}>
        <Popover.CloseButton />
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
