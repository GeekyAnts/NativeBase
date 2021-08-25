import React from 'react';
import { Button, Stack, Icon } from 'native-base';
import { Ionicons } from '@expo/vector-icons';

export const Example = () => {
  return (
    <Stack direction={{ base: 'column', md: 'row' }} space={4}>
      <Button
        rightIcon={<Icon as={Ionicons} name="refresh-outline" size={5} />}
      >
        Reset
      </Button>
      <Button
        variant="outline"
        endIcon={
          <Icon as={Ionicons} name="checkmark-done-circle-outline" size={5} />
        }
      >
        Confirm
      </Button>
    </Stack>
  );
};
