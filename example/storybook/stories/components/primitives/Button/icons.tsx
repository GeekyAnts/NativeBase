import React from 'react';
import { Button, Stack, Icon } from 'native-base';
import { Ionicons } from '@expo/vector-icons';

export const Example = () => {
  return (
    <Stack direction={{ base: 'column', md: 'row' }} space={4}>
      <Button
        leftIcon={<Icon as={Ionicons} name="cloud-upload-outline" size="sm" />}
      >
        Upload
      </Button>
      <Button
        variant="subtle"
        endIcon={<Icon as={Ionicons} name="cloud-download-outline" size="sm" />}
      >
        Download
      </Button>
    </Stack>
  );
};
