import React from 'react';
import { Checkbox, HStack, Text, Icon } from 'native-base';

export default function () {
  return (
    <HStack>
      <Checkbox
        value="orange"
        colorScheme="orange"
        size="md"
        icon={<Icon name="bullseye" type="MaterialCommunityIcons" />}
        defaultIsChecked
      >
        <Text mx={2}>Darts</Text>
      </Checkbox>
      <Checkbox
        value="dark"
        colorScheme="dark"
        size="md"
        icon={<Icon name="bat" type="MaterialCommunityIcons" />}
        defaultIsChecked
      >
        <Text mx={2}>Movie</Text>
      </Checkbox>
      <Checkbox
        colorScheme="red"
        value="red"
        size="md"
        icon={<Icon name="campfire" type="MaterialCommunityIcons" />}
        defaultIsChecked
      >
        <Text mx={2}>Camping</Text>
      </Checkbox>
      <Checkbox
        value="blue"
        colorScheme="blue"
        size="md"
        icon={<Icon name="chess-knight" type="MaterialCommunityIcons" />}
        defaultIsChecked
      >
        <Text mx={2}>Chess</Text>
      </Checkbox>
    </HStack>
  );
}
