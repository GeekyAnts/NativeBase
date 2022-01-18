import React, { useState } from 'react';
import { Popover, Button, VStack, Select, CheckIcon, Box } from 'native-base';

export function Example() {
  const [position, setPosition] = useState('auto');

  return (
    <Box h="60%" w="100%" alignItems="center">
      <VStack space={6} alignSelf="flex-start" w="100%">
        <Popover
          // @ts-ignore
          placement={position === 'auto' ? undefined : position}
          trigger={(triggerProps) => {
            return (
              <Button colorScheme="danger" alignSelf="center" {...triggerProps}>
                Delete Customer
              </Button>
            );
          }}
        >
          <Popover.Content w="56">
            <Popover.Arrow />
            <Popover.CloseButton />
            <Popover.Header>Delete Customer</Popover.Header>
            <Popover.Body>
              This will remove all data relating to Alex. This action cannot be
              reversed. Deleted data can not be recovered.
            </Popover.Body>
            <Popover.Footer justifyContent="flex-end">
              <Button.Group space={2}>
                <Button colorScheme="coolGray" variant="ghost">
                  Cancel
                </Button>
                <Button colorScheme="danger">Delete</Button>
              </Button.Group>
            </Popover.Footer>
          </Popover.Content>
        </Popover>

        <Select
          selectedValue={position}
          mx={{ base: 0, md: 'auto' }}
          accessibilityLabel="Select a position for Popover"
          onValueChange={(nextValue) => setPosition(nextValue)}
          _selectedItem={{
            bg: 'cyan.600',
            endIcon: <CheckIcon size={4} />,
          }}
        >
          <Select.Item label="auto" value="auto" />
          <Select.Item label="Top Left" value="top left" />
          <Select.Item label="Top" value="top" />
          <Select.Item label="Top Right" value="top right" />
          <Select.Item label="Right Top" value="right top" />
          <Select.Item label="Right" value="right" />
          <Select.Item label="Right Bottom" value="right bottom" />
          <Select.Item label="Bottom Left" value="bottom left" />
          <Select.Item label="Bottom" value="bottom" />
          <Select.Item label="Bottom Right" value="bottom right" />
          <Select.Item label="Left Top" value="left top" />
          <Select.Item label="Left" value="left" />
          <Select.Item label="Left Bottom" value="left bottom" />
        </Select>
      </VStack>
    </Box>
  );
}
