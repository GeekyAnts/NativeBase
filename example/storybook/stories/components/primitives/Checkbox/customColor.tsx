import React from 'react';
import { Checkbox, Stack, Box } from 'native-base';

export const Example = () => {
  return (
    <Box alignItems="center">
      <Stack
        direction={{ base: 'column', md: 'row' }}
        space={3}
        alignItems="flex-start"
      >
        <Checkbox value="danger" colorScheme="danger" defaultIsChecked>
          Danger
        </Checkbox>
        <Checkbox value="info" colorScheme="info" defaultIsChecked>
          Info
        </Checkbox>
        <Checkbox value="orange" colorScheme="orange" defaultIsChecked>
          Orange
        </Checkbox>
        <Checkbox value="purple" colorScheme="purple" defaultIsChecked>
          Purple
        </Checkbox>
      </Stack>
    </Box>
  );
};
