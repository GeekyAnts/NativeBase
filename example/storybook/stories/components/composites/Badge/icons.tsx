import React from 'react';
import { Badge, Stack, AddIcon } from 'native-base';

export const Example = () => {
  return (
    <Stack direction={{ base: 'column', md: 'row' }} space={4}>
      <Badge colorScheme="success" endIcon={<AddIcon size="2xs" />}>
        SUCCESS
      </Badge>
      <Badge
        colorScheme="warning"
        variant="outline"
        startIcon={<AddIcon size="2xs" />}
      >
        SUCCESS
      </Badge>
    </Stack>
  );
};
