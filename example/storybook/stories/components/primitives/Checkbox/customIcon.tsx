import React from 'react';
import { Checkbox, Stack, Icon, Box } from 'native-base';
import { MaterialCommunityIcons } from '@expo/vector-icons';

export const Example = () => {
  return (
    <Box alignItems="center">
      <Stack
        direction={{ base: 'column', md: 'row' }}
        space={3}
        alignItems="flex-start"
      >
        <Checkbox
          value="orange"
          colorScheme="orange"
          size="md"
          icon={<Icon as={<MaterialCommunityIcons name="bullseye" />} />}
          defaultIsChecked
        >
          Darts
        </Checkbox>
        <Checkbox
          value="dark"
          colorScheme="dark"
          size="md"
          icon={<Icon as={<MaterialCommunityIcons name="bat" />} />}
          defaultIsChecked
        >
          Movie
        </Checkbox>
        <Checkbox
          colorScheme="red"
          value="red"
          size="md"
          icon={<Icon as={<MaterialCommunityIcons name="campfire" />} />}
          defaultIsChecked
        >
          Camping
        </Checkbox>
        <Checkbox
          value="blue"
          colorScheme="blue"
          size="md"
          icon={<Icon as={<MaterialCommunityIcons name="chess-knight" />} />}
          defaultIsChecked
        >
          Chess
        </Checkbox>
      </Stack>
    </Box>
  );
};
