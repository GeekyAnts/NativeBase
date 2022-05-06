import React from 'react';
import { Button, Divider, Heading, VStack, ScrollView } from 'native-base';

export const Example = () => {
  return (
    <ScrollView>
      <VStack
        w="100%"
        space={2.5}
        mt="4"
        alignItems="center"
        justifyContent="center"
      >
        {/* Solid */}
        <Heading size="md">Solid</Heading>
        <Button.Group variant="solid" mb="2.5" mt="1.5">
          <Button colorScheme="teal">Save</Button>
          <Button colorScheme="danger">Cancel</Button>
        </Button.Group>

        <Divider />

        {/* Subtle */}
        <Heading size="md">Subtle</Heading>
        <Button.Group mb="2.5" mt="1.5" variant="subtle">
          <Button colorScheme="teal">Save</Button>
          <Button colorScheme="danger">Cancel</Button>
        </Button.Group>

        <Divider />

        {/* Outline */}
        <Heading size="md">Outline</Heading>
        <Button.Group mb="2.5" mt="1.5" variant="outline">
          <Button colorScheme="teal">Save</Button>
          <Button colorScheme="danger">Cancel</Button>
        </Button.Group>

        <Divider />

        {/* Link */}
        <Heading size="md">Link</Heading>
        <Button.Group mb="2.5" mt="1.5" variant="link">
          <Button colorScheme="teal">Save</Button>
          <Button colorScheme="danger">Cancel</Button>
        </Button.Group>

        <Divider />

        {/* Ghost */}
        <Heading size="md">Ghost</Heading>
        <Button.Group mb="2.5" mt="1.5" variant="ghost">
          <Button colorScheme="teal">Save</Button>
          <Button colorScheme="danger">Cancel</Button>
        </Button.Group>

        <Divider />

        {/* Unstyled */}
        <Heading size="md">Unstyled</Heading>
        <Button.Group mb="2.5" mt="1.5" variant="unstyled">
          <Button colorScheme="teal">Save</Button>
          <Button colorScheme="danger">Cancel</Button>
        </Button.Group>
      </VStack>
    </ScrollView>
  );
};
