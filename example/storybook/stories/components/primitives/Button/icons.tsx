import React from 'react';
import { Button, Stack, Icon } from 'native-base';
import { Ionicons } from '@expo/vector-icons';

export const Example = () => {
  return (
    <Stack direction={{ base: 'column', md: 'row' }} space={4}>
      <Button
        rightIcon={
          <Icon as={Ionicons} name="reload-circle-outline" size="sm" />
        }
      >
        Reset
      </Button>
      <Button
        variant="outline"
        endIcon={
          <Icon as={Ionicons} name="checkmark-done-circle-outline" size="sm" />
        }
      >
        Confirm
      </Button>
    </Stack>
  );
};
