import React from 'react';
import { Badge, Button, VStack, Box } from 'native-base';

export function Example() {
  return (
    <Box alignItems="center">
      <VStack>
        <Badge
          // bg="red.400"
          colorScheme="danger"
          rounded="full"
          mb={-4}
          mr={-4}
          zIndex={1}
          variant="solid"
          alignSelf="flex-end"
          _text={{ fontSize: 12 }}
        >
          2
        </Badge>
        <Button
          mx={{ base: 'auto', md: 0 }}
          p="2"
          bg="cyan.500"
          _text={{ fontSize: 14 }}
        >
          Notifications
        </Button>
      </VStack>
    </Box>
  );
}
