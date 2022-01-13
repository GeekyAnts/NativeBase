import React from 'react';
import { Popover, Button, Input, FormControl, Box } from 'native-base';

export function Example() {
  const initialFocusRef = React.useRef(null);
  return (
    <Box h="60%" w="100%" alignItems="center">
      <Popover
        initialFocusRef={initialFocusRef}
        trigger={(triggerProps) => {
          return <Button {...triggerProps}>Edit Info</Button>;
        }}
      >
        <Popover.Content width="56">
          <Popover.Arrow />
          <Popover.CloseButton />
          {/* @ts-ignore */}
          <Popover.Header>Personal Details</Popover.Header>
          <Popover.Body>
            <FormControl>
              <FormControl.Label
                _text={{
                  fontSize: 'xs',
                  fontWeight: 'medium',
                }}
              >
                First Name
              </FormControl.Label>
              <Input rounded="sm" fontSize="xs" ref={initialFocusRef} />
            </FormControl>
            <FormControl mt="3">
              <FormControl.Label
                _text={{
                  fontSize: 'xs',
                  fontWeight: 'medium',
                }}
              >
                Last Name
              </FormControl.Label>
              <Input rounded="sm" fontSize="xs" />
            </FormControl>
          </Popover.Body>
          <Popover.Footer>
            <Button.Group>
              <Button colorScheme="coolGray" variant="ghost">
                Cancel
              </Button>
              <Button>Save</Button>
            </Button.Group>
          </Popover.Footer>
        </Popover.Content>
      </Popover>
    </Box>
  );
}
