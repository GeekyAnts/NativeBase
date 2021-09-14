import React from 'react';
import { Button, Divider, Heading, VStack } from 'native-base';

export const Example = () => {
  return (
    <VStack space={4} px={2} w="100%" alignItems="center">
      {/* Solid */}

      <Heading size="sm">Solid</Heading>
      <Button.Group variant="solid" mx={{ base: 'auto', md: 0 }}>
        <Button colorScheme="teal">Save</Button>
        <Button colorScheme="danger">Cancel</Button>
      </Button.Group>

      <Divider />

      <Heading size="sm">Outline</Heading>

      {/* Outline */}
      <Button.Group variant="outline" mx={{ base: 'auto', md: 0 }}>
        <Button colorScheme="teal">Save</Button>
        <Button colorScheme="danger">Cancel</Button>
      </Button.Group>

      <Divider />

      <Heading size="sm">Link</Heading>

      {/* Link */}
      <Button.Group variant="link" mx={{ base: 'auto', md: 0 }}>
        <Button colorScheme="teal">Save</Button>
        <Button colorScheme="danger">Cancel</Button>
      </Button.Group>

      <Divider />

      <Heading size="sm">Ghost</Heading>

      {/* Ghost */}
      <Button.Group variant="ghost" mx={{ base: 'auto', md: 0 }}>
        <Button colorScheme="teal">Save</Button>
        <Button colorScheme="danger">Cancel</Button>
      </Button.Group>

      <Divider />

      <Heading size="sm">Unstyled</Heading>

      {/* Unstyled */}
      <Button.Group variant="unstyled" mx={{ base: 'auto', md: 0 }}>
        <Button colorScheme="teal">Save</Button>
        <Button colorScheme="danger">Cancel</Button>
      </Button.Group>
    </VStack>
  );
};
