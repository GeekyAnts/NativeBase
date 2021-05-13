import React from 'react';
import { Menu, Button, VStack, HStack, Checkbox } from 'native-base';

export function Example() {
  const [
    shouldOverlapWithTrigger,
    setShouldOverlapWithTrigger,
  ] = React.useState(false);

  return (
    <VStack space={6} alignItems="center">
      <Checkbox
        value="shouldOverlapWithTrigger"
        isChecked={shouldOverlapWithTrigger}
        onChange={() => setShouldOverlapWithTrigger(!shouldOverlapWithTrigger)}
      >
        Should overlap with trigger
      </Checkbox>
      <HStack space={6}>
        <Menu
          shouldOverlapWithTrigger={shouldOverlapWithTrigger}
          placement="top left"
          trigger={(triggerProps) => {
            return (
              <Button variant="ghost" {...triggerProps}>
                Top Left
              </Button>
            );
          }}
        >
          <Menu.Item>Large Menu item 1</Menu.Item>
          <Menu.Item>Large Menu item 2</Menu.Item>
          <Menu.Item>Large Menu item 3</Menu.Item>
        </Menu>

        <Menu
          shouldOverlapWithTrigger={shouldOverlapWithTrigger}
          placement="top"
          trigger={(triggerProps) => {
            return (
              <Button variant="ghost" {...triggerProps}>
                Top
              </Button>
            );
          }}
        >
          <Menu.Item>Large Menu item 1</Menu.Item>
          <Menu.Item>Large Menu item 2</Menu.Item>
          <Menu.Item>Large Menu item 3</Menu.Item>
        </Menu>

        <Menu
          shouldOverlapWithTrigger={shouldOverlapWithTrigger}
          placement="top right"
          trigger={(triggerProps) => {
            return (
              <Button variant="ghost" {...triggerProps}>
                Top right
              </Button>
            );
          }}
        >
          <Menu.Item>Large Menu Item 1</Menu.Item>
          <Menu.Item>Large Menu Item 2</Menu.Item>
          <Menu.Item>Large Menu Item 3</Menu.Item>
        </Menu>
      </HStack>

      <HStack space={6}>
        <Menu
          shouldOverlapWithTrigger={shouldOverlapWithTrigger}
          placement="right top"
          trigger={(triggerProps) => {
            return (
              <Button variant="ghost" {...triggerProps}>
                Right top
              </Button>
            );
          }}
        >
          <Menu.Item>Large Menu Item 1</Menu.Item>
          <Menu.Item>Large Menu Item 2</Menu.Item>
          <Menu.Item>Large Menu Item 3</Menu.Item>
        </Menu>

        <Menu
          shouldOverlapWithTrigger={shouldOverlapWithTrigger}
          placement="right"
          trigger={(triggerProps) => {
            return (
              <Button variant="ghost" {...triggerProps}>
                Right
              </Button>
            );
          }}
        >
          <Menu.Item>Large Menu Item 1</Menu.Item>
          <Menu.Item>Large Menu Item 2</Menu.Item>
          <Menu.Item>Large Menu Item 3</Menu.Item>
        </Menu>

        <Menu
          shouldOverlapWithTrigger={shouldOverlapWithTrigger}
          placement="right bottom"
          trigger={(triggerProps) => {
            return (
              <Button variant="ghost" {...triggerProps}>
                Right bottom
              </Button>
            );
          }}
        >
          <Menu.Item>Large Menu Item 1</Menu.Item>
          <Menu.Item>Large Menu Item 2</Menu.Item>
          <Menu.Item>Large Menu Item 3</Menu.Item>
        </Menu>
      </HStack>

      <HStack space={6}>
        <Menu
          shouldOverlapWithTrigger={shouldOverlapWithTrigger}
          placement="bottom left"
          trigger={(triggerProps) => {
            return (
              <Button variant="ghost" {...triggerProps}>
                Bottom left
              </Button>
            );
          }}
        >
          <Menu.Item>Large Menu Item 1</Menu.Item>
          <Menu.Item>Large Menu Item 2</Menu.Item>
          <Menu.Item>Large Menu Item 3</Menu.Item>
        </Menu>

        <Menu
          shouldOverlapWithTrigger={shouldOverlapWithTrigger}
          placement="bottom"
          trigger={(triggerProps) => {
            return (
              <Button variant="ghost" {...triggerProps}>
                Bottom
              </Button>
            );
          }}
        >
          <Menu.Item>Large Menu Item 1</Menu.Item>
          <Menu.Item>Large Menu Item 2</Menu.Item>
          <Menu.Item>Large Menu Item 3</Menu.Item>
        </Menu>

        <Menu
          shouldOverlapWithTrigger={shouldOverlapWithTrigger}
          placement="bottom right"
          trigger={(triggerProps) => {
            return (
              <Button variant="ghost" {...triggerProps}>
                Bottom right
              </Button>
            );
          }}
        >
          <Menu.Item>Large Menu Item 1</Menu.Item>
          <Menu.Item>Large Menu Item 2</Menu.Item>
          <Menu.Item>Large Menu Item 3</Menu.Item>
        </Menu>
      </HStack>

      <HStack space={6}>
        <Menu
          shouldOverlapWithTrigger={shouldOverlapWithTrigger}
          placement="left top"
          trigger={(triggerProps) => {
            return (
              <Button variant="ghost" {...triggerProps}>
                Left top
              </Button>
            );
          }}
        >
          <Menu.Item>Large Menu Item 1</Menu.Item>
          <Menu.Item>Large Menu Item 2</Menu.Item>
          <Menu.Item>Large Menu Item 3</Menu.Item>
        </Menu>
        <Menu
          shouldOverlapWithTrigger={shouldOverlapWithTrigger}
          placement="left"
          trigger={(triggerProps) => {
            return (
              <Button variant="ghost" {...triggerProps}>
                Left
              </Button>
            );
          }}
        >
          <Menu.Item>Large Menu Item 1</Menu.Item>
          <Menu.Item>Large Menu Item 2</Menu.Item>
          <Menu.Item>Large Menu Item 3</Menu.Item>
        </Menu>

        <Menu
          shouldOverlapWithTrigger={shouldOverlapWithTrigger}
          placement="left bottom"
          trigger={(triggerProps) => {
            return (
              <Button variant="ghost" {...triggerProps}>
                Left bottom
              </Button>
            );
          }}
        >
          <Menu.Item>Large Menu Item 1</Menu.Item>
          <Menu.Item>Large Menu Item 2</Menu.Item>
          <Menu.Item>Large Menu Item 3</Menu.Item>
        </Menu>
      </HStack>
    </VStack>
  );
}
