import React from 'react';
import { Badge, Stack, AddIcon } from 'native-base';

export const Example = () => {
  return (
    <Stack direction={{ base: 'column', md: 'row' }} space={4}>
      <Badge colorScheme="success" endIcon={<AddIcon size="xxs" />}>
        SUCCESS
      </Badge>
      <Badge
        colorScheme="success"
        variant="subtle"
        startIcon={<AddIcon size="xxs" />}
      >
        SUCCESS
      </Badge>
    </Stack>
  );
};
