import React from 'react';
import { Tooltip, Button, VStack, Select, CheckIcon } from 'native-base';

export function Example() {
  const [position, setPosition] = React.useState('top left');

  return (
    <VStack space={6} alignSelf="flex-start" w="100%">
      {/* @ts-ignore */}
      <Tooltip label={position} placement={position}>
        <Button alignSelf="center">ToolTip</Button>
      </Tooltip>

      <Select
        selectedValue={position}
        mx={{ base: 0, md: 'auto' }}
        accessibilityLabel="Select a position for Tooltip"
        onValueChange={(nextValue) => setPosition(nextValue)}
        _selectedItem={{
          bg: 'cyan.600',
          endIcon: <CheckIcon size={4} />,
        }}
      >
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
