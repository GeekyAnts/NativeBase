import React from 'react';
import { Box, TextArea, Text, Stack, Divider } from 'native-base';

export const Example = () => {
  return (
    <Stack space={2.5} w={{ base: '70%', md: '25%' }}>
      <Box w="100%">
        <Text mb="4" bold fontSize="lg">
          Invalid TextArea
        </Text>
        <TextArea
          aria-label="t1"
          numberOfLines={4}
          placeholder="Invalid TextArea"
          isInvalid
          _dark={{ placeholderTextColor: 'gray.300' }}
          mb="5"
        />
        <Divider />
      </Box>
      <Box>
        <Text bold fontSize="lg" mb="4">
          Disabled TextArea
        </Text>

        <TextArea
          aria-label="t1Disabled"
          placeholder="Disabled TextArea"
          isDisabled
        />
      </Box>
    </Stack>
  );
};
