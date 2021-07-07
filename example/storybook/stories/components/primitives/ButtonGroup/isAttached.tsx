import React from 'react';
import { Button, VStack, Heading, Divider } from 'native-base';

export const Example = () => {
  return (
    <VStack space={4} px={2} w="100%">
      {/* Solid */}
      <Heading size="xs" textAlign="left">
        Solid
      </Heading>
      <Button.Group isAttached variant="solid" mx={{ base: 'auto', md: 0 }}>
        <Button colorScheme="teal">Save</Button>
        <Button colorScheme="danger">Cancel</Button>
      </Button.Group>

      <Divider />

      {/* Outline */}
      <Heading size="xs" textAlign="left">
        Outline
      </Heading>
      <Button.Group isAttached variant="outline" mx={{ base: 'auto', md: 0 }}>
        <Button colorScheme="teal">Save</Button>
        <Button colorScheme="danger">Cancel</Button>
      </Button.Group>

      <Divider />

      <Heading size="xs" textAlign="left">
        Link
      </Heading>
      <Button.Group isAttached variant="link" mx={{ base: 'auto', md: 0 }}>
        <Button colorScheme="teal">Save</Button>
        <Button colorScheme="danger">Cancel</Button>
      </Button.Group>

      <Divider />

      {/* Unstyled */}
      <Heading size="xs" textAlign="left">
        Ghost
      </Heading>
      <Button.Group isAttached variant="ghost" mx={{ base: 'auto', md: 0 }}>
        <Button colorScheme="teal">Save</Button>
        <Button colorScheme="danger">Cancel</Button>
      </Button.Group>

      <Divider />

      {/* Unstyled */}
      <Heading size="xs" textAlign="left">
        Unstyled
      </Heading>
      <Button.Group isAttached variant="unstyled" mx={{ base: 'auto', md: 0 }}>
        <Button colorScheme="teal">Save</Button>
        <Button colorScheme="danger">Cancel</Button>
      </Button.Group>
    </VStack>
  );
};
