import React from 'react';
import { Button, Divider, Heading, VStack, Stack } from 'native-base';

export const Example = () => {
  return (
    <VStack space={4} px={2} w="100%">
      {/* Solid */}
      <Heading size="xs" textAlign="left">
        Solid
      </Heading>
      <Stack
        direction={{ base: 'column', md: 'row' }}
        space={2}
        mx={{ base: 'auto', md: 0 }}
      >
        <Button size="sm" onPress={() => console.log('hello world')}>
          PRIMARY
        </Button>
        <Button
          size="sm"
          colorScheme="secondary"
          onPress={() => console.log('hello world')}
        >
          SECONDARY
        </Button>
        <Button size="sm" isDisabled onPress={() => console.log('hello world')}>
          DISABLED
        </Button>
      </Stack>

      <Divider />

      <Heading size="xs">Outline</Heading>

      {/* Outline */}
      <Stack
        direction={{ base: 'column', md: 'row' }}
        space={2}
        mx={{ base: 'auto', md: 0 }}
      >
        <Button
          size="sm"
          variant="outline"
          onPress={() => console.log('hello world')}
        >
          PRIMARY
        </Button>
        <Button
          size="sm"
          variant="outline"
          colorScheme="secondary"
          onPress={() => console.log('hello world')}
        >
          SECONDARY
        </Button>
        <Button
          size="sm"
          variant="outline"
          isDisabled
          onPress={() => console.log('hello world')}
        >
          DISABLED
        </Button>
      </Stack>
      <Divider />

      <Heading size="xs">Link</Heading>

      {/* Link */}
      <Stack
        direction={{ base: 'column', md: 'row' }}
        space={2}
        mx={{ base: 'auto', md: 0 }}
      >
        <Button
          size="sm"
          variant="link"
          onPress={() => console.log('hello world')}
        >
          PRIMARY
        </Button>
        <Button
          size="sm"
          variant="link"
          colorScheme="secondary"
          onPress={() => console.log('hello world')}
        >
          SECONDARY
        </Button>
        <Button
          size="sm"
          variant="link"
          isDisabled
          onPress={() => console.log('hello world')}
        >
          DISABLED
        </Button>
      </Stack>
      <Divider />

      <Heading size="xs">Ghost</Heading>

      {/* Ghost */}
      <Stack
        direction={{ base: 'column', md: 'row' }}
        space={2}
        mx={{ base: 'auto', md: 0 }}
      >
        <Button
          size="sm"
          variant="ghost"
          onPress={() => console.log('hello world')}
        >
          PRIMARY
        </Button>
        <Button
          size="sm"
          variant="ghost"
          colorScheme="secondary"
          onPress={() => console.log('hello world')}
        >
          SECONDARY
        </Button>
        <Button
          size="sm"
          variant="ghost"
          isDisabled
          onPress={() => console.log('hello world')}
        >
          DISABLED
        </Button>
      </Stack>

      <Divider />

      <Heading size="xs">Unstyled</Heading>

      {/* Unstyled */}
      <Stack
        direction={{ base: 'column', md: 'row' }}
        space={2}
        mx={{ base: 'auto', md: 0 }}
      >
        <Button variant="unstyled" onPress={() => console.log('hello world')}>
          Unstyled
        </Button>
      </Stack>
    </VStack>
  );
};
