import React from 'react';
import { Button, VStack, Heading, Divider, ScrollView } from 'native-base';

export const Example = () => {
  return (
    <>
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
          <Button.Group
            mb="2.5"
            mt="1.5"
            isAttached
            variant="solid"
            mx={{ base: 'auto', md: 0 }}
          >
            <Button colorScheme="teal">Save</Button>
            <Button colorScheme="danger">Cancel</Button>
          </Button.Group>

          <Divider />

          {/* Outline */}
          <Heading size="md">Outline</Heading>
          <Button.Group
            mb="2.5"
            mt="1.5"
            isAttached
            variant="outline"
            mx={{ base: 'auto', md: 0 }}
          >
            <Button colorScheme="teal">Save</Button>
            <Button colorScheme="danger">Cancel</Button>
          </Button.Group>

          <Divider />

          <Heading size="md">Link</Heading>

          {/* Link */}
          <Button.Group
            isAttached
            mb="2.5"
            mt="1.5"
            variant="link"
            mx={{ base: 'auto', md: 0 }}
          >
            <Button colorScheme="teal">Save</Button>
            <Button colorScheme="danger">Cancel</Button>
          </Button.Group>

          <Divider />

          <Heading size="md">Ghost</Heading>

          {/* Ghost */}
          <Button.Group mb="2.5" mt="1.5" variant="ghost">
            <Button colorScheme="teal">Save</Button>
            <Button colorScheme="danger">Cancel</Button>
          </Button.Group>

          <Divider />

          <Heading size="md">Unstyled</Heading>

          {/* Unstyled */}

          <Button.Group
            isAttached
            variant="unstyled"
            mb="2.5"
            mt="1.5"
            mx={{ base: 'auto', md: 0 }}
          >
            <Button colorScheme="teal">Save</Button>
            <Button colorScheme="danger">Cancel</Button>
          </Button.Group>
        </VStack>
      </ScrollView>
    </>
  );
};
