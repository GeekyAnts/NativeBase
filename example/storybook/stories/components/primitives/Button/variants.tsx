import React from 'react';
import { Button, Divider, Heading, HStack, VStack } from 'native-base';

export const Example = () => {
  return (
    <VStack space={4} px={2}>
      {/* Solid */}
      <Heading size="xs" textAlign="left">
        Solid
      </Heading>
      <HStack space={2}>
        <Button onPress={() => console.log('hello world')}>PRIMARY</Button>
        <Button
          colorScheme="secondary"
          onPress={() => console.log('hello world')}
        >
          SECONDARY
        </Button>
        <Button isDisabled onPress={() => console.log('hello world')}>
          DISABLED
        </Button>
      </HStack>

      <Divider />

      <Heading size="xs">Outline</Heading>

      {/* Outline */}
      <HStack space={2}>
        <Button variant="outline" onPress={() => console.log('hello world')}>
          PRIMARY
        </Button>
        <Button
          variant="outline"
          colorScheme="secondary"
          onPress={() => console.log('hello world')}
        >
          SECONDARY
        </Button>
        <Button
          variant="outline"
          isDisabled
          onPress={() => console.log('hello world')}
        >
          DISABLED
        </Button>
      </HStack>
      <Divider />

      <Heading size="xs">Link</Heading>

      {/* Link */}
      <HStack space={2}>
        <Button variant="link" onPress={() => console.log('hello world')}>
          PRIMARY
        </Button>
        <Button
          variant="link"
          colorScheme="secondary"
          onPress={() => console.log('hello world')}
        >
          SECONDARY
        </Button>
        <Button
          variant="link"
          isDisabled
          onPress={() => console.log('hello world')}
        >
          DISABLED
        </Button>
      </HStack>
      <Divider />

      <Heading size="xs">Ghost</Heading>

      {/* Ghost */}
      <HStack space={2}>
        <Button variant="ghost" onPress={() => console.log('hello world')}>
          PRIMARY
        </Button>
        <Button
          variant="ghost"
          colorScheme="secondary"
          onPress={() => console.log('hello world')}
        >
          SECONDARY
        </Button>
        <Button
          variant="ghost"
          isDisabled
          onPress={() => console.log('hello world')}
        >
          DISABLED
        </Button>
      </HStack>

      <Divider />

      <Heading size="xs">Unstyled</Heading>

      {/* Unstyled */}
      <HStack space={2}>
        <Button variant="unstyled" onPress={() => console.log('hello world')}>
          Unstyled
        </Button>
      </HStack>
    </VStack>
  );
};
