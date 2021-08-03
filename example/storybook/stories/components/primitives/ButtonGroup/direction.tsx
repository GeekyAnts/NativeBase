import React from 'react';
import { Button, Divider, Heading, VStack } from 'native-base';

export const Example = () => {
  return (
    <VStack space={4} px={2} w="100%">
      {/* Row */}
      <Heading size="xs" textAlign="left">
        Row
      </Heading>
      <Button.Group
        variant="solid"
        direction="row"
        mx={{ base: 'auto', md: 0 }}
      >
        <Button colorScheme="teal">Save</Button>
        <Button colorScheme="danger">Cancel</Button>
      </Button.Group>

      <Divider />

      {/* Column */}

      <Heading size="xs" textAlign="left">
        Column
      </Heading>
      <Button.Group
        variant="solid"
        direction="column"
        mx={{ base: 'auto', md: 0 }}
      >
        <Button colorScheme="teal">Save</Button>
        <Button colorScheme="danger">Cancel</Button>
      </Button.Group>
    </VStack>
  );
};
