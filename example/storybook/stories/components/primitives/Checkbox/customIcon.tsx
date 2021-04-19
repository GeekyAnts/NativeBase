import React from 'react';
import { Checkbox, VStack, Icon } from 'native-base';

export default function () {
  return (
    <VStack space={3} alignItems="flex-start">
      <Checkbox
        value="orange"
        colorScheme="orange"
        size="md"
        icon={<Icon name="bullseye" type="MaterialCommunityIcons" />}
        defaultIsChecked
      >
        Darts
      </Checkbox>
      <Checkbox
        value="dark"
        colorScheme="dark"
        size="md"
        icon={<Icon name="bat" type="MaterialCommunityIcons" />}
        defaultIsChecked
      >
        Movie
      </Checkbox>
      <Checkbox
        colorScheme="red"
        value="red"
        size="md"
        icon={<Icon name="campfire" type="MaterialCommunityIcons" />}
        defaultIsChecked
      >
        Camping
      </Checkbox>
      <Checkbox
        value="blue"
        colorScheme="blue"
        size="md"
        icon={<Icon name="chess-knight" type="MaterialCommunityIcons" />}
        defaultIsChecked
      >
        Chess
      </Checkbox>
    </VStack>
  );
}
