//@ts-nocheck
import React from 'react';
import { Stack, Center, Heading, ScrollView, Box, Divider } from 'native-base';

export function Example() {
  return (
    <ScrollView>
      <Stack direction={{ base: 'column', sm: 'row', lg: 'row' }} space="3">
        <Box p="4" bg={'red.500'}>
          Box 1
        </Box>
        <Box p="4" bg={'red.500'}>
          Box 2
        </Box>
        <Box p="4" bg={'red.500'}>
          Box 3
        </Box>
      </Stack>
    </ScrollView>
  );
}
