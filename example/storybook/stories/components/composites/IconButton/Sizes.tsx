import React from 'react';
import { Stack, IconButton, Icon } from 'native-base';
export default function () {
  return (
    <Stack space={4}>
      {['sm', 'md', 'lg'].map((size: any) => (
        <IconButton
          size={size}
          variant="solid"
          colorScheme="emerald"
          icon={<Icon name={'menu'} color="white" />}
        />
      ))}
    </Stack>
  );
}
