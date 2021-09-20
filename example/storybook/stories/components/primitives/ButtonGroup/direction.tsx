import React from 'react';
import { Button, Divider, Heading, VStack, Center } from 'native-base';

export const Example = () => {
  return (
    <VStack
      w={{ base: '50%', md: '25%' }}
      space={2.5}
      px="2"
      alignItems="center"
    >
      {/* Row */}
      <Center w="100%">
        <Heading mb="4" size="md">
          Row
        </Heading>
        <Button.Group
          variant="solid"
          direction="row"
          mx={{ base: 'auto', md: 0 }}
        >
          <Button colorScheme="teal">Save</Button>
          <Button colorScheme="rose">Cancel</Button>
        </Button.Group>
        <Divider mt={5} />
      </Center>

      {/* Column */}
      <Center>
        <Heading mb="4" size="md">
          Column
        </Heading>
        <Button.Group
          variant="solid"
          direction="column"
          mx={{ base: 'auto', md: 0 }}
        >
          <Button colorScheme="teal">Save</Button>
          <Button colorScheme="rose">Cancel</Button>
        </Button.Group>
      </Center>
    </VStack>
  );
};
