import React from 'react';
import { Popover, Button, VStack, HStack } from 'native-base';

export function Example() {
  return (
    <VStack space={6}>
      <Popover
        trigger={(triggerProps) => {
          return <Button {...triggerProps}>Auto</Button>;
        }}
      >
        <Popover.Content>
          <Popover.Arrow />
          <Popover.CloseButton />
          <Popover.Header>Data Saved</Popover.Header>
          <Popover.Body>Your changes has been saved.</Popover.Body>
        </Popover.Content>
      </Popover>

      <HStack space={6}>
        <Popover
          placement="top left"
          trigger={(triggerProps) => {
            return <Button {...triggerProps}>Top Left</Button>;
          }}
        >
          <Popover.Content>
            <Popover.Arrow />
            <Popover.CloseButton />
            <Popover.Header>Data Saved</Popover.Header>
            <Popover.Body>Your changes has been saved.</Popover.Body>
          </Popover.Content>
        </Popover>

        <Popover
          placement="top"
          trigger={(triggerProps) => {
            return <Button {...triggerProps}>Top</Button>;
          }}
        >
          <Popover.Content>
            <Popover.Arrow />
            <Popover.CloseButton />
            <Popover.Header>Data Saved</Popover.Header>
            <Popover.Body>Your changes has been saved.</Popover.Body>
          </Popover.Content>
        </Popover>

        <Popover
          placement="top right"
          trigger={(triggerProps) => {
            return <Button {...triggerProps}>Top right</Button>;
          }}
        >
          <Popover.Content>
            <Popover.Arrow />
            <Popover.CloseButton />
            <Popover.Header>Data Saved</Popover.Header>
            <Popover.Body>Your changes has been saved.</Popover.Body>
          </Popover.Content>
        </Popover>
      </HStack>

      <HStack space={6}>
        <Popover
          placement="right top"
          trigger={(triggerProps) => {
            return <Button {...triggerProps}>Right top</Button>;
          }}
        >
          <Popover.Content>
            <Popover.Arrow />
            <Popover.CloseButton />
            <Popover.Header>Data Saved</Popover.Header>
            <Popover.Body>Your changes has been saved.</Popover.Body>
          </Popover.Content>
        </Popover>

        <Popover
          placement="right"
          trigger={(triggerProps) => {
            return <Button {...triggerProps}>Right</Button>;
          }}
        >
          <Popover.Content>
            <Popover.Arrow />
            <Popover.CloseButton />
            <Popover.Header>Data Saved</Popover.Header>
            <Popover.Body>Your changes has been saved.</Popover.Body>
          </Popover.Content>
        </Popover>

        <Popover
          placement="right bottom"
          trigger={(triggerProps) => {
            return <Button {...triggerProps}>Right bottom</Button>;
          }}
        >
          <Popover.Content>
            <Popover.Arrow />
            <Popover.CloseButton />
            <Popover.Header>Data Saved</Popover.Header>
            <Popover.Body>Your changes has been saved.</Popover.Body>
          </Popover.Content>
        </Popover>
      </HStack>

      <HStack space={6}>
        <Popover
          placement="bottom left"
          trigger={(triggerProps) => {
            return <Button {...triggerProps}>Bottom left</Button>;
          }}
        >
          <Popover.Content>
            <Popover.Arrow />
            <Popover.CloseButton />
            <Popover.Header>Data Saved</Popover.Header>
            <Popover.Body>Your changes has been saved.</Popover.Body>
          </Popover.Content>
        </Popover>

        <Popover
          placement="bottom"
          trigger={(triggerProps) => {
            return <Button {...triggerProps}>Bottom</Button>;
          }}
        >
          <Popover.Content>
            <Popover.Arrow />
            <Popover.CloseButton />
            <Popover.Header>Data Saved</Popover.Header>
            <Popover.Body>Your changes has been saved.</Popover.Body>
          </Popover.Content>
        </Popover>

        <Popover
          placement="bottom right"
          trigger={(triggerProps) => {
            return <Button {...triggerProps}>Bottom right</Button>;
          }}
        >
          <Popover.Content>
            <Popover.Arrow />
            <Popover.CloseButton />
            <Popover.Header>Data Saved</Popover.Header>
            <Popover.Body>Your changes has been saved.</Popover.Body>
          </Popover.Content>
        </Popover>
      </HStack>

      <HStack space={6}>
        <Popover
          placement="left top"
          trigger={(triggerProps) => {
            return <Button {...triggerProps}>Left top</Button>;
          }}
        >
          <Popover.Content>
            <Popover.Arrow />
            <Popover.CloseButton />
            <Popover.Header>Data Saved</Popover.Header>
            <Popover.Body>Your changes has been saved.</Popover.Body>
          </Popover.Content>
        </Popover>
        <Popover
          placement="left"
          trigger={(triggerProps) => {
            return <Button {...triggerProps}>Left</Button>;
          }}
        >
          <Popover.Content>
            <Popover.Arrow />
            <Popover.CloseButton />
            <Popover.Header>Data Saved</Popover.Header>
            <Popover.Body>Your changes has been saved.</Popover.Body>
          </Popover.Content>
        </Popover>

        <Popover
          placement="left bottom"
          trigger={(triggerProps) => {
            return <Button {...triggerProps}>Left bottom</Button>;
          }}
        >
          <Popover.Content>
            <Popover.Arrow />
            <Popover.CloseButton />
            <Popover.Header>Data Saved</Popover.Header>
            <Popover.Body>Your changes has been saved.</Popover.Body>
          </Popover.Content>
        </Popover>
      </HStack>
    </VStack>
  );
}
