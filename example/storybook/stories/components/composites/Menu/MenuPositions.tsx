import React from 'react';
import { Menu, Button, VStack, Select, CheckIcon } from 'native-base';

export function Example() {
  const [shouldOverlapWithTrigger] = React.useState(false);

  const [position, setPosition] = React.useState('auto');
  return (
    <VStack space={6} alignSelf="flex-start" w="100%">
      <Menu
        w="160"
        shouldOverlapWithTrigger={shouldOverlapWithTrigger}
        // @ts-ignore
        placement={position == 'auto' ? undefined : position}
        trigger={(triggerProps) => {
          return (
            <Button alignSelf="center" variant="solid" {...triggerProps}>
              Menu
            </Button>
          );
        }}
      >
        <Menu.Item>Arial</Menu.Item>
        <Menu.Item>Nunito Sans</Menu.Item>
        <Menu.Item>Roboto</Menu.Item>
      </Menu>

      <Select
        selectedValue={position}
        mx={{ base: 0, md: 'auto' }}
        onValueChange={(nextValue) => setPosition(nextValue)}
        _selectedItem={{
          bg: 'cyan.600',
          endIcon: <CheckIcon size={4} />,
        }}
        accessibilityLabel="Select a position for Menu"
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
  );
}
