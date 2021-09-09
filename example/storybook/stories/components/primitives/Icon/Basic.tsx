import React from 'react';
import { Icon, MoonIcon, Stack } from 'native-base';
import { Ionicons } from '@expo/vector-icons';

export const Example = () => {
  return (
    <Stack direction={{ base: 'column', md: 'row' }} space={8}>
      <MoonIcon />
      <Icon as={Ionicons} name="md-checkmark-circle" />
    </Stack>
  );
};
