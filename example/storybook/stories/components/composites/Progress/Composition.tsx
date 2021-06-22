import React from 'react';
import { Box, Progress, Center, Heading, Text, Flex } from 'native-base';

export const Example = () => {
  return (
    <Box w="90%">
      <Center mb={8}>
        <Heading>Progress Composition</Heading>
      </Center>
      <Text mb={2}>Add Label inside Progress</Text>
      <Progress size="xl" mb={4} value={45}>
        <Text color="white" bold>
          45%
        </Text>
      </Progress>
      <Text mb={2}>Add Label outside Progress</Text>
      <Flex direction="row">
        <Progress size="xl" flex={1} mb={4} value={75} />
        <Text bold ml={2}>
          75%
        </Text>
      </Flex>
    </Box>
  );
};
