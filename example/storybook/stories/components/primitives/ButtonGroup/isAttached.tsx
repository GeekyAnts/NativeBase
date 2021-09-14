import React from 'react';
import { Button, VStack, Heading, Divider } from 'native-base';

export const Example = () => {
  return (
    <VStack space={4} px={2} w="100%" alignItems="center">
      {/* Solid */}
      <Heading size="sm">Solid</Heading>
      <Button.Group isAttached variant="solid" mx={{ base: 'auto', md: 0 }}>
        <Button colorScheme="teal">Save</Button>
        <Button colorScheme="danger">Cancel</Button>
      </Button.Group>

      <Divider />

      {/* Outline */}
      <Heading size="sm">Outline</Heading>
      <Button.Group isAttached variant="outline" mx={{ base: 'auto', md: 0 }}>
        <Button colorScheme="teal">Save</Button>
        <Button colorScheme="danger">Cancel</Button>
      </Button.Group>

      <Divider />

      <Heading size="sm">Link</Heading>
      <Button.Group isAttached variant="link" mx={{ base: 'auto', md: 0 }}>
        <Button colorScheme="teal">Save</Button>
        <Button colorScheme="danger">Cancel</Button>
      </Button.Group>

      <Divider />

      {/* Unstyled */}
      <Heading size="sm">Ghost</Heading>
      <Button.Group isAttached variant="ghost" mx={{ base: 'auto', md: 0 }}>
        <Button colorScheme="teal">Save</Button>
        <Button colorScheme="danger">Cancel</Button>
      </Button.Group>

      <Divider />

      {/* Unstyled */}
      <Heading size="sm">Unstyled</Heading>
      <Button.Group isAttached variant="unstyled" mx={{ base: 'auto', md: 0 }}>
        <Button colorScheme="teal">Save</Button>
        <Button colorScheme="danger">Cancel</Button>
      </Button.Group>
    </VStack>
  );
};
