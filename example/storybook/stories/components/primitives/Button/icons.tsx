import React from 'react';
import { Button, Stack, Icon } from 'native-base';
import { MaterialCommunityIcons, Ionicons } from '@expo/vector-icons';

export const Example = () => {
  return (
    <Stack direction={{ base: 'column', md: 'row' }} space={4}>
      <Button
        startIcon={<Icon as={MaterialCommunityIcons} name="email" size={5} />}
      >
        Email
      </Button>
      <Button
        variant="outline"
        endIcon={<Icon as={Ionicons} name="arrow-forward" size={4} />}
      >
        Call us
      </Button>
    </Stack>
  );
};
