import React from 'react';
import { Tooltip, Button, VStack, HStack } from 'native-base';

export function Example() {
  return (
    <VStack space={6}>
      <Tooltip label="Auto">
        <Button>Auto</Button>
      </Tooltip>

      <HStack space={6}>
        <Tooltip label="Top start" placement="top left">
          <Button>Top-Start</Button>
        </Tooltip>

        <Tooltip label="Top" placement="top">
          <Button>Top</Button>
        </Tooltip>

        <Tooltip label="Top end" placement="top right">
          <Button>Top right</Button>
        </Tooltip>
      </HStack>

      <HStack space={6}>
        <Tooltip label="Right top" placement="right top">
          <Button>Right top</Button>
        </Tooltip>

        <Tooltip label="Right" placement="right">
          <Button>Right</Button>
        </Tooltip>

        <Tooltip label="Right bottom" placement="right bottom">
          <Button>Right bottom</Button>
        </Tooltip>
      </HStack>

      <HStack space={6}>
        <Tooltip label="Bottom left" placement="bottom left">
          <Button>Bottom left</Button>
        </Tooltip>

        <Tooltip label="Bottom" placement="bottom">
          <Button>Bottom</Button>
        </Tooltip>

        <Tooltip label="Bottom right" placement="bottom right">
          <Button>Bottom right</Button>
        </Tooltip>
      </HStack>

      <HStack space={6}>
        <Tooltip label="Left top" placement="left top">
          <Button>Left top</Button>
        </Tooltip>

        <Tooltip label="Left" placement="left">
          <Button>Left</Button>
        </Tooltip>

        <Tooltip label="Left bottom" placement="left bottom">
          <Button>Left bottom</Button>
        </Tooltip>
      </HStack>
    </VStack>
  );
}
