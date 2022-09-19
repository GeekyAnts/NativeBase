//@ts-nocheck
import React from 'react';
import { Stack, Center, Button, ScrollView, Box, Divider } from 'native-base';

export default () => {
  return (
    <ScrollView>
      <Stack direction={{ base: 'row', sm: 'column', md: 'row' }} space="3">
        <Box p="4" bg={'red.500'}>
          Box 1
        </Box>
        <Box p="4" bg={'red.500'}>
          Box 2
        </Box>
        <Box p="4" bg={'red.500'}>
          Box 3
        </Box>
        <Button
          bg={{
            base: 'red.500',
            sm: 'teal.500',
            md: 'amber.500',
            lg: 'blue.500',
          }}
        >
          Hello world
        </Button>
      </Stack>
    </ScrollView>
  );
};
